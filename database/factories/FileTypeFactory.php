<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\FileType;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(FileType::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

    ];
});
