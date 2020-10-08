<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Follow;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Follow::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

    ];
});
