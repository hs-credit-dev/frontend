<?php

namespace App\Nova;

use Davidpiesse\NovaToggle\Toggle;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\HasOne;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image as NovaImage;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;

class Image extends Resource {

    public static $model = \App\Image::class;
    public static $title = 'name';
    public static $search = [
        'name',
        'file_type'
    ];

    public function fields(Request $request) {
        return [
            ID::make()->sortable(),
            NovaImage::make('Image','id')->disk('preview')->disableDownload()->readonly(),
            Text::make('Name'),
            BelongsTo::make('User','user','App\Nova\User')->searchable(),
            Text::make('File name')->help('<a target="_blank" href="/image/'.$this->id.'">show image in new window</a>')->readonly()->hideFromIndex(),
            Toggle::make('Status')->width(70)->height(32)->default(1),
            //HasOne::make('App'),
        ];
    }

    public function cards(Request $request) {
        return [];
    }

    public function filters(Request $request) {
        return [];
    }

    public function lenses(Request $request) {
        return [];
    }

    public function actions(Request $request) {
        return [];
    }

    public static function authorizedToCreate(Request $request) {
        return false;
    }

    public function authorizedToDelete(Request $request) {
        return false;
    }

    public function authorizedToUpdate(Request $request) {
        return true;
    }

    public static function searchable() {
        return true;
    }

}
