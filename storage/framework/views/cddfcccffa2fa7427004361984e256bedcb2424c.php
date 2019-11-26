<!DOCTYPE html>
<html>
    <head>
        <title>Welcome Email</title>
    </head>
    <body>
        <h2>Welcome to the site <?php echo e($club->business_name); ?></h2>
        <br/>
        <?php echo e($club->business_name); ?> info :-
        user name => <?php echo e($club->email); ?> .
        password => <?php echo e($password); ?>

        <br/>

        <a href="<?php echo e(url('api/stripe',$club->id )); ?>">Continue</a>
    </body>
</html>
<?php /**PATH /var/www/html/Equine/test_mangment_project/smartstable-Managment/resources/views/emails/approvalClub.blade.php ENDPATH**/ ?>