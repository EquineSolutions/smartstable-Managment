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

    public static function verifyClubByToken($token){
        $verifyClub = self::where('token', $token)->orderBy('created_at', 'desc')->first();
        return $verifyClub;

    }

}
