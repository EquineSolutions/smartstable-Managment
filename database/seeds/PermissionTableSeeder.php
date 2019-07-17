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
        \Illuminate\Database\Eloquent\Model::unguard();

        env('DB_CONNECTION') != 'sqlite' ? DB::statement('SET FOREIGN_KEY_CHECKS=0;') : '';

        // Seed roles
        DB::table('roles')->delete();
        DB::table('roles')->truncate();

        // Seed permissions
        DB::table('permissions')->delete();
        DB::table('permissions')->truncate();


        foreach ($permissions as $permission) {
             Permission::create(['name' => $permission, 'guard_name' => 'api']);
        }

        $role = Role::create(['name' => 'super-admin', 'guard_name' => 'api']);
        $role->givePermissionTo(Permission::all());

        env('DB_CONNECTION') != 'sqlite' ? DB::statement('SET FOREIGN_KEY_CHECKS=1;') : '';
    }
}



