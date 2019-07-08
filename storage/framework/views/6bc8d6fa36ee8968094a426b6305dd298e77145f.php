<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">


    <title>Smart Stable</title>
    <!-- Styles -->
    <link rel="stylesheet" href="<?php echo e(asset(mix('css/main.css'))); ?>">
    <link rel="stylesheet" href="<?php echo e(asset(mix('css/vuesax.css'))); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('css/loader.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset(mix('css/iconfont.css'))); ?>">
    <link rel="stylesheet" href="<?php echo e(asset(mix('css/material-icons/material-icons.css'))); ?>">
    <link rel="stylesheet" href="<?php echo e(asset(mix('css/prism-tomorrow.css'))); ?>">
    <link rel="stylesheet" href="<?php echo e(asset(mix('css/app.css'))); ?>">

  </head>
  <body>
    <noscript>
      <strong>We're sorry but Smart Stable doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>



    <div id="loading-bg">
      <div class="loading-logo">
        <img src="/images/logo.png" alt="Logo">
        </div>
        <div class="loading">
          <div class="effect-1 effects"></div>
          <div class="effect-2 effects"></div>
          <div class="effect-3 effects"></div>
        </div>
      </div>


    <div id="app">
    </div>

    <!-- <script src="js/app.js"></script> -->
    <script src="<?php echo e(asset(mix('js/app.js'))); ?>"></script>

  </body>
</html>
<?php /**PATH /Users/mac2/Code/smartstable-Managment/resources/views/application.blade.php ENDPATH**/ ?>