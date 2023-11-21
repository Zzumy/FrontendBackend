<?php

use App\Models\Writer;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('writers', function (Blueprint $table) {
            $table->id('id');
            $table->string('nev');
            $table->date('szul');
            $table->timestamps();
        });

        Writer::create(['nev' => 'Duy', 'szul' => '2003-02-27']);
        Writer::create(['nev' => 'Marci', 'szul' => '2003-04-11']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('writers');
    }
};
