<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Document;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Document::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

    ];
});
