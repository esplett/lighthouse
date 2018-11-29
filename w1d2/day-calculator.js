function calculateDayInYear(date) {
  var splitDate = date.split('/'); // Correct
  var year = Number(splitDate[0]); //Correct
  var month = Number(splitDate[1]); // Correct
  var day = Number(splitDate[2]); //Correct
  var febDays = daysInFeb(year); //Correct
  console.log("febDays: ", febDays);
  var DAYS_IN_MONTH = [31, febDays, 31, 30,
  31, 30, 31, 31, 30, 31, 30, 31]; //prints this out exactly


  if (year && validMonth(month) && validDay(month, day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
    return calculateDayNumber(month, day);
  } else {
    console.log("Invalid date");
  }

  function validMonth(month) {
    if (month >= 1 && month <= 12) {
     return month;
    } else {
     return false;
    }
  }

  function validDay(month, day) {
    if (day >= 1 && day <= DAYS_IN_MONTH[month - 1]) {
    return day;
    } else {
    return false;
    }
  }

  function calculateDayNumber(month, day) {
    var dayOfYear = 0;

    for (var i = 1; i < month; i++) {
      dayOfYear += DAYS_IN_MONTH[i - 1];
    }

    return dayOfYear + day;
  }

  function daysInFeb(year) {
    if (isLeapYear(year)) {
    return 29;
    } else {
    return 28;
    }
  }

  function isLeapYear(year) {
    return isMultiple(year, 4) && (!isMultiple(year, 100) || isMultiple(year, 100)
      && isMultiple(year, 400));
  }
}


function isMultiple(numerator, denominator) {
  return numerator % denominator === 0;
}

var date = process.argv[2];

if (!date) {
  console.log("Please provide a date in the format YYYY/MM/DD");
} else {
  calculateDayInYear(date);
}

/*
    Below are some simple tests!

    They run the function with a predetermined parameter and compare the output to
    the value we are expecting to get!

    The console.log will output either 'true' or 'false' based on whether or not the
    function
    returns a value that matched our expected value.

    You'll know your code works correctly when all of these tests return 'true'
*/
console.log("Tests:");
console.log("---------------");
console.log(calculateDayInYear("1900/3/2") === 61);
console.log(calculateDayInYear("2000/3/2") === 62);
console.log(calculateDayInYear("2012/2/29") === 60);
console.log(calculateDayInYear("2015/12/31") === 365);