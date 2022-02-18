<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Auth\User as Authenticatable;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Notifications\Notifiable;
class Post extends Eloquent implements AuthenticatableContract
{
    use HasFactory;
    use Notifiable;
    use AuthenticatableTrait;
    protected $connection = 'mongodb';
    protected $fillable =['image'];
}
