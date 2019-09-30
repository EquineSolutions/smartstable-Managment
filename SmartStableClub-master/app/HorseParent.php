<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HorseParent extends Model
{
    protected $fillable = ['name', 'horse_id', 'horse_parent_id', 'gender'];

    protected $with = ['mother', 'father'];

    public function child()
    {
        return $this->belongsTo(Horse::class);
    }

    public function mother()
    {
        return $this->hasOne(HorseParent::class)->where('horse_parents.gender', 'm');
    }

    public function father()
    {
        return $this->hasOne(HorseParent::class)->where('horse_parents.gender', 's');
    }
}
