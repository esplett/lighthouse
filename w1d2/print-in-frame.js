function printInFrame(list) {
 var list = list.split(' ');
 var longest = longestStr(list).length;
 var border = repeat('*', longest + 5); // changed this number to add extra space behind the longest string in the list

 console.log(border);
 for (word of list) {
   console.log('* ' + word + repeat(' ', longest - word.length + 2) + '*'); //Changed this number to add extra * to the word
 }
 console.log(border);
}

function repeat(str, times) {
 var result = "";

 for (var i = 0; i < times; i++) {
   result += str;
 }

 return result;
}

function longestStr(list) { //longestStr not calculating longest
 var longest = list[0];

 for (str of list) {
   longest = str;
 }

 return longest;
}

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');