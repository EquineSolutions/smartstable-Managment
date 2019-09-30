<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use Spatie\Permission\Models\Role;

class RoleTransformer extends TransformerAbstract
{
    protected $availableIncludes = ['permissions'];

    /**
     * A Fractal transformer.
     *
     * @param Role $role
     * @return array
     */
    public function transform(Role $role)
    {
        return $role->toArray();
    }

    public function includePermissions(Role $role)
    {
        return $this->collection($role->permissions, new PermissionTransformer());
    }
}
