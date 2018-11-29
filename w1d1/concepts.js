
/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */


 // a custom function written by you (you must define it too!) function joinList(array) {


// How to return an undefined function

 /*if (array === undefined) {
  console.log("No input provided.");
 } else {
*/

/*
var concepts = joinList(conceptList);

function joinList(array) {
 for (var loop = 0; loop < array.length; loop++) {
   if (loop === 0) {
     var output = array[0];
   } else {
     output = output + ", " + array[loop];
   }
 }
 return output;
}

console.log("Today I learned about " + concepts + ".");
*/

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

var concepts = joinList(conceptList);

function joinList(array) {
 var output = '';
 if (array !== undefined) {
   for (var loop = 0; loop < array.length; loop++) {
     if (loop === 0) {
       output = array[0];
     } else {
       output = output + ", " + array[loop];
     }
   }
 }
 return output;
}

console.log("Today I learned about " + concepts + ".");