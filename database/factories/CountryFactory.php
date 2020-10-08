<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Country;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Country::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

    ];
});
