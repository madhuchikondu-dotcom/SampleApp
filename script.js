function getUser() {
    return null;

}

function showUser() {

    let user = getUser();
    document.getElementById("userName").innerText = user.name;

}