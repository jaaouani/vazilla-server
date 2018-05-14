<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model {
    
    protected $table = "profiles";

    protected $fillable = [
        'shipping_address_main', 'shipping_address_optional', 
        'city', 'zipcode', 'phone', 'account_id' ];
    
    public function accounts() { return $this->belongsTo(\App\User::class, 'user_id'); }
}
