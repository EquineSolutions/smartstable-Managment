<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHorseFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('horse_files', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('url');
            $table->string('old_name');
            $table->string('name');
            $table->string('type');
            $table->unsignedBigInteger('horse_id');
            $table->foreign('horse_id')->references('id')->on('horses')->onDelete('cascade');
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
        Schema::dropIfExists('horse_files');
    }
}
