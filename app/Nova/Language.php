<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;

class Language extends Resource {

    public static $model = \App\Language::class;
    public static $title = 'name';
    public static $search = [
        'name'
    ];

    public function fields(Request $request) {
        return [
            ID::make()->sortable(),
            Text::make('Name'),
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

}
