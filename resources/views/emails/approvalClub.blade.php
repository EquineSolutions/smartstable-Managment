<!DOCTYPE html>
<html>
    <head>
        <title>Welcome Email</title>
    </head>
    <body>
        <h2>Welcome to the site {{$club->business_name}}</h2>
        <br/>
        {{$club->business_name}} info :-
        user name => {{ $club->email}} .
        password => {{$password}}
        <br/>

        <a href="{{url('api/stripe',$club->id )}}">Continue</a>
    </body>
</html>
