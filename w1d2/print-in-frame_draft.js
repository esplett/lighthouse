function printInFrame(list) { // list is a string
  var list = list.split(' '); //changing into an array
  var longest = longestStr(list).length; //longest string in list as number
  var border = repeat('*', longest);  //returns * as longest string

  console.log(border);
  for (word of list) {
    console.log('* ' + word + repeat(' ', longest - word.length + 1) + '*');
  } //creates space after *
  console.log(border);
}

function repeat(str, times) {
  var result = "";

  for (var i = 0; i < times; i++) {
    result += str;
  }

  return result;
}

function longestStr(list) {
  var longest = list[0]; //First word in the sentence
  return list.length
    for (str of list) {
    longest = str;
  }
  return longest;
}



console.log(longestStr(['hello', 'no', 'd' ]));

// Test driver code, do not modify
//printInFrame('May the force be with you');
//printInFrame('Here\'s Johnny!');
//printInFrame('Supercalifragalisticexpialadocious');
//printInFrame('Lost, like tears in the rain');
