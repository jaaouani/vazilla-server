<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use Laravel\Passport\Client;
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
    
    public function __construct(Request $request) {  $this->request = $request; $this->client = Client::find(2); }

    public function login() {
        if($this->_verifyAuthentication() == true) {
        } else { return response.json(['status' => 'error', 'message' => $this->validator->errors()->first()], 401); }
    }
    public function register() {
        if($this->_verifyRegistration() == true) {
        } else { return response.json(['status' => 'error', 'message' => $this->validator->errors()->first()], 401); }
    }
    public function forgot() {}
    public function logout() {}
    
    private function _verifyAuthentication() {
        $this->validator = Validator::make($this->request->all(), [
            'email' => 'required|email', 'password' => 'required|string|min:8' 
        ]); if($this->validator->fail()) { return false; } return true;
    }
    private function _verifyRegistration() {
        $this->validator = Validator::make($this->request->all(), [
            'email' => 'required|email|unique:users', 'password' => 'required|string|min:8',
            'fullname' => 'required|string|min:4'
        ]); if($this->validator->fail()) { return false; } return true;
    }
}
