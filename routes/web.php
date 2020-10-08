<?php

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

// auth routes
Auth::routes();

// landing page
Route::get('/', function () { return view('index'); });

Route::get('/pages/{slug}','pagesController@show');

// images
Route::get('/images', 'ImageController@index');
Route::post('/images', 'ImageController@store');
Route::get('/images/{item}', 'ImageController@show');
Route::get('/image/{item}', 'ImageController@image');
Route::get('/thumb/{item}', 'ImageController@thumb');
Route::get('/preview/{item}', 'ImageController@preview');

// files
Route::get('/files', 'FileController@index');
Route::post('/files', 'FileController@store');
Route::get('/files/create', 'FileController@create');
Route::get('/files/{file}', 'FileController@show');
Route::get('/files/{file}/edit', 'FileController@edit');
Route::put('/files/{file}', 'FileController@update');

// users
Route::get('/users', 'UserController@index');
Route::post('/users', 'UserController@store')->name("users.store");
Route::get('/users/create', 'UserController@create');
Route::get('/users/{user}', 'UserController@show');
Route::get('/users/{user}/edit', 'UserController@edit');
Route::put('/users/{user}', 'UserController@update');

// works
Route::get('/works', 'WorkController@index');
Route::post('/works', 'WorkController@store');
Route::get('/works/create', 'WorkController@create');
Route::get('/works/{work}', 'WorkController@show');
Route::get('/works/{work}/edit', 'WorkController@edit');
Route::put('/works/{work}', 'WorkController@update');

Route::view('/apps/paint', 'apps.paint');

Route::view('/request', 'request');
