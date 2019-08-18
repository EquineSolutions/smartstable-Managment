<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property mixed id
 * @property mixed first_name
 * @property mixed middle_name
 * @property mixed last_name
 * @property mixed email
 * @property mixed mobile
 * @property mixed date_of_birth
 * @property mixed national_id_photo_url
 * @property mixed created_at
 * @property mixed verified_at
 */
class ClientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'middle_name' => $this->middle_name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'mobile' => $this->mobile,
            'date_of_birth' => $this->date_of_birth,
            'national_id_photo_url' => $this->national_id_photo_url,
            'created_at' => $this->created_at->diffForHumans(),
            'verified_at' =>$this->verified_at,
        ];
    }
}
