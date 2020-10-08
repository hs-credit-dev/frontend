<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Like;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Like::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

    ];
});
