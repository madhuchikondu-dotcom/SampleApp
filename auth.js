function login(username, password) {
  if (username === "admin" && password === "1234") {
    return { name: "Admin User" };
  }

  return null;
}

module.exports = { login };