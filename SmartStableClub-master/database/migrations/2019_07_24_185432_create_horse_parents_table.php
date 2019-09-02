<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHorseParentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('horse_parents', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->char('gender');
            $table->unsignedBigInteger('horse_id')->nullable();
            $table->unsignedBigInteger('horse_parent_id')->nullable();
            $table->foreign('horse_id')->references('id')->on('horses')->onDelete('set null');
            $table->timestamps();
        });

        Schema::table('horse_parents', function (Blueprint $table) {
            $table->foreign('horse_parent_id')->references('id')->on('horse_parents')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('horse_parents', function (Blueprint $table) {
            $table->dropForeign('horse_parents_horse_parent_id_foreign');
        });

        Schema::dropIfExists('horse_parents');
    }
}
