<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Image;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Image::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        
    ];
});
