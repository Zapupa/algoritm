function fn(x) {
  return 2 * x;
}

function midPoint() {
  var a = parseInt(document.getElementById("ainput").value);
  var b = parseInt(document.getElementById("binput").value);
  var c = (a + b) / 2,
    count = 0;

  do {
    fn(c) < 0 ? (a = c) : (b = c);

    c = (a + b) / 2;

    count++;
  } while (Math.abs(b - a) > 0.00001);

  x = c;

  document.getElementById("midAnsw").innerHTML = "Ответ: " + x;
  document.getElementById("midCount").innerHTML = "Счётчик: " + count;
}
