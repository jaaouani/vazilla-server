<?php

namespace App;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable {
    
    use HasApiToken, Notifiable;

    protected $table = 'users';

    protected $fillable = [ 'fullname', 'email', 'password', 'token' ];
    protected $hidden = [ 'password', ];

    public function profiles() { return $this->hasOne(\App\Profile::class, 'user_id'); }
}
