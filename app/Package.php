<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $fillable = [
        'name', 'description', 'duration', 'price' ,'enable', 'logo'
    ];
    public function features()
    {
        return $this->belongsToMany(\App\Feature::class , 'package_feature');
    }
}
