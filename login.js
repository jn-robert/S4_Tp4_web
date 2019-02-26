$(document).ready(function () {

    let token = "";
    $.get("http://iutbelfort.ltg-services.fr/getToken").done(function (result) {
        token = result["token"];
    });

    var user = [
        {username: 'demo', password: 'Demo2019%', firstname: '', lastname: '', email: ''},
        {username: 'test', password: 'test', firstname: '', lastname: '', email: ''},
        {username: 'admin', password: 'admin', firstname: '', lastname: '', email: ''},
        {username: 'no', password: 'no', firstname: '', lastname: '', email: ''}
    ];

    $("#loginButton").click(function () {
        $log = $('#usernameL').val();
        $pas = $('#passwordL').val();

        if (!(token === $('#tokenLog').val())){
            console.log(token);
            console.log($('#tokenLog').val());
            alert("the form is invalid");
            return false
        }

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
        if (valideRegister()) {
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
        }
    });

    $("#showRegister").click(function () {
        document.getElementById("login").style.display = "none";
        document.getElementById("register").style.display = "block";
    });

    function valideRegister() {
        if (!($('#token').val() === token)){
            alert("the form is invalid");
            return false
        }

        let user = $('#username').val();
        let first = $('#firstName').val();
        let last = $('#lastName').val();
        let email = $('#email').val();
        let mdp = "";

        if ($('#password').val() === $('#password2').val() && $('#password').val() !== "") {
            mdp = $('#password').val();
        }
        else {
            alert("Both passwords are not the same or empty");
            return false
        }

        let pattern = /^[A-Za-z0-9]{2,20}$/;
        let patternEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        let patternMDP = /^[a-zA-Z0-9._%+-]{8,100}$/;

        if (!(pattern.test(user))) {
            alert("Username invalid : must contain letters or numbers");
            return false
        }
        if (!(pattern.test(first))) {
            alert("First name invalid : must contain letters or numbers");
            return false
        }
        if (!(pattern.test(last))) {
            alert("Last name invalid : must contain letters or numbers");
            return false
        }
        if (!(patternEmail.test(email))) {
            alert("Email invalid");
            return false
        }
        if (!(patternMDP.test(mdp))) {
            alert("Password invalid : must contain letters or numbers or ._%+-");
            return false
        }

        return true
    }

});