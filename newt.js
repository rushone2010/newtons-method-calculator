function funct(x) {
  //Get function formula.
  var funct_formula = document.getElementById("funct").value;
  
  //Set x value to xval from newt function
  //and evaluate the expression. Pass back to newt function.
  var scope = {x: x}
  var funct_value = math.eval(funct_formula, scope); 

  return funct_value;
}

function deriv(x) {
  //Get derivative formula.
  var deriv_formula = document.getElementById("deriv").value;
  
  //Set x value to xval from newt function
  //and evaluate the expression. Pass back to newt function.
  var scope = {x: x}
  var deriv_value = math.eval(deriv_formula, scope); 
  
  return deriv_value;
}

function newt() {
  //Get x and n values.
  var x = document.getElementById("xval").value;
  var n = document.getElementById("nval").value;

  //Iterate through a loop based on the nval.
  for (i = 0; i < n; i++) { 
    if (deriv(x) === 0) {
      return x; 
    }
    else {
      //Newton'd Method Formula.
      x = x - funct(x)/deriv(x);
    }    
  }
  
  //Store the result in the finalVal.
  document.getElementById("finalVal").value = x;
}