<?php

namespace App\Http\Controllers;

use App\User;
use DB;
use Illuminate\Http\Request;


class UserController extends Controller {

    // list resources
    public function index() {
        $users = DB::table('users')->simplePaginate(50);
        return view("users.index", compact("users"));
    }

    // create resource form
    public function create() {
        return view('users.create');
    }

    // save resource
    public function store() {
        User::create($this->validateRequest());
        return redirect('/users')->with('success', 'User has been added');
    }

    // show resource
    public function show(User $user) {
        return view("users.show",compact("user"));
    }

    // edit resource form
    public function edit(User $user) {
        return view("users.edit",compact("user"));
    }

    // update resource
    public function update(Request $request, User $user) {
        $user->update($this->validateRequest());
        return redirect('/users/'.$article->id)->with('success', 'Stock has been updated');
    }

    // remove resource
    public function destroy(User $user) {

    }

    // validate
    public function validateRequest() {
        return request()->validate([
            'name'=>'required|min:3|max:32',
            'email'=> 'required|email',
            'password' => 'required|password'
        ])
    }

}
