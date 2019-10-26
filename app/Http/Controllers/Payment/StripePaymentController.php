<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Session;
use Stripe;
use App\Http\Controllers\Api\ClubController;
use App\Club;

class StripePaymentController extends Controller
{
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function stripe($club_id)
    {
        $club = Club::find($club_id);
        $total_cost = $club->packages()->sum(\DB::raw('price'));
        return view('payment.stripe', compact('club','total_cost'));
    }

    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function stripePost(Request $request)
    {
        var_dump($club_id); die;
        // Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        // Stripe\Charge::create ([
        //         "amount" => 100 * 100,
        //         "currency" => "usd",
        //         "source" => $request->stripeToken,
        //         "description" => "Test payment from itsolutionstuff.com."
        // ]);
        $club = Club::find($club_id);
        $packages =  $club->packages->pluck('id')->all();


        // ClubController->set_permission_to_club($packages , $business_name);

        Session::flash('success', 'Payment successful!');

        return back();
    }
}
