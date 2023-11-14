<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WriterModel extends Model
{
    use HasFactory;

    protected $primarykey = 'id';

    protected $fillable = [
        'vnev',
        'knev',
        'szul'
    ];
}
