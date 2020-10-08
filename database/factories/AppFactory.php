<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\App;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(App::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

    ];
});
