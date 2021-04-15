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



Route::get('/', array('uses' => 'BookController@index'))->name('admin.book.index');
Route::post('/save', array('uses' => 'BookController@store'))->name('admin.book.save');
Route::post('/edit', array('uses' => 'BookController@edit'))->name('admin.book.edit');
Route::post('/destroy', array('uses' => 'BookController@destroy'))->name('admin.book.destroy');
