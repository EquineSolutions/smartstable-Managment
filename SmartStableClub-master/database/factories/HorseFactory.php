<?php

/* @var $factory Factory */

use App\Horse;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Horse::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'birth_year' => $faker->year,
        'country_of_birth' => $faker->countryCode,
        'height' => $faker->numberBetween(100, 300),
        'fei_id' => $faker->unique()->word,
        'national_id' => $faker->unique()->numberBetween(100000, 999999),
        'renewal' => $faker->date(),
        'discipline' => $faker->word,
        'sex' => $faker->numberBetween(0, 2),
        'color' => $faker->colorName,
        'stud_book' => $faker->word,
        'microchip_number' => $faker->word,
        'fei_expiry_date' => $faker->date,
        'pony' => $faker->boolean,
    ];
});
