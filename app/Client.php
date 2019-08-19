<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed email
 */
class Client extends Model
{
    protected $fillable = ['first_name', 'middle_name', 'last_name', 'email', 'password', 'mobile', 'date_of_birth', 'verified_at'];

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }
}
