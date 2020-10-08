<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Notification;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Notification::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

    ];
});
