<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('writers', function (Blueprint $table) {
            $table->id('id');
            $table->string('vnev');
            $table->string('knev');
            $table->date('szul');
            $table->timestamps();
        });
        DB::table('writers')->insert([
            ['vnev' => 'Veress', 'knev' => 'Marcell', 'szul' => 20030411],
            ['vnev' => 'Nguyen Duc', 'knev' => 'Duy', 'szul' => 20030227],
        ]);
    }
};
