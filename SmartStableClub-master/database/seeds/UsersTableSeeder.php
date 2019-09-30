<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        echo config('users.users');
        foreach ($this->users() as $userData){
            $user = \App\User::create($userData);
            $user->assignRole('super-admin');
            $this->command->info("Create the admin user {$userData['email']}");
        }
    }

    /**
     * The default admin users.
     *
     * @return array
     */
    private function users() {
        return [
            [
                'first_name'     => 'Abdul-Rahman',
                'last_name'     => 'Rashwan',
                'email'    => 'a.rashwan@equinesolutions.co',
                'password' => bcrypt('password'),
                'mobile' => '12345678910'
            ],

            [
                'first_name'     => 'Ahmed',
                'last_name'     => 'Mubarak',
                'email'    => 'ahmed@equinesolutions.co',
                'password' => bcrypt('password'),
                'mobile' => '12345678910'
            ],

            [
                'first_name'     => 'Ashraf',
                'last_name'     => 'Ellaithy',
                'email'    => 'ashraf@equinesolutions.co',
                'password' => bcrypt('password'),
                'mobile' => '12345678910'
            ],

            [
                'first_name'     => 'Mohamed',
                'last_name'     => 'Ehab',
                'email'    => 'm.swilam@equinesolutions.co',
                'password' => bcrypt('password'),
                'mobile' => '12345678910'
            ],

            [
                'first_name'     => 'Maram',
                'last_name'     => 'Khalifa',
                'email'    => 'maram@equinesolutions.co',
                'password' => bcrypt('password'),
                'mobile' => '12345678910'
            ],

            [
                'first_name'     => 'Mostafa',
                'last_name'     => 'Fawzy',
                'email'    => 'mostafa@equinesolutions.co',
                'password' => bcrypt('password'),
                'mobile' => '12345678910'
            ],
        ];
    }
}
