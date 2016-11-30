function userAgent(){
    var ua= navigator.userAgent, tem,
        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return ['IE ', (tem[1] || '')];
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera').split(' ');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    M[0] = M[0].toLowerCase();
    return M;
}

if (userAgent()[0] == 'firefox') {

    if (userAgent()[1] < '35') {

        alert('Ваш браузер устарел, пожалуйста обновите его').modal('show');

    }

}

if (userAgent()[0] == 'opera') {

    if (userAgent()[1] < '7') {

        alert('Ваш браузер устарел, пожалуйста обновите его').modal('show');

    }

}

if (userAgent()[0] == 'safari') {

    if (userAgent()[1] == '5.0') {

        alert('Ваш браузер устарел, пожалуйста обновите его').modal('show');

    }

}

if (userAgent()[0] == 'msie') {

    if (userAgent()[1] < '9') {

        alert('Ваш браузер устарел, пожалуйста обновите его').modal('show');

    }

}
