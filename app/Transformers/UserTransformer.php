<?php

namespace smartstable\Transformers;

use smartstable\User;
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
        return $users;
    }
}
