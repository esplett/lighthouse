var countdownGenerator = function(x) {
  /* your code here */
  var counter = x;
  return function() {
    counter -= 1;
    if (counter > 0) {
      return `T-minus ${counter}...`;
    } else if (counter < 0) {
      return `Rockets already gone, bub!`;
    } else {
      return `Blast Off!`;
    }
  }
};

var countdown = countdownGenerator(3);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!


// countdown(); // T-minus 3...
// countdown(); // T-minus 2...
// countdown(); // T-minus 1...
// countdown(); // Blast Off!
// countdown(); // Rockets already gone, bub!
// countdown(); // Rockets already gone, bub!



//Implement a function countdownGenerator() that takes in a number x and
//returns a function that counts down when it is called (see starter code
//below).

//get number
//use counter starting at number
// counter
// closure: print out the results
// if statements: +num = t-mins, 0 = blast off, -num = rocket out
// counter --