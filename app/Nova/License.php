<?php

namespace App\Nova;

use Davidpiesse\NovaToggle\Toggle;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Fields\Date;

class License extends Resource {

    public static $model = \App\License::class;
    public static $title = 'school';
    public static $search = [
        'school','user','app'
    ];

    public function fields(Request $request) {
        return [
            ID::make()->sortable(),
            BelongsTo::make('School','school','App\Nova\School')->searchable(),
            BelongsTo::make('App','app','App\Nova\App')->searchable(),
            BelongsTo::make('User','user','App\Nova\User')->searchable()->nullable()->hideFromIndex(),
            Date::make('Billed at')->nullable(),
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
