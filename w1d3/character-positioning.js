function index(word) {
 var characters = {}
   for (var i = 0; i < word.length; i++) {
     var letter = word[i]
     if (characters[letter] !== undefined) {
       characters[letter].push(i)
     } else {
   characters[letter] = [i]
 }
     }
   return characters;
 }

console.log(index("lighthouseinthehouse"))

// {
//   l: 0
//   i: 1, 10
//   g: 2
//   h: 3, 5, 13, 15
//   t: 4, 12
//   o: 6, 16
//   u: 7, 17
//   s: 8, 18
//   e: 9, 19
//   n: 11,
// }