<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\School;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(School::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

    ];
});
