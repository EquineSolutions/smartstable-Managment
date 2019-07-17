<?php

namespace App\Transformers;

use App\User;
use League\Fractal\TransformerAbstract;

class UserTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(User $user)
    {

        $users = $user->toArray();
        // var_dump($users); die;
        return [
            'student_id' => $user->id,
            'student_name' => $users->name,
        ];

        $users['image'] = $users['image']? '/uploads/images/user/'.$users['image']:'';
        return $users;
    }


}
