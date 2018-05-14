<?php

use Illuminate\Support\Facades\Hash;

$factory->define(\App\User::class, function (Faker\Generator $faker) {
    return [
        'fullname' => ($name = $faker->unique()->name), 'email' => ($email = $faker->unique()->safeEmail),
        'password' => Hash::make('password'), 'token' => Hash::make($email.str_random(10).$name)
    ];
});