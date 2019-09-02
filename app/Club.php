<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Club extends Model
{
    protected $fillable = [
        'first_name', 'last_name', 'email', 'phone', 'business_name','business_type'
    ];

    public function packages()
    {
        return $this->belongsToMany(\App\Package::class , 'club_packages');
    }
}
