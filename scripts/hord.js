function fn(x) {
  return x * x - 4;
}

function chordMethod() {
  var a = parseInt(document.getElementById("ainput").value);
  var b = parseInt(document.getElementById("binput").value);
  count = 0;
  while (Math.abs(fn(b)) > 0.0001) {
    a = b - ((b - a) * fn(b)) / (fn(b) - fn(a));
    b = a - ((a - b) * fn(a)) / (fn(a) - fn(b));
    count++;
  }
  document.getElementById("hordAnsw").innerHTML = "Ответ: " + b;
  document.getElementById("hordCount").innerHTML = "Счётчик: " + count;
}
