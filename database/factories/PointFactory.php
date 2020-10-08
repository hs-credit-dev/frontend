<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Point;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Point::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

    ];
});
