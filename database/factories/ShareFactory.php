<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Share;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Share::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

    ];
});
