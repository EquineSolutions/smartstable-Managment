<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VerifyClub extends Model
{
    protected $guarded = [];

    public function club()
    {
        return $this->belongsTo('App\Club', 'club_id');
    }

}
