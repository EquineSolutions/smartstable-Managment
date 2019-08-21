<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
{{--    <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->--}}

    <title>Smart Stable</title>
    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset(mix('css/main.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/vuesax.css')) }}">
    <link rel="stylesheet" href="{{ asset('css/loader.css') }}">
    <link rel="stylesheet" href="{{ asset(mix('css/iconfont.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/material-icons/material-icons.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/prism-tomorrow.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">

  </head>
  <body>
    <noscript>
      <strong>We're sorry but Smart Stable doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>



    <div id="loading-bg">
        <div class="loading-logo" style="margin-bottom: 20px !important;">
            <img style="width: 70px;height: 70px;" src="/images/smartstable-logo.jpg" alt="Logo">
        </div>
        <div class="loading">
              <div class="effect-1 effects"></div>
              <div class="effect-2 effects"></div>
              <div class="effect-3 effects"></div>
        </div>
      </div>


    <div id="app">
    </div>

    <script src="{{ asset(mix('js/app.js')) }}"></script>
  </body>
</html>
