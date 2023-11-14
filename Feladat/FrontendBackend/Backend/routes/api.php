<?php

use App\Http\Controllers\WriterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/api/writer', [WriterController::class, 'index']);
Route::post('/api/writer', [WriterController::class, 'store']);
Route::put('/api/writer/{id}', [WriterController::class, 'update']);
Route::delete('/api/writer/{id}', [WriterController::class, 'destroy']);
