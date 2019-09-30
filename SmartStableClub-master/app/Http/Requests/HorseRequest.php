<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HorseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'birth_year' => '',
            'country_of_birth' => 'required',
            'height' => 'required',
            'fei_id' => 'required|unique:horses',
            'national_id' => 'required',
            'renewal' => 'required',
            'discipline' => 'required',
            'sex' => 'required',
            'color' => 'required',
            'stud_book' => 'required',
            'microchip_number' => 'required',
            'fei_expiry_date' => 'required',
            'pony' => 'required',
            'identification' => '',
            'breeding' => '',
            'father' => 'required',
            'mother' => 'required',
            'images' => '',
        ];
    }
}
