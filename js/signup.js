function login() {
    var uname = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (uname == '') {
        alert("please enter user name.");
    }
    else if (!filter.test(uname)) {
        alert("Enter valid email id.");
    }
    else if (pwd == '') {
        alert("enter the password");
    }
    else if (pwd.length < 6 || pwd.length > 6) {
        alert("Password min and max length is 6.");
    }
    else {
        alert('LOGGED IN');
        //Redirecting to other page or webste code or you can set your own html page.
        window.location = "login-menu.html";
    }
}

function register() {
    var uname = document.getElementById("reg-email").value;
    var pwd = document.getElementById("reg-password").value;
    var con_pwd = document.getElementById("confirm-password").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (uname == '') {
        alert("please enter user name.");
    }
    else if (!filter.test(uname)) {
        alert("Enter valid email id.");
    }
    else if (pwd == '') {
        alert("enter the password");
    }
    else if (pwd.length < 6 || pwd.length > 6) {
        alert("Password min and max length is 6.");
    }
    else if (pwd != con_pwd) {
        alert("Password not matched");
    }
    else {
        alert('YOU ARE SUCCESSFULLY REGISTERED TO EASYBANK');
        //Redirecting to other page or webste code or you can set your own html page.
        window.location = "login-menu.html";
    }
}