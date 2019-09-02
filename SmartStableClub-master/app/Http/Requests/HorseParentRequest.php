<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HorseParentRequest extends FormRequest
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
        $horse_id = request()->horse_id;
        $horse_parent_id = request()->horse_parent_id;
        return [
            'name' => 'required',
            'gender' => 'required',
            'horse_id' => "required_without:horse_parent_id",
            'horse_parent_id' => "required_without:horse_id"
        ];
    }
}
