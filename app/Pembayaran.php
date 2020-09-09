<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pembayaran extends Model
{
    public function transaksi()
    {
        return $this->hasManyThrough(Transaksi::class, Pembayaran::class, 'id_transaksi', 'id_transaksi');
    }
  
}
