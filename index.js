const { add, divide } = require("./utils");
const { login } = require("./auth");

console.log("Add:", add(10, "20")); // bug: string + number

console.log("Divide:", divide(10, 0)); // bug: division by zero

const user = login("admin", "1234");

console.log(user.name); // bug: possible null error