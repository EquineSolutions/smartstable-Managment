<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use \Illuminate\Support\Facades\DB;

class PermissionTableSeeder extends Seeder
{

   /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $permissions = [
           'role-list',
           'role-create',
           'role-edit',
           'role-delete'
        ];


        foreach ($permissions as $permission) {
             Permission::create(['name' => $permission, 'guard_name' => 'api']);
        }

        $role = Role::create(['name' => 'super-admin', 'guard_name' => 'api']);
        $role->givePermissionTo(Permission::all());

    }
}



