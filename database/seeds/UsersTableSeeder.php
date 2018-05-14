<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder {
    public function run() {
        factory(\App\User::class, 100)->create()->each(function ($user) {
            $user->profiles()->save(factory(\App\Profile::class)->make(['user_id' => $user->id]));
        });
    }
}
