<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHorsesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('horses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('birth_year');
            $table->string('country_of_birth');
            $table->integer('height');
            $table->string('fei_id')->unique();
            $table->string('national_id');
            $table->string('renewal');
            $table->string('discipline');
            $table->integer('sex');
            $table->string('color');
//            $table->string('identification_draw_a')->nullable();
//            $table->string('identification_draw_b')->nullable();
//            $table->string('breeding_details_a')->nullable();
//            $table->string('breeding_details_b')->nullable();
            $table->string('stud_book');
            $table->string('microchip_number');
            $table->date('fei_expiry_date');
            $table->boolean('pony');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('horses');
    }
}
