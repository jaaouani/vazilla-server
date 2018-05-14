<?php

use Illuminate\Database\Seeder;

class AdminsTableSeeder extends Seeder {
    public function run() { factory(\App\Admin::class, 1)->create(); }
}
