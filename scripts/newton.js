function fn(x) {
  return x * x - 4;
}

function fnD(x) {
  return 2 * x;
}

function newton() {
  var a = parseInt(document.getElementById("ainput").value);
  var b = parseInt(document.getElementById("binput").value);
  count = 0;

  let x = (a + b) / 2;
  var xN = x - fn(x) / fnD(x);
  while (Math.abs(xN - x) > 0.0001) {
    x = xN;
    xN = x - fn(x) / fnD(x);
    count++;
  }
  document.getElementById("newtonAnsw").innerHTML = "Ответ: " + xN;
  document.getElementById("newtonCount").innerHTML = "Счётчик: " + count;
}
