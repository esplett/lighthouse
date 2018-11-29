
var words = ["ground", "control", "to", "major", "tom"];

function map(arr, callback) {
  newArray = [];
  for (var word of arr) {
      newArray.push(callback(word));
    }
    console.log(newArray)
  }

//given code
map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});



// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]



//Implement your own version of the built-in array map function.

// Yours will take in two arguments. The first will be an array to map and the
// second will be a callback function. The function will return a new array based
// on the results of the callback function.


