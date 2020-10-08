<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class ImageController extends Controller {

    public function index() {
        $data = \App\Image::where("user_id",uid())->get();
        return view("images", compact("data"));
    }

    public function create() {

    }

    public function store(Request $request) {

        // not logged in
        if(!uid()) return;

        // validate
        $request->validate([
            'file' => 'image|mimes:jpeg,bmp,png,gif,svg|size:9999'
        ]);

        // save image to database
        $img = $request->file('image');
        $path = $img->store('images','s3');
        $image = \App\Image::create([
            'name' => pathinfo($img->getClientOriginalName(),PATHINFO_FILENAME),
            'file_name' => basename($path),
            'file_size' => $img->getSize(),
            'file_type' => $img->extension(),
            'url' => Storage::disk('s3')->url($path),
            'user_id' => uid()
        ]);

        // create preview and thumbnail
        $org = \Intervention\Image\Facades\Image::make($request->file('image'));
        $jpg = Image::canvas($org->width(), $org->height(), '#dddddd');
        $jpg->insert($img);
        $preview = $jpg->encode('jpg', 98)->heighten(1080, function ($c) { $c->upsize(); })->widen(1920, function ($c) { $c->upsize(); });
        Storage::disk('s3')->put('previews/'.basename($path).".jpg", $preview->stream());
        $thumb = $preview->fit(300, 300);
        $temp = Storage::disk('s3')->put('thumbs/'.basename($path).".jpg", $thumb->stream());

        // get updated imagelist for the user
        $data = \App\Image::where("user_id",uid())->get();
        return view("images", compact("data"));

    }

    public function show(String $item) {
        $image = \App\Image::find($item);
        return view("image",["image" => $image]);
    }

    public function image(\App\Image $item) {
        // if user is the owner of the image, return image
        if($item->user_id==uid()) return Storage::disk('s3')->response('images/'.$item->file_name);

    }

    public function preview(\App\Image $item) {
        // if user is the owner of the image, return image preview
        if($item->user_id==uid()) return Storage::disk('s3')->response('previews/'.$item->file_name.".jpg");
    }

    public function thumb(\App\Image $item) {
        // if user is the owner of the image, return image thumb
        if($item->user_id==uid()) return Storage::disk('s3')->response('thumbs/'.$item->file_name.".jpg")   ;

    }

    public function edit(Image $image) {
        //
    }

    public function update(Request $request, Image $image) {
        //
    }

    public function destroy(Image $image) {
        //
    }

}
