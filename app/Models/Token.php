<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Token extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        "name",
        "count",
        "size",
        "day",
        "expired_at"
    ];

    public function records()
    {
        return $this->hasMany(Record::class)->withTrashed();
    }
}
