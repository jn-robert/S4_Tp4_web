$(document).ready(function () {

    let token = "";
    $.get("http://iutbelfort.ltg-services.fr/getToken").done(function (result) {
        token = result["token"];
    });

    let user = [
        {username: 'demo', password: 'Demo2019%', firstname: '', lastname: '', email: ''},
        {username: 'test', password: 'test', firstname: '', lastname: '', email: ''},
        {username: 'admin', password: 'admin', firstname: '', lastname: '', email: ''},
        {username: 'no', password: 'no', firstname: '', lastname: '', email: ''}
    ];

    $("#loginButton").click(function () {
        $log = $('#usernameL').val();
        $pas = $('#passwordL').val();

        if (!(token === $('#tokenLog').val())) {
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
        alert("Account not found");
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

    $("#loginScreen").click(function () {
        document.getElementById("login").style.display = "block";
        document.getElementById("register").style.display = "none";
    });

    function valideRegister() {
        if (!($('#token').val() === token)) {
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

//==========================================================================//

    /*
    let picture;
    $.get("http://api.flickr.com/services/feeds/photos_public.gne?tags=besancon&tagmode=any&format=json&jsoncallback=?").done(function (result){
        picture = result;
        console.log(picture);
    });

    let picture;
    $.get("http://iutbelfort.ltg-services.fr/flickr").done(function (result){
        picture = result;
        console.log(picture);
    });
*/

    let picture =
        [{
            "title": "Recent Uploads tagged besancon",
            "link": "https:\/\/www.flickr.com\/photos\/tags\/besancon\/",
            "description": "",
            "modified": "2019-02-09T11:03:04Z",
            "generator": "https:\/\/www.flickr.com",
            "items": [
                {
                    "title": "Heuliez GX 127 L \u20ac4",
                    "link": "https:\/\/www.flickr.com\/photos\/162718568@N03\/47035161191\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7907\/47035161191_7ec342cefb_m.jpg"},
                    "date_taken": "2019-02-05T14:21:16-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/162718568@N03\/\">Gbus25- Passion Mobilit\u00e9s<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/162718568@N03\/47035161191\/\" title=\"Heuliez GX 127 L \u20ac4\"><img src=\"https:\/\/farm8.staticflickr.com\/7907\/47035161191_7ec342cefb_m.jpg\" width=\"240\" height=\"180\" alt=\"Heuliez GX 127 L \u20ac4\" \/><\/a><\/p> <p>N\u00b088<br \/> MES : 2008<br \/> Immatriculation : CG-809-YQ<br \/> Exploitant : Keolis Besan\u00e7on Mobilit\u00e9s<br \/> Lieu : Centre Bus<\/p>",
                    "published": "2019-02-09T11:03:04Z",
                    "author": "nobody@flickr.com (\"Gbus25- Passion Mobilit\u00e9s\")",
                    "author_id": "162718568@N03",
                    "tags": "bus besan\u00e7on besancon ginko d\u00e9p\u00f4t depot"
                },
                {
                    "title": "Mercedes Benz Citaro Facelift \u20ac5, \u00e0 l'atelier",
                    "link": "https:\/\/www.flickr.com\/photos\/162718568@N03\/33160065928\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7924\/33160065928_2cceafd525_m.jpg"},
                    "date_taken": "2019-02-05T15:29:02-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/162718568@N03\/\">Gbus25- Passion Mobilit\u00e9s<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/162718568@N03\/33160065928\/\" title=\"Mercedes Benz Citaro Facelift \u20ac5, \u00e0 l'atelier\"><img src=\"https:\/\/farm8.staticflickr.com\/7924\/33160065928_2cceafd525_m.jpg\" width=\"240\" height=\"180\" alt=\"Mercedes Benz Citaro Facelift \u20ac5, \u00e0 l'atelier\" \/><\/a><\/p> <p>N\u00b0129<br \/> MES : d\u00e9cembre 2009<br \/> Immatriculation : AH-037-ZK<br \/> Exploitant : Keolis Besan\u00e7on Mobilit\u00e9s<br \/> Lieu : Atelier Diesel du Centre Bus<\/p>",
                    "published": "2019-02-09T11:03:08Z",
                    "author": "nobody@flickr.com (\"Gbus25- Passion Mobilit\u00e9s\")",
                    "author_id": "162718568@N03",
                    "tags": "bus besan\u00e7on besancon ginko d\u00e9p\u00f4t depot"
                },
                {
                    "title": "Heuliez GX 327 \u20ac4 et Iveco Urbanway 12 BHNS \u20ac6",
                    "link": "https:\/\/www.flickr.com\/photos\/162718568@N03\/47035247541\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7923\/47035247541_1973a18fe6_m.jpg"},
                    "date_taken": "2019-02-05T14:54:53-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/162718568@N03\/\">Gbus25- Passion Mobilit\u00e9s<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/162718568@N03\/47035247541\/\" title=\"Heuliez GX 327 \u20ac4 et Iveco Urbanway 12 BHNS \u20ac6\"><img src=\"https:\/\/farm8.staticflickr.com\/7923\/47035247541_1973a18fe6_m.jpg\" width=\"240\" height=\"180\" alt=\"Heuliez GX 327 \u20ac4 et Iveco Urbanway 12 BHNS \u20ac6\" \/><\/a><\/p> <p>De gauche \u00e0 droite :<br \/> N\u00b0125<br \/> MES : 2006<br \/> Immatriculation : BG-620-MN<br \/> Exploitant : Keolis Besan\u00e7on Mobilit\u00e9s<br \/> Lieu : Centre Bus<br \/> <br \/> N\u00b0145<br \/> MES : mai 2015<br \/> Immatriculation : DQ-905-ND<br \/> Exploitant : Keolis Besan\u00e7on mobilit\u00e9s<br \/> Lieu : Centre Bus<\/p>",
                    "published": "2019-02-09T11:03:06Z",
                    "author": "nobody@flickr.com (\"Gbus25- Passion Mobilit\u00e9s\")",
                    "author_id": "162718568@N03",
                    "tags": "bus besan\u00e7on besancon ginko d\u00e9p\u00f4t depot"
                },
                {
                    "title": "Heuliez GX 117 r\u00e9form\u00e9s",
                    "link": "https:\/\/www.flickr.com\/photos\/162718568@N03\/47035158151\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7808\/47035158151_3cc4738707_m.jpg"},
                    "date_taken": "2019-02-05T14:21:11-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/162718568@N03\/\">Gbus25- Passion Mobilit\u00e9s<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/162718568@N03\/47035158151\/\" title=\"Heuliez GX 117 r\u00e9form\u00e9s\"><img src=\"https:\/\/farm8.staticflickr.com\/7808\/47035158151_3cc4738707_m.jpg\" width=\"240\" height=\"180\" alt=\"Heuliez GX 117 r\u00e9form\u00e9s\" \/><\/a><\/p> <p>De gauche \u00e0 droite :<br \/> N\u00b079<br \/> MES : 2003<br \/> Immatriculation : CG-792-YQ<br \/> Exploitant : Aucun ( Ex Keolis Besan\u00e7on Mobilit\u00e9s )<br \/> Lieu : Centre Bus<br \/> R\u00e9forme : fin 2018<br \/> <br \/> N\u00b076<br \/> MES : 2002<\/p>",
                    "published": "2019-02-09T11:03:04Z",
                    "author": "nobody@flickr.com (\"Gbus25- Passion Mobilit\u00e9s\")",
                    "author_id": "162718568@N03",
                    "tags": "bus besan\u00e7on besancon ginko d\u00e9p\u00f4t depot"
                },
                {
                    "title": "Solaris Urbino 18, III et IV",
                    "link": "https:\/\/www.flickr.com\/photos\/162718568@N03\/46311145134\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7898\/46311145134_5349805323_m.jpg"},
                    "date_taken": "2019-02-05T14:56:00-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/162718568@N03\/\">Gbus25- Passion Mobilit\u00e9s<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/162718568@N03\/46311145134\/\" title=\"Solaris Urbino 18, III et IV\"><img src=\"https:\/\/farm8.staticflickr.com\/7898\/46311145134_5349805323_m.jpg\" width=\"240\" height=\"180\" alt=\"Solaris Urbino 18, III et IV\" \/><\/a><\/p> <p>De gauche \u00e0 droite :<br \/> N\u00b0555<br \/> MES : mars 2016<br \/> Immatriculation : EA-554-LJ<br \/> Exploitant : Keolis Besan\u00e7on Mobilit\u00e9s<br \/> Lieu : Centre Bus<\/p>",
                    "published": "2019-02-09T11:03:07Z",
                    "author": "nobody@flickr.com (\"Gbus25- Passion Mobilit\u00e9s\")",
                    "author_id": "162718568@N03",
                    "tags": "bus besan\u00e7on besancon ginko d\u00e9p\u00f4t depot"
                },
                {
                    "title": "Irisbus Agora L GNV \u20ac3, en cours du modification moteur",
                    "link": "https:\/\/www.flickr.com\/photos\/162718568@N03\/46983202202\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7869\/46983202202_9e7832e324_m.jpg"},
                    "date_taken": "2019-02-05T14:58:03-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/162718568@N03\/\">Gbus25- Passion Mobilit\u00e9s<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/162718568@N03\/46983202202\/\" title=\"Irisbus Agora L GNV \u20ac3, en cours du modification moteur\"><img src=\"https:\/\/farm8.staticflickr.com\/7869\/46983202202_9e7832e324_m.jpg\" width=\"240\" height=\"180\" alt=\"Irisbus Agora L GNV \u20ac3, en cours du modification moteur\" \/><\/a><\/p> <p>N\u00b0503<br \/> MES : d\u00e9cembre 2002<br \/> Immatriculation : 7903 YA 25<br \/> Exploitant : Keolis Besan\u00e7on Mobilit\u00e9s<br \/> Lieu : Atelier &quot;gaz&quot; du centre bus<\/p>",
                    "published": "2019-02-09T11:03:07Z",
                    "author": "nobody@flickr.com (\"Gbus25- Passion Mobilit\u00e9s\")",
                    "author_id": "162718568@N03",
                    "tags": "bus besan\u00e7on besancon ginko d\u00e9p\u00f4t depot"
                },
                {
                    "title": "CAF Urbos 3, sur voie de remisage",
                    "link": "https:\/\/www.flickr.com\/photos\/162718568@N03\/32093408037\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7872\/32093408037_3f127fa6d4_m.jpg"},
                    "date_taken": "2019-02-07T08:38:23-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/162718568@N03\/\">Gbus25- Passion Mobilit\u00e9s<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/162718568@N03\/32093408037\/\" title=\"CAF Urbos 3, sur voie de remisage\"><img src=\"https:\/\/farm8.staticflickr.com\/7872\/32093408037_3f127fa6d4_m.jpg\" width=\"240\" height=\"180\" alt=\"CAF Urbos 3, sur voie de remisage\" \/><\/a><\/p> <p>N\u00b0817, L\u00e9onel de Moustier<br \/> MES : ao\u00fbt 2014<br \/> Exploitant : Keolis Besan\u00e7on Mobilit\u00e9s<br \/> Lieu : Centre de maintenance tramway Hauts du Chazal<\/p>",
                    "published": "2019-02-09T11:03:09Z",
                    "author": "nobody@flickr.com (\"Gbus25- Passion Mobilit\u00e9s\")",
                    "author_id": "162718568@N03",
                    "tags": "bus besan\u00e7on besancon ginko d\u00e9p\u00f4t depot"
                },
                {
                    "title": "Solaris Urbino \u20ac6, en cours de levage",
                    "link": "https:\/\/www.flickr.com\/photos\/162718568@N03\/46983189282\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7831\/46983189282_14ff6ec294_m.jpg"},
                    "date_taken": "2019-02-05T14:52:55-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/162718568@N03\/\">Gbus25- Passion Mobilit\u00e9s<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/162718568@N03\/46983189282\/\" title=\"Solaris Urbino \u20ac6, en cours de levage\"><img src=\"https:\/\/farm8.staticflickr.com\/7831\/46983189282_14ff6ec294_m.jpg\" width=\"240\" height=\"180\" alt=\"Solaris Urbino \u20ac6, en cours de levage\" \/><\/a><\/p> <p>N\u00b0553<br \/> MES : avril 2016<br \/> Immatriculation : EA-161-LG<br \/> Exploitant : Keolis Besan\u00e7on Mobilit\u00e9s<br \/> Lieu : Atelier &quot;Diesel&quot; Centre Bus<\/p>",
                    "published": "2019-02-09T11:03:06Z",
                    "author": "nobody@flickr.com (\"Gbus25- Passion Mobilit\u00e9s\")",
                    "author_id": "162718568@N03",
                    "tags": "bus besan\u00e7on besancon ginko d\u00e9p\u00f4t depot"
                },
                {
                    "title": "Mercedes Benz Citaro G Facelift \u20ac5, \u00e0 l'atelier",
                    "link": "https:\/\/www.flickr.com\/photos\/162718568@N03\/46311119484\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7833\/46311119484_ba9f152c7c_m.jpg"},
                    "date_taken": "2019-02-05T14:25:18-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/162718568@N03\/\">Gbus25- Passion Mobilit\u00e9s<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/162718568@N03\/46311119484\/\" title=\"Mercedes Benz Citaro G Facelift \u20ac5, \u00e0 l'atelier\"><img src=\"https:\/\/farm8.staticflickr.com\/7833\/46311119484_ba9f152c7c_m.jpg\" width=\"240\" height=\"180\" alt=\"Mercedes Benz Citaro G Facelift \u20ac5, \u00e0 l'atelier\" \/><\/a><\/p> <p>N\u00b0547<br \/> MES : d\u00e9cembre 2011<br \/> Immatriculation : BZ-638-EY<br \/> Exploitant : Keolis Besan\u00e7on Mobilit\u00e9s<br \/> Lieu : Atelier &quot;Diesel&quot; Centre Bus<\/p>",
                    "published": "2019-02-09T11:03:06Z",
                    "author": "nobody@flickr.com (\"Gbus25- Passion Mobilit\u00e9s\")",
                    "author_id": "162718568@N03",
                    "tags": "bus besan\u00e7on besancon ginko d\u00e9p\u00f4t depot"
                },
                {
                    "title": "Heuliez GX 127 L \u20ac4, \u00e0 l'atelier",
                    "link": "https:\/\/www.flickr.com\/photos\/162718568@N03\/46983119802\/",
                    "media": {"m": "https:\/\/farm5.staticflickr.com\/4887\/46983119802_0878c63d45_m.jpg"},
                    "date_taken": "2019-02-05T14:24:54-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/162718568@N03\/\">Gbus25- Passion Mobilit\u00e9s<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/162718568@N03\/46983119802\/\" title=\"Heuliez GX 127 L \u20ac4, \u00e0 l'atelier\"><img src=\"https:\/\/farm5.staticflickr.com\/4887\/46983119802_0878c63d45_m.jpg\" width=\"240\" height=\"180\" alt=\"Heuliez GX 127 L \u20ac4, \u00e0 l'atelier\" \/><\/a><\/p> <p>N\u00b086<br \/> MES : 2006<br \/> Immatriculation : CG-775-YQ<br \/> Exploitant : Keolis Besan\u00e7on Mobilit\u00e9s<br \/> Lieu : Atelier &quot;Diesel&quot; Centre Bus<\/p>",
                    "published": "2019-02-09T11:03:05Z",
                    "author": "nobody@flickr.com (\"Gbus25- Passion Mobilit\u00e9s\")",
                    "author_id": "162718568@N03",
                    "tags": "bus besan\u00e7on besancon ginko d\u00e9p\u00f4t depot"
                },
                {
                    "title": "Heuliez GX 127 L \u20ac5, en levage",
                    "link": "https:\/\/www.flickr.com\/photos\/162718568@N03\/33159950218\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7875\/33159950218_f0d941b879_m.jpg"},
                    "date_taken": "2019-02-05T14:24:12-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/162718568@N03\/\">Gbus25- Passion Mobilit\u00e9s<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/162718568@N03\/33159950218\/\" title=\"Heuliez GX 127 L \u20ac5, en levage\"><img src=\"https:\/\/farm8.staticflickr.com\/7875\/33159950218_f0d941b879_m.jpg\" width=\"240\" height=\"180\" alt=\"Heuliez GX 127 L \u20ac5, en levage\" \/><\/a><\/p> <p>N\u00b092<br \/> MES : 2011<br \/> Immatriculation : BS-142-RX<br \/> Exploitant : Keolis Besan\u00e7on Mobilit\u00e9s<br \/> Lieu : Atelier &quot;Diesel&quot; Centre Bus<\/p>",
                    "published": "2019-02-09T11:03:05Z",
                    "author": "nobody@flickr.com (\"Gbus25- Passion Mobilit\u00e9s\")",
                    "author_id": "162718568@N03",
                    "tags": "bus besan\u00e7on besancon ginko d\u00e9p\u00f4t depot"
                },
                {
                    "title": "Mercedes Benz Citaro Facelift \u20ac5, \u00e0 la station essence",
                    "link": "https:\/\/www.flickr.com\/photos\/162718568@N03\/33160055168\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7913\/33160055168_7696e6e9b1_m.jpg"},
                    "date_taken": "2019-02-05T14:59:55-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/162718568@N03\/\">Gbus25- Passion Mobilit\u00e9s<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/162718568@N03\/33160055168\/\" title=\"Mercedes Benz Citaro Facelift \u20ac5, \u00e0 la station essence\"><img src=\"https:\/\/farm8.staticflickr.com\/7913\/33160055168_7696e6e9b1_m.jpg\" width=\"240\" height=\"180\" alt=\"Mercedes Benz Citaro Facelift \u20ac5, \u00e0 la station essence\" \/><\/a><\/p> <p>N\u00b0129<br \/> MES : d\u00e9cembre 2009<br \/> Immatriculation : AH-037-ZK<br \/> Exploitant : Keolis Besan\u00e7on Mobilit\u00e9s<br \/> Lieu : Station essence Centre Bus<\/p>",
                    "published": "2019-02-09T11:03:08Z",
                    "author": "nobody@flickr.com (\"Gbus25- Passion Mobilit\u00e9s\")",
                    "author_id": "162718568@N03",
                    "tags": "bus besan\u00e7on besancon ginko d\u00e9p\u00f4t depot"
                },
                {
                    "title": "Nuit Besan\u00e7on 1",
                    "link": "https:\/\/www.flickr.com\/photos\/143198521@N08\/46149829104\/",
                    "media": {"m": "https:\/\/farm5.staticflickr.com\/4823\/46149829104_3159d807b1_m.jpg"},
                    "date_taken": "2019-01-24T18:36:04-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/143198521@N08\/\">Hanriot-Colin<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/143198521@N08\/46149829104\/\" title=\"Nuit Besan\u00e7on 1\"><img src=\"https:\/\/farm5.staticflickr.com\/4823\/46149829104_3159d807b1_m.jpg\" width=\"240\" height=\"160\" alt=\"Nuit Besan\u00e7on 1\" \/><\/a><\/p> <p>Tramway Besan\u00e7on<\/p>",
                    "published": "2019-01-25T19:56:36Z",
                    "author": "nobody@flickr.com (\"Hanriot-Colin\")",
                    "author_id": "143198521@N08",
                    "tags": "nuit night street tramway besancon"
                },
                {
                    "title": "Nuit Besan\u00e7on 3",
                    "link": "https:\/\/www.flickr.com\/photos\/143198521@N08\/46149825334\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7918\/46149825334_b832d925a8_m.jpg"},
                    "date_taken": "2019-01-24T18:44:13-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/143198521@N08\/\">Hanriot-Colin<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/143198521@N08\/46149825334\/\" title=\"Nuit Besan\u00e7on 3\"><img src=\"https:\/\/farm8.staticflickr.com\/7918\/46149825334_b832d925a8_m.jpg\" width=\"240\" height=\"160\" alt=\"Nuit Besan\u00e7on 3\" \/><\/a><\/p> <p>Tramway Besan\u00e7on<\/p>",
                    "published": "2019-01-25T19:56:36Z",
                    "author": "nobody@flickr.com (\"Hanriot-Colin\")",
                    "author_id": "143198521@N08",
                    "tags": "street night tramway besancon"
                },
                {
                    "title": "Citadelle de besan\u00e7on",
                    "link": "https:\/\/www.flickr.com\/photos\/148791044@N02\/46087208434\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7825\/46087208434_94474d5efa_m.jpg"},
                    "date_taken": "2019-01-20T09:37:51-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/148791044@N02\/\">Martial Taulemesse<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/148791044@N02\/46087208434\/\" title=\"Citadelle de besan\u00e7on\"><img src=\"https:\/\/farm8.staticflickr.com\/7825\/46087208434_94474d5efa_m.jpg\" width=\"240\" height=\"180\" alt=\"Citadelle de besan\u00e7on\" \/><\/a><\/p> ",
                    "published": "2019-01-20T12:10:26Z",
                    "author": "nobody@flickr.com (\"Martial Taulemesse\")",
                    "author_id": "148791044@N02",
                    "tags": "besancon citadelle landsacpe leverdesoleil paysage sunrise"
                },
                {
                    "title": "Mercedes-Benz Citaro G Facelift \u20ac4",
                    "link": "https:\/\/www.flickr.com\/photos\/162718568@N03\/46662091512\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7862\/46662091512_7f65477290_m.jpg"},
                    "date_taken": "2019-01-09T18:25:18-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/162718568@N03\/\">Gbus25- Passion Mobilit\u00e9s<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/162718568@N03\/46662091512\/\" title=\"Mercedes-Benz Citaro G Facelift \u20ac4\"><img src=\"https:\/\/farm8.staticflickr.com\/7862\/46662091512_7f65477290_m.jpg\" width=\"240\" height=\"180\" alt=\"Mercedes-Benz Citaro G Facelift \u20ac4\" \/><\/a><\/p> <p>N\u00b0539<br \/> MES : 2008<br \/> Immatriculation : CG-859-YQ<br \/> Exploitant : Keolis Besan\u00e7on Mobilit\u00e9s<br \/> Ligne : 7 -&gt;Hauts du Chazal ( en r\u00e9gulation \u00e0 Micropolis )<\/p>",
                    "published": "2019-01-12T16:06:04Z",
                    "author": "nobody@flickr.com (\"Gbus25- Passion Mobilit\u00e9s\")",
                    "author_id": "162718568@N03",
                    "tags": "bus besan\u00e7on besancon ginko"
                },
                {
                    "title": "",
                    "link": "https:\/\/www.flickr.com\/photos\/loroche1972\/31769079627\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7818\/31769079627_7ac4e6ff89_m.jpg"},
                    "date_taken": "2019-01-08T10:55:22-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/loroche1972\/\">loroche25<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/loroche1972\/31769079627\/\" title=\"\"><img src=\"https:\/\/farm8.staticflickr.com\/7818\/31769079627_7ac4e6ff89_m.jpg\" width=\"240\" height=\"160\" alt=\"\" \/><\/a><\/p> ",
                    "published": "2019-01-12T08:13:27Z",
                    "author": "nobody@flickr.com (\"loroche25\")",
                    "author_id": "98567709@N06",
                    "tags": "rue besancon street streetphotography noiretblanc blackandwhite monochrome fujifilm fuji xt1 xf23mmf2"
                },
                {
                    "title": "",
                    "link": "https:\/\/www.flickr.com\/photos\/loroche1972\/39712843093\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7801\/39712843093_cdbbaa0d3a_m.jpg"},
                    "date_taken": "2019-01-08T10:53:43-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/loroche1972\/\">loroche25<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/loroche1972\/39712843093\/\" title=\"\"><img src=\"https:\/\/farm8.staticflickr.com\/7801\/39712843093_cdbbaa0d3a_m.jpg\" width=\"240\" height=\"165\" alt=\"\" \/><\/a><\/p> ",
                    "published": "2019-01-09T16:13:35Z",
                    "author": "nobody@flickr.com (\"loroche25\")",
                    "author_id": "98567709@N06",
                    "tags": "rue besancon fujifilm fuji xt1 xf23mmf2 noiretblanc blackandwhite monochrome street streetphotography"
                },
                {
                    "title": "Miniature of Besan\u00e7on Old City",
                    "link": "https:\/\/www.flickr.com\/photos\/134340798@N02\/46524191082\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7824\/46524191082_f99a5668f4_m.jpg"},
                    "date_taken": "2018-12-30T19:24:29-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/134340798@N02\/\">selefkia33<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/134340798@N02\/46524191082\/\" title=\"Miniature of Besan\u00e7on Old City\"><img src=\"https:\/\/farm8.staticflickr.com\/7824\/46524191082_f99a5668f4_m.jpg\" width=\"240\" height=\"160\" alt=\"Miniature of Besan\u00e7on Old City\" \/><\/a><\/p> <p>Besan\u00e7on\/FRANCE<\/p>",
                    "published": "2019-01-02T21:55:29Z",
                    "author": "nobody@flickr.com (\"selefkia33\")",
                    "author_id": "134340798@N02",
                    "tags": "nikonflickraward miniature besancon"
                },
                {
                    "title": "The Best for 2019 !!",
                    "link": "https:\/\/www.flickr.com\/photos\/francinek\/44735856430\/",
                    "media": {"m": "https:\/\/farm8.staticflickr.com\/7881\/44735856430_fcdf480789_m.jpg"},
                    "date_taken": "2016-08-05T14:32:26-08:00",
                    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/francinek\/\">francine koeller<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/francinek\/44735856430\/\" title=\"The Best for 2019 !!\"><img src=\"https:\/\/farm8.staticflickr.com\/7881\/44735856430_fcdf480789_m.jpg\" width=\"240\" height=\"180\" alt=\"The Best for 2019 !!\" \/><\/a><\/p> <p>Belle Ann\u00e9e 2019 !<\/p>",
                    "published": "2019-01-01T11:16:10Z",
                    "author": "nobody@flickr.com (\"francine koeller\")",
                    "author_id": "99822695@N07",
                    "tags": "voeux 2019 besancon clock montre engrenage lip"
                }]
        }];
    console.log(picture);

    $.each(picture, function (key, value) {
        $("<div>",
            {html:"<div class='card'><img class='card-img-top' src="+value["link"]+"><div class='card-body'><h5 class='card-title'>"+value["title"]+"</h5><p class='card-text'>"+value["description"]+"</p><a href="+value["generator"]+"class='btn'>Read more</a></div></div>"}).appendTo("#news");
    })













});