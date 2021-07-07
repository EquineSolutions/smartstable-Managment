<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ApprovalMail extends Mailable
{
    use Queueable, SerializesModels;
    public $club;
    public $password;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($club,$password)
    {
        $this->club = $club;
        $this->password = $password;
    }


    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.approvalClub');
    }
}

