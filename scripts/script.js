let x1, x2;

const fi = (1 + Math.sqrt(5)) / 2;

function fn(x) {
  return Math.pow(x - 1, 2);
}

function goldenRatio() {
  var a = parseInt(document.getElementById("ainput").value);
  var b = parseInt(document.getElementById("binput").value);

  while (Math.abs(b - a) > 0.00001) {
    x1 = (b - (b - a)) / fi;
    x2 = (a - (b - a)) / fi;

    x1 > x2 ? (a = x1) : (b = x2);

    if (fn(x1) >= fn(x2)) {
      a = x1;
    } else {
      b = x2;
    }
  }
  x = (a + b) / 2;
  alert(x);
}

function dichotomy() {
  var a = parseInt(document.getElementById("ainput").value);
  var b = parseInt(document.getElementById("binput").value);
  var c;
  while (Math.abs(b - a) > 0.0001) {
    c = (a + b) / 2;
    // alert(c);
    if (fn(b) * fn(c) <= 0) {
      a = c;
    } else {
      b = c;
    }
  }
  x = (a + b) / 2;
  alert(x);
}
