<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreateProfilesTable extends Migration
{
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('shipping_address_main')->nullable(); $table->string('shipping_address_optional')->nullable();
            $table->string('city')->nullable(); $table->string('zipcode')->nullable();
            $table->string('phone')->nullable(); $table->integer('user_id')->unique()->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}