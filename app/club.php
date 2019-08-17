<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class club extends Model
{
    protected $fillable = [
        'first_name', 'last_name', 'email', 'phone', 'business_name','business_type'
    ];
}
