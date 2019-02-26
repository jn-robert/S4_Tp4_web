$(document).ready(function () {

    var token = "";
    $.get("http://iutbelfort.ltg-services.fr/getToken").done(function (result) {
        //token =
    });

    console.log(token);

    var user = [
        {username: 'demo', password: 'demo', firstname: '', lastname: '', email: ''},
        {username: 'test', password: 'test', firstname: '', lastname: '', email: ''},
        {username: 'admin', password: 'admin', firstname: '', lastname: '', email: ''},
        {username: 'no', password: 'no', firstname: '', lastname: '', email: ''}
    ];

    $("#loginButton").click(function () {
        $log = $('#usernameL').val();
        $pas = $('#passwordL').val();
        for (let x = 0; x < user.length; x++) {
            let use = user[x]['username'];
            let pass = user[x]['password'];
            if ($log === use) {
                if ($pas === pass) {
                    document.getElementById("login").style.display = "none";
                    document.getElementById("log").style.display = "block";
                    return true
                }
            }
        }
        return false
    });

    $("#registerButton").click(function () {
        user.push(
            {
                username: $('#username').val(),
                password: $('#password').val(),
                firstname: $('#firstName').val(),
                lastname: $('#lastName').val(),
                email: $('#email').val()
            }
        );
        console.log(user);
        document.getElementById("login").style.display = "block";
        document.getElementById("register").style.display = "none";
    });

    $("#showRegister").click(function () {
        document.getElementById("login").style.display = "none";
        document.getElementById("register").style.display = "block";
    });

});