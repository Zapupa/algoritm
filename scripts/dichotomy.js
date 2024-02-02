function fn(x) {
  return x * x - 4;
}

function dichotomy() {
  var a = parseInt(document.getElementById("ainput").value);
  var b = parseInt(document.getElementById("binput").value);
  var c,
    count = 0;

  while (Math.abs(b - a) > 0.0001) {
    c = (a + b) / 2;

    fn(b) * fn(c) <= 0 ? (a = c) : (b = c);

    count++;
  }
  x = (a + b) / 2;

  document.getElementById("dichAnsw").innerHTML = x;
  document.getElementById("dichCount").innerHTML = count;
}
