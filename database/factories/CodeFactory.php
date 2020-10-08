<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Code;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Code::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

    ];
});
