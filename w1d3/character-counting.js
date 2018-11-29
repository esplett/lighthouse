function countLetters(word){
 var characters = {}

for (const x of word) {

if (x === " ") {

 } else if (characters[x] === undefined) {
   characters[x] = 1
 } else {
   characters[x] ++
 }

}
return word
}

console.log(countLetters("This is a test string"))


// -countLetters return unique characters that exist in a
// string that is passed into a function

// -instances each letter was found in string
// -returns object that represents stats for sentence,
// all chars found in string, and their counts

