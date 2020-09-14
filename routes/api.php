<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Produk;
use App\Kategori;
use App\Promo;
use App\Transaksi; 
use App\Pembayaran; 

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/produk", "ProdukController@Get");
Route::get("/produk/category", "ProdukController@Category");
Route::get("/produk/promo", "ProdukController@Promo");
Route::get("/produk/all", "ProdukController@All");
Route::get("/produk/{id}", "ProdukController@Where");

// CRUD PRODUK
Route::post("/produk", "ProdukController@store");
Route::put("/produk/{id}", "ProdukController@update");
Route::delete("/produk/{id}", "ProdukController@delete");

// CRUD KATEGORI
Route::get("/kategori", "KategoriController@Get");
Route::post("/kategori", "KategoriController@store");
Route::put("/kategori/{id}", "KategoriController@update");
Route::delete("/kategori/{id}", "KategoriController@delete");

// CRUD PROMO
Route::get("/promo", "PromoController@Get");
Route::post("/promo", "PromoController@store");
Route::put("/promo/{id}", "PromoController@update");
Route::delete("/promo/{id}", "PromoController@delete");

// CRUD TRANSAKSI
Route::get("/transaksi", "TransaksiController@Get");
Route::get("/transaksi/{id}", "TransaksiController@pembayaran");
// Route::put("/transaksi/{id}", "TransaksiController@update");
Route::post("/transaksi", "TransaksiController@store");
Route::delete("/transaksi/{id}", "TransaksiController@delete");

// CRUD PEMBAYARAN
Route::get("/pembayaran", "PembayaranController@Get");
Route::post("/pembayaran", "PembayaranController@store");
Route::put("/pembayaran/{id}", "PembayaranController@update");
Route::delete("/pembayaran/{id}", "PembayaranController@delete");

// CRUD USER
Route::get("/user","UserController@Get");
Route::post("/user","UserController@store");
Route::put("/user/{id}","UserController@update");
Route::delete("/user/{id}","UserController@delete");

// CRUD ROLE
Route::get("/role","RoleController@Get");
Route::post("/role","RoleController@store");
Route::put("/role/{id}","RoleController@update");
Route::delete("/role/{id}","RoleController@delete");
