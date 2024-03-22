function fn(x) {
  return x * x - 4;
}

function itterFn(x, L) {
  return x + L * fn(x);
}

function ezItter() {
  var a = parseInt(document.getElementById("ainput").value);
  var b = parseInt(document.getElementById("binput").value);
  var count = 0;

  let x0 = (a + b) / 2;
  let L = -x0;
  let xN = itterFn(x0, L);
  count = 1;

  while (Math.abs(xN - x0) > 0.0001) {
    x0 = xN;
    xN = itterFn(x0, L);
    count++;
  }

  document.getElementById("ezItterAnsw").innerHTML = "Ответ: " + xN;
  document.getElementById("ezItterCount").innerHTML = "Счётчик: " + count;
}
