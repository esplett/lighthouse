var myArgs = process.argv[2];

function diceRoller(result) {
var result = [];
for (var i = 0; i < process.argv[2]; i++) {
  var userRoll = Math.ceil(Math.random(myArgs)* 6);
  result.push(userRoll);
}
return result;
}

console.log('Rolled ' + process.argv[2] + ' dice: ' + diceRoller().join(', '));

//node dice-roller.js 3, Rolled 3 dice: 2, 6, 5
//cannot be more than 6 or less than 1
//takes a single parameter(number) and rolls that many six-sided dice.
