<?php

use App\HorseParent;
use Illuminate\Database\Seeder;

class HorseParentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i<10; $i++){
            factory(HorseParent::class)->create([
                'horse_parent_id' => $this->random_id(),
            ]);
        }
    }

    private function random_id()
    {
        $ids = HorseParent::all()->pluck('id')->toArray();
        return $ids !=[] ? $ids[array_rand($ids)]:null;
    }
}
