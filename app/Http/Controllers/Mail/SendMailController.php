<?php

namespace App\Http\Controllers\Mail;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMailable;

class SendMailController extends Controller
{
    public function mail()
    {
    $name = 'Krunal';
    Mail::to('maram.ramadan.ebraheem@gmail.com')->send(new SendMailable($name));

    return 'Email was sent';
    }
}

?>
