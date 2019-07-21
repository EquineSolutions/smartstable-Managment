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
            'role' => [
                [
                    'name' => 'role-list',
                    'good_name' => 'view all roles',
                ],
                [
                    'name' => 'role-create',
                    'good_name' => 'create new role',
                ],
                [
                    'name' => 'role-edit',
                    'good_name' => 'edit certain role',
                ],
                [
                    'name' => 'role-delete',
                    'good_name' => 'delete certain role',
                ],
            ],
            'user' =>[
                [
                    'name' => 'user-list',
                    'good_name' => 'view all users',
                ],
                [
                    'name' => 'user-create',
                    'good_name' => 'create new user',
                ],
                [
                    'name' => 'user-edit',
                    'good_name' => 'edit certain user',
                ],
                [
                    'name' => 'user-delete',
                    'good_name' => 'delete certain user',
                ],
            ]
        ];
        \Illuminate\Database\Eloquent\Model::unguard();

        env('DB_CONNECTION') != 'sqlite' ? DB::statement('SET FOREIGN_KEY_CHECKS=0;') : '';

        // Seed roles
        DB::table('roles')->delete();
        DB::table('roles')->truncate();

        // Seed permissions
        DB::table('permissions')->delete();
        DB::table('permissions')->truncate();


        foreach ($permissions as $key => $value) {
            foreach ($value as $permission) {
                Permission::create([
                    'name' => $permission['name'],
                    'good_name' => $permission['good_name'],
                    'group' => $key,
                    'guard_name' => 'api'
                ]);
            }
        }

        $role = Role::create(['name' => 'super-admin', 'guard_name' => 'api']);
        $role->givePermissionTo(Permission::all());

        env('DB_CONNECTION') != 'sqlite' ? DB::statement('SET FOREIGN_KEY_CHECKS=1;') : '';
    }
}



