<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientRequest extends FormRequest
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
            'first_name'=>'required | min:3',
            'middle_name'=>'required | min:3',
            'last_name'=> 'required | min:3',
            'email' => "required |unique:clients",
            'mobile' => 'required | min:10',
            'date_of_birth' => 'required | date_format:Y-m-d',
            'password' => 'required | min:6'
        ];
    }
}
