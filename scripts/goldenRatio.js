let x1, x2;

function fn(x) {
  return x * x - 4;
}

function goldenRatio() {
  var a = parseInt(document.getElementById("ainput").value);
  var b = parseInt(document.getElementById("binput").value);
  var count = 0;
  var fi = (1 + Math.sqrt(5)) * 0.5;

  while (Math.abs(b - a) > 0.0001) {
    x1 = b - (b - a) / fi;
    x2 = a + (b - a) / fi;

    fn(x1) >= fn(x2) ? (a = x1) : (b = x2);

    count++;
  }
  x = (a + b) / 2;
  document.getElementById("ratAnsw").innerHTML = x;
  document.getElementById("ratCount").innerHTML = count;
}
