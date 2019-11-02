<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
    </head>
    <body>
            <h1> welcome {{ $club->business_name }}  </h1>
        <form action="/api/charge/{{ $club->id }}" method="POST">
            {{ csrf_field() }}
            <script
                    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                    data-key="{{ env('STRIPE_KEY') }}"
                    data-amount="{{ $total_cost }}"
                    data-name="Stripe Demo"
                    data-description="Online course about integrating Stripe"
                    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
                    data-locale="auto"
                    data-currency="usd">


                    stripe.handleCardPayment(
                        {{ env('STRIPE_KEY') }},
  element,
  {
    payment_method_data: {
      billing_details: {
        name: 'Jenny Rosen'
      }
    }
  }
).then(function(result) {
    console.log(result)
  // Handle result.error or result.paymentIntent
});


            </script>
        </form>
    </body>
</html>
