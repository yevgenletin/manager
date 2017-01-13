<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>index</title>

    <script src="js/jquery/jquery-3.1.1.min.js"></script>
    <script src="js/jquery/jquery-ui.js"></script>
    <script src="js/bootstrap/bootstrap.min.js"></script>
    <script src="https://use.fontawesome.com/cb2e498a78.js"></script>

    <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="css/login.css">
    <link rel="stylesheet" type="text/css" href="css/table.css">
    <link href="css/bootstrap.min.css" rel="stylesheet">

</head>
<body>
<!--Button-->
        <div id="save">
            <button id="save_table"  class="btn btn-default">Save Table</button>

            <input type="checkbox" id="autosave">
            <label for="autosave">Auto-save</label>
        </div>


        <div id="icons">
            <button type="button" id="icon_edit" class="btn btn-default disabled">edit</button>
            <button type="button" id="icon_delete" class="btn btn-danger disabled">delete</button>
            <button type="button" id="icon_add" class="btn btn-success active">add</button>
        </div>

            <div id="login" class="modal-dialog">
                <div class="loginmodal-container">
                    <form name="loginform" id="loginform" action="#" method="post">
                        <input type="text" id="user_login" placeholder="Username">
                        <input type="password" id="user_pass" placeholder="Password">
                        <input type="submit" name="wp-submit" id="wp-submit" class="login loginmodal-submit" value="Login">
                    </form>
                </div>
            </div>
<!--Table-->
            <table id="manager_table" class="col-10">
                <thead>
                    <tr>
                        <th id="th_id">Id</th>
                        <th id="th_name">Name</th>
                        <th id="th_time">Time</th>
                        <th id="th_date">Date</th>
                    </tr>
                </thead>
                <tbody id="table_content">
                </tbody>
            </table>

<!-- Edit window-->
        <div id="edit_item" class="col-10">
            <div class="popup-contenedor">
                <form action="#" >
                    <label for="edit_nickname">Name:</label>
                    <input type="text" name="edit_nickname" id="edit_nickname">
                    <br>
                    <label for="time">Time:</label>
                    <input type="time" name="edit_time" id="edit_time">
                    <br>
                    <label for="edit_date">Date:</label>
                    <input type="date" name="edit_date" id="edit_date">
                    <br>
                    <button id="edit_accept" class="btn btn-default">Accept</button>
                    <button id="edit_cancel" class="btn btn-default">Cancel</button>
                </form>
            </div>
        </div>
<!--Add window-->
        <div id="add_item">
            <div class="popup-contenedor">
                <form action="#" >
                    <label for="nickname">Name:</label>
                    <input type="text" name="nickname" id="nickname">
                    <br>
                    <label for="time">Time:</label>
                    <input type="time" name="time" id="time">
                    <br>
                    <label for="date_time">Date:</label>
                    <input type="date" name="date_time" id="date_time">
                    <br>
                    <button id="add_accept"  class="btn btn-default">Accept</button>
                    <button id="add_cancel"  class="btn btn-default">Cancel</button>
                </form>
            </div>
        </div>
<!--Script-->
        <script src="js/login.js"></script>
        <script src="js/table.js"></script>
</body>
</html>
