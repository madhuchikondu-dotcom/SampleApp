const { add, divide } = require("./utils");
const { login } = require("./auth");

console.log("Add:", add(10, "20")); // 

console.log("Divide:", divide(10, 0)); // 

const user = login("admin", "1234");

console.log(user.name); // 