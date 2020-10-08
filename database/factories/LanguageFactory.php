<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Language;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Language::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

    ];
});
