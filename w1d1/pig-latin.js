var array = process.argv.slice(2);
var output = '';

for (var i = 0; i < array.length; i++) {
  var word = array[i]
  var firstLetter = word[0];
  var remainingLetters = word.slice(1);
  // console.log(firstLetter, remainingLetters)
  output += remainingLetters + firstLetter + 'ay ';
}

console.log(output)


//taking its first letter, moving it to the end of the word, then adding "ay" after it all.