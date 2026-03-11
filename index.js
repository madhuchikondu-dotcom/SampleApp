const user = login("admin", "1234");

console.log(user.name); // bug: possible null error