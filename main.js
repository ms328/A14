function checkCookie() {
    let username = document.cookie;
    alert(username);

    if (username != "") {
    alert("Welcome again " + username);
} else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
    setCookieValue("username", username);
}
}
}

function setCookieValue(cookieName, cookieValue) {
    let cookieValue2 = cookieName + "=" + cookieValue;
    document.cookie = cookieValue2;
}
