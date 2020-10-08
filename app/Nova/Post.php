<?php

namespace App\Nova;

use Davidpiesse\NovaToggle\Toggle;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;

class Post extends Resource {

    public static $model = \App\Post::class;
    public static $title = 'name';
    public static $search = [
        'name'
    ];

    public function fields(Request $request) {
        return [
            ID::make()->sortable(),
            Text::make('Name')->sortable()->rules('required','min:2','max:64'),
            Text::make('Slug'),
            Textarea::make('Description'),
            Text::make('Text'),
            Text::make('Keywords')->nullable(),
            BelongsTo::make('User','user','App\Nova\User')->searchable(),
            BelongsTo::make('Image','image','App\Nova\Image')->searchable(),
            BelongsTo::make('Language','language','App\Nova\Language')->default(8),
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
/*
    $table->id();
    $table->string('name');
    $table->string('slug');
    $table->string('description');
    $table->longText('text');
    $table->string('keywords')->nullable();
    $table->unsignedBigInteger('user_id');
    $table->unsignedBigInteger('image_id');
    $table->unsignedBigInteger('language_id');
    $table->unsignedInteger('status')->default(1);
    $table->timestamp('published_at')->nullable();
    $table->timestamps();
 */
