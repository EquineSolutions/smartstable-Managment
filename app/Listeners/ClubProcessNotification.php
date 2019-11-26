<?php

namespace App\Listeners;

use App\Events\ClubProcess;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class ClubProcessNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  ClubProcess  $event
     * @return void
     */
    public function handle(ClubProcess $event)
    {
        //
    }
}
