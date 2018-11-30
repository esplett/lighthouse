var chalk = require("chalk");

var message = "Hello " + chalk.blue("World: ") +
chalk.keyword('orange')("I like colours") ;
console.log(message);