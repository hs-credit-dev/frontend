<?php

namespace App\Nova;

use Davidpiesse\NovaToggle\Toggle;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Textarea;

class Code extends Resource {

    public static $model = \App\Code::class;
    public static $title = 'name';
    public static $search = [
        'name','code','description'
    ];

    public function fields(Request $request) {
        return [
            ID::make()->sortable(),
            BelongsTo::make('User','user','App\Nova\User')->searchable(),
            Text::make('Code')->sortable()->rules('required','min:2','max:16'),
            Text::make('Name')->sortable()->rules('required','min:2','max:32'),
            Textarea::make('Description')->hideFromIndex(),
            Number::make('Amount')->min(1)->max(100000)->step(1)->default(1),
            Number::make('Discount')->min(1)->max(100)->step(1)->default(50),
            Toggle::make('Status')->width(70)->height(32)->default(1),
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
