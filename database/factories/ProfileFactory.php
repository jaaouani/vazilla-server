<?php

use Illuminate\Support\Facades\Hash;

$factory->define(\App\Profile::class, function (Faker\Generator $faker) {
    return [
        'shipping_address_main' => $faker->unique()->streetAddress,  'shipping_address_optional' => $faker->unique()->secondaryAddress,
        'city' => $faker->unique()->city, 'zipcode' => $faker->unique()->postcode, 'phone' => $faker->unique()->e164PhoneNumber,
    ];
});