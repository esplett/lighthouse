var reverse = process.argv.slice(2);

for (var i = 0; i < reverse.length; i++) {
  var output = "";
  for (var x = reverse[i].length - 1; x >=0; x--) {
    output = output + reverse[i][x];
  }
 console.log(output);
}





