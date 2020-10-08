<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Work;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Work::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

    ];
});
