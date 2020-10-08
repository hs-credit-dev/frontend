<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Credit;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Credit::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

    ];
});
