<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HorseFile extends Model
{
    protected $fillable = ['horse_id', 'url', 'name', 'old_name', 'type'];

    public function horse()
    {
        $this->belongsTo(Horse::class);
    }
}
