<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Session;
use Stripe\Stripe;
use Stripe\Customer;
use Stripe\Charge;
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
        return view('payment.index', compact('club','total_cost'));
    }

    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function stripePost(Request $request)
    {
        var_dump($request->all()); die;
        Stripe::setApiKey(env('STRIPE_SECRET'));
        // Charge::create ([
        //         "amount" => 100 * 100,
        //         "currency" => "usd",
        //         "source" => $request->stripeToken,
        //         "description" => "Test payment from itsolutionstuff.com."
        // ]);

        Session::flash('success', 'Payment successful!');

        return back();
    }


    public function charge(Request $request , $club_id)
    {
        try {
            Stripe::setApiKey(env('STRIPE_SECRET'));
            $customer = Customer::create(array(
                'email' => $request->stripeEmail,
                'source' => $request->stripeToken
            ));


            $club = Club::find($club_id);
            $total_cost = $club->packages()->sum(\DB::raw('price'));
            $charge = Charge::create(array(
                'customer' => $customer->id,
                'amount' => $total_cost,
                'currency' => 'usd',
                'receipt_email' => $customer->email,
                "description" => "Test payment from smartstable.com."
            ));
            $clubObj = new ClubController;
            $clubObj->set_permission_to_club($club->packages , $club->business_name);
            return "Payment successful!";

        } catch (\Exception $ex) {
            return $ex->getMessage();
        }
    }
}
