<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::post('/fcm-token', [HomeController::class, 'updateToken'])->name('fcmToken');
Route::post('/send-notification',[HomeController::class,'notification'])->name('notification');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
