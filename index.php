<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>index</title>
    <link rel="stylesheet" type="text/css" href="css/login.css">
    <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</head>
<body>

    <div id="main" class="container">
        <div id="result"></div>
        <form name="loginform" id="loginform" action="#" method="post" class="wpl-track-me">
            <p class="login-username">
                <label for="user_login">Username</label>
                <input type="text" name="log" id="user_login" class="input" placeholder="Username" value="" size="20" />
            </p>
            <p class="login-password">
                <label for="user_pass">Password</label><input type="password" name="pwd" id="user_pass" class="input" placeholder="Password" value="" size="20" />
            </p>

            <p class="login-submit"><input type="submit" name="wp-submit" id="wp-submit" class="button-primary" value="Log in" />
            </p>
        </form>
    </div>

    <script src="js/login.js"></script>
</body>
</html>
