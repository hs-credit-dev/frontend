<?php

namespace App\Nova;

use Davidpiesse\NovaToggle\Toggle;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Fields\Date;

class School extends Resource {

    public static $model = \App\School::class;
    public static $title = 'name';
    public static $search = [
        'name','code','description','url'
    ];

    public function fields(Request $request) {
        return [
            ID::make()->sortable(),
            BelongsTo::make('User','user','App\Nova\User')->searchable()->nullable()->hideFromIndex(),
            Text::make('Code')->sortable()->rules('required','min:2','max:16'),
            Text::make('Name')->sortable()->rules('required','min:2','max:32'),
            Textarea::make('Description')->hideFromIndex(),
            Text::make('Email')->sortable()->rules('required','email'),
            Text::make('First Name')->sortable()->rules('required','min:2','max:32')->hideFromIndex(),
            Text::make('Last Name')->sortable()->rules('required','min:2','max:64')->hideFromIndex(),
            Text::make('Street Address')->sortable()->rules('required','min:2','max:64')->hideFromIndex(),
            Text::make('Zip Code')->sortable()->rules('required','min:2','max:64')->hideFromIndex(),
            Text::make('City')->sortable()->rules('required','min:2','max:64'),
            Text::make('Url')->rules('required','url')->hideFromIndex(),
            Date::make('Billed at')->nullable(),
            BelongsTo::make('Image','image','App\Nova\Image')->searchable()->hideFromIndex(),
            BelongsTo::make('Cover','image','App\Nova\Image')->searchable()->hideFromIndex(),
            BelongsTo::make('Country','country','App\Nova\Country')->nullable()->hideFromIndex(),
            BelongsTo::make('Language','language','App\Nova\Language')->nullable()->hideFromIndex(),
            Toggle::make('Status')->sortable()->width(70)->height(32)->default(1),
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
