<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Horse extends Model
{
    use SoftDeletes;
    protected $fillable = ['name', 'birth_year', 'country_of_birth', 'height', 'fei_id', 'national_id', 'renewal', 'discipline', 'sex',
        'color', 'stud_book', 'microchip_number', 'fei_expiry_date', 'pony',
        'identification_draw_a', 'identification_draw_b',  'breeding_details_a', 'breeding_details_b'];

    protected $with = ['mother', 'father'];

    public static $sexes = ['Stallion', 'Mare', 'Gelding'];

    public function images()
    {
        return $this->hasMany(HorseFile::class)->where('type', 'image');
    }

    public function breedingFiles()
    {
        return $this->hasMany(HorseFile::class)->where('type', 'breeding');
    }

    public function identificationFiles()
    {
        return $this->hasMany(HorseFile::class)->where('type', 'identification  ');
    }

    public function mother()
    {
        return $this->hasOne(HorseParent::class)->where('horse_parents.gender', 'm');
    }

    public function father()
    {
        return $this->hasOne(HorseParent::class)->where('horse_parents.gender', 's');
    }

    public function getSexAttribute($sex)
    {
        return [
            'name' => self::$sexes[$sex],
            'value' => $sex
        ];
    }

    public function getIdentificationDrawAAttribute($identification_draw_a)
    {
        return $identification_draw_a? '/uploads/images/horse/identification/'.$identification_draw_a : '';
    }

    public function getIdentificationDrawBAttribute($identification_draw_b)
    {
        return $identification_draw_b? '/uploads/images/horse/identification/'.$identification_draw_b : '';
    }

    public function getBreedingDetailsAAttribute($breeding_details_a)
    {
        return $breeding_details_a? '/uploads/images/horse/breeding/'.$breeding_details_a : '';
    }

    public function getBreedingDetailsBAttribute($breeding_details_b)
    {
        return $breeding_details_b? '/uploads/images/horse/breeding/'.$breeding_details_b : '';
    }
}
