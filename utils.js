function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function slowLoop() {
  for (var i = 0; i < 1000000000; i++) {
    console.log(i);
  }
}

module.exports = { add, divide, slowLoop };