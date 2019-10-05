<!DOCTYPE html>
<html>
<head>
    <title>Welcome Email</title>
</head>

<body>
<h2>Welcome to the site {{$club['name']}}</h2>
<br/>
Your registered email-id is {{$club['email']}} , Please click on the below link to verify your email account
<br/>
<a href="{{url('api/club/verify', $club->verifyClub->token)}}">Verify Email</a>
</body>

</html>
