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
            'Roles' => [
                [
                    'name' => 'browse-roles',
                    'display_name' => 'Browse Roles',
                ],
                [
                    'name' => 'view-roles',
                    'display_name' => 'View Roles',
                ],
                [
                    'name' => 'add-roles',
                    'display_name' => 'Add Roles',
                ],
                [
                    'name' => 'edit-roles',
                    'display_name' => 'Edit Roles',
                ],
                [
                    'name' => 'delete-roles',
                    'display_name' => 'Delete Roles',
                ],
            ],
            'Users' =>[
                [
                    'name' => 'browse-users',
                    'display_name' => 'Browse Users',
                ],
                [
                    'name' => 'view-users',
                    'display_name' => 'View Users',
                ],
                [
                    'name' => 'add-users',
                    'display_name' => 'Add Users',
                ],
                [
                    'name' => 'edit-users',
                    'display_name' => 'Edit Users',
                ],
                [
                    'name' => 'delete-users',
                    'display_name' => 'Delete Users',
                ],
            ],
            'Clients' => [
                [
                    'name' => 'browse-clients',
                    'display_name' => 'Browse Clients',
                ],
                [
                    'name' => 'view-clients',
                    'display_name' => 'View Clients',
                ],
                [
                    'name' => 'add-clients',
                    'display_name' => 'Add Clients',
                ],
                [
                    'name' => 'edit-clients',
                    'display_name' => 'Edit Clients',
                ],
                [
                    'name' => 'delete-clients',
                    'display_name' => 'Delete Clients',
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
                    'display_name' => $permission['display_name'],
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



