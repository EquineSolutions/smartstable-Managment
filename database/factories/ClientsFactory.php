<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Client;
use Faker\Generator as Faker;

$factory->define(Client::class, function (Faker $faker) {
    return [
        'first_name' => $faker->firstName,
        'middle_name' => $faker->firstName,
        'last_name' => $faker->firstName,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'mobile' => $faker->phoneNumber,
        'date_of_birth' => now(),
        'created_at' => now(),
        'updated_at' => now(),
    ];
});
