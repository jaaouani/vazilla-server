<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdminsTable extends Migration
{
    public function up() {
        Schema::create('admins', function (Blueprint $table) {
            $table->increments('id'); $table->string('email')->unique();
            $table->string('password'); $table->string('token')->unique();
            $table->string('fullname')->unique(); $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('admins');
    }
}
