
var password = process.argv[2];

function obfuscate(password) {
 var finalPassword = '';
 for (var num = 0; num < password.length; num++) {
   if (password[num] === 'a') {
     finalPassword = finalPassword + '4';
   } else if (password[num] === 'e') {
     finalPassword = finalPassword + '3';
   } else if (password[num] === 'o') {
     finalPassword = finalPassword + '0';
   } else if (password[num] === 'l') {
     finalPassword = finalPassword + '1';
   } else {
     finalPassword = finalPassword + password[num];
   }
 }
 return finalPassword;
}

console.log(obfuscate(password));

