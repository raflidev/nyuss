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

Route::get("/produk", function(){
    return Produk::all();
});
Route::get("/produk/category", function(){
    return Produk::with('kategori:id_produk,nama_kategori')->get();
});
Route::get("/produk/promo", function(){
    return Produk::with('promo:id_produk,diskon')->get();
});
Route::get("/produk/all", function(){
    return Produk::with('promo:id_produk,diskon','kategori:id_produk,nama_kategori')->get();
});
Route::get("/produk/{id}", function($id){
    return Produk::where('id', $id)->get();
});

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
    return Pembayaran::with('transaksi')->where('id_transaksi',$id)->get();
});