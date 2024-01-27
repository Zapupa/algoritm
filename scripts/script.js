let x1, x2;

function fn(x) {
  return x*x-4;
}

function goldenRatio() {
  var a = parseInt(document.getElementById("ainput").value);
  var b = parseInt(document.getElementById("binput").value);

  var fi =  (1 + Math.sqrt(5)) *0.5;

  while (Math.abs(b - a) > 0.0001) {
    x1 = b - (b - a) / fi;
    x2 = a + (b - a) / fi;
    
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
    
    if (fn(b) * fn(c) <= 0) {
      a = c;
    } else {
      b = c;
    }
  }
  x = (a + b) / 2;
  alert(x);
}
