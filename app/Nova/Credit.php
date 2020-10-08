<?php

namespace App\Nova;

use Davidpiesse\NovaToggle\Toggle;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;

class Credit extends Resource {

    public static $model = \App\Credit::class;
    public static $title = 'name';
    public static $search = [
        'name','description'
    ];

    public function fields(Request $request) {
        return [
            ID::make()->sortable(),
            BelongsTo::make('User','user','App\Nova\User')->searchable()->nullable()->hideFromIndex(),
            Text::make('Name')->sortable()->rules('required','min:2','max:32'),
            Textarea::make('Description')->hideFromIndex(),
            Number::make('Amount')->min(1)->max(100000)->step(1)->default(1),
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
