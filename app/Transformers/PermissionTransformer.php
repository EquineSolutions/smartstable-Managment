<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use Spatie\Permission\Models\Permission;

class PermissionTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @param Permission $permission
     * @return array
     */
    public function transform(Permission $permission)
    {
        return $permission->toArray();
    }
}
