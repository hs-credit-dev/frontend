<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Text;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Text::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

    ];
});
