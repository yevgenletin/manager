/**
 * Created by yevhen1992 on 10/01/2017.
 */
$( document ).ready(function() {
    // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("username", "1");
        localStorage.setItem("password", "1");

        us = localStorage.getItem("username");
        ps = localStorage.getItem('password');
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
$("#wp-submit").click(function(){
    event.preventDefault();

    user = $('#user_login').val();
    pass = $('#user_pass').val();

    if(ps == pass && us == user){

        $("#loginform").hide();
    }
});


});
