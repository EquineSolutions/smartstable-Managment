<?php

use App\Horse;
use Illuminate\Database\Seeder;

class HorsesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Horse::class, 10)->create();
    }
}
