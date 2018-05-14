<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
//use Laravel\Passport\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\User;

class AccountController extends Controller {
    private $request = null;
    private $user = null;
    private $validator = null;
    private $client = null;
    
    public function __construct(Request $request) {  $this->request = $request;  /*$this->client = Client::find(2); */ }

    public function login() {}
    public function register() {}
    public function forgot() {}
    public function logout() {}
}
