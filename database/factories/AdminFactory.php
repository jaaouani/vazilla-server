<?php

use Faker\Generator as Faker;
use Illuminate\Support\Facades\Hash;

$factory->define(\App\Admin::class, function (Faker $faker) {
    return [
        'fullname' => ($name = 'Oussama Jaaouani'), 'email' => ($email = 'oussama.jaa99@gmail.com'),
        'password' => Hash::make('password'), 'token' => Hash::make($name.str_random(10).$email)
    ];
});
