<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\HasOne;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\Gravatar;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Password;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Select;

class User extends Resource {

    public static $model = \App\User::class;
    public static $title = 'name';
    public static $search = [
        'id', 'name', 'email',
    ];

    public function fields(Request $request) {
        return [
            ID::make()->sortable(),
            Select::make('Role')->options(['0' => 'Disabled','1' => 'User','2' => 'Edu','3' => 'Pro','4' => 'Moderator','5' => 'Admin'])->displayUsingLabels(),
            Text::make('Name')->sortable()->rules('required', 'max:255'),
            Text::make('Email')->sortable()->rules('required', 'email', 'max:254')->creationRules('unique:users,email')->updateRules('unique:users,email,{{resourceId}}'),
            Password::make('Password')->onlyOnForms()->creationRules('required', 'string', 'min:8')->updateRules('nullable', 'string', 'min:8'),
            Text::make('Description')->hideFromIndex(),
            Text::make('Username'),
            Text::make('First name'),
            Text::make('Last name')->hideFromIndex(),
            Text::make('Street Address')->hideFromIndex(),
            Text::make('Zip Code')->hideFromIndex(),
            Text::make('City')->hideFromIndex(),
            BelongsTo::make('Country','country','App\Nova\Country')->nullable(),
            BelongsTo::make('Language','language','App\Nova\Language')->nullable(),
            Text::make('Facebook_id')->hideFromIndex()->readonly(true),
            Text::make('Twitter_id')->hideFromIndex()->readonly(true),
            Text::make('Google_id')->hideFromIndex()->readonly(true),
            Text::make('Linkedin_id')->hideFromIndex()->readonly(true),
            Text::make('Github_id')->hideFromIndex()->readonly(true),
            BelongsTo::make('Image','image','App\Nova\Image')->searchable()->hideFromIndex(),
            BelongsTo::make('Cover','cover','App\Nova\Image')->searchable()->hideFromIndex(),
            HasMany::make('Images'),
            HasMany::make('Posts'),
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

/*
    $table->unsignedInteger('cover_id')->default(0);
    $table->unsignedInteger('points')->default(0);
    $table->unsignedInteger('credits')->default(0);
    $table->unsignedInteger('following')->default(0);
    $table->unsignedInteger('followed')->default(0);
    $table->string('newsletter_sent_at')->nullable();
    $table->timestamp('billed_at')->nullable();
    $table->timestamp('featured_at')->nullable();
    $table->unsignedInteger('status')->default(1);
    $table->rememberToken();
    $table->timestamps();
*/
