<?php

namespace App\Nova;

use Davidpiesse\NovaToggle\Toggle;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;

class App extends Resource {

    public static $model = \App\App::class;
    public static $title = 'name';
    public static $search = [
        'name','code','description','url'
    ];

    public function fields(Request $request) {
        return [
            ID::make()->sortable(),
            Text::make('Code')->sortable()->rules('required','min:2','max:16'),
            Text::make('Name')->sortable()->rules('required','min:2','max:32'),
            Textarea::make('Description')->hideFromIndex(),
            Text::make('Version')->hideFromIndex()->default("1.0"),
            Text::make('Url')->rules('required','url'),
            Toggle::make('Status')->sortable()->width(70)->height(32)->default(1),
            BelongsTo::make('Image','image','App\Nova\Image')->searchable(),
            BelongsTo::make('Cover','image','App\Nova\Image')->searchable(),
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
