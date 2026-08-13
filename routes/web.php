<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::inertia('/', 'welcome')->name('home');
Route::inertia('/', 'admin-dashboard/index')
    ->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';