<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\File;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(File::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

    ];
});
