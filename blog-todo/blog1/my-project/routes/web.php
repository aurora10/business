<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;





Route::get('/', [PostController::class, 'index'])->name('home');
Route::get('/create', [PostController::class, 'create']);

Route::post('/create', [PostController::class, 'store']);

Route::get('/update/{id}', [PostController::class, 'update']);
Route::post('/edit/{id}', [PostController::class, 'edit']);

Route::delete('/delete/{id}', [PostController::class, 'delete']);


Route::get('/{id}', [PostController::class, 'show']);
