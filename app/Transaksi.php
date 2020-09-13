<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    public function produk()
    {
        return $this->hasOneThrough(Produk::class, Transaksi::class, 'id_transaksi', 'id', 'id_produk','id_transaksi');
    }
}
