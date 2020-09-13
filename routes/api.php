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


Route::get("/kategori", function(){
    return Kategori::all();
});
Route::get("/promo", function(){
    return Promo::all();
});
Route::get("/transaksi", function(){
    return Transaksi::all();
});
Route::get("/transaksi/{id}", function($id){
    return Pembayaran::with('transaksi.produk:id,nama_produk,harga_produk')->where('id_transaksi',$id)->get();
});