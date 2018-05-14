<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable {
    
    use HasApiTokens, Notifiable;

    protected $table = 'admins';

    protected $fillable = [ 'email', 'token', 'password', 'fullname' ];
    protected $hidden = [ 'password', 'remember_token' ];
}
