<!DOCTYPE html>
<html>
<head>
    <title>Welcome Email</title>
</head>

<body>
<h2>Welcome to the site <?php echo e($club['name']); ?></h2>
<br/>
Your registered email-id is <?php echo e($club['email']); ?> , Please click on the below link to verify your email account
<br/>
<a href="<?php echo e(url('api/club/verify', $club->verifyClub->token)); ?>">Verify Email</a>
</body>

</html>
<?php /**PATH /var/www/html/Equine/test_mangment_project/smartstable-Managment/resources/views/emails/verifyClub.blade.php ENDPATH**/ ?>