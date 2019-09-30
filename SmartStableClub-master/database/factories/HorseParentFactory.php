<?php

/* @var $factory Factory */

use App\Horse;
use App\HorseParent;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(HorseParent::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'gender' => $faker->randomElement(['s', 'm']),
        'horse_id' => factory(Horse::class)->create()->id,
    ];
});
