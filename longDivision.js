// write a function that performs Long division for two decimals
// input are two strings

// "3.1", "1.5" --> "4.6"
// "31", "42" --> "73"
// "33355557", "43435",

//  23
//+ 69
// ----

function longDivision(n, d) {
  var num = n + '',
    numLength = num.length,
    remainder = 0,
    answer = '',
    i = 0;

  while (i < numLength + 3) {
    var digit = i < numLength ? parseInt(num[i]) : 0;

    if (i == numLength) {
      answer = answer + '.';
    }

    answer = answer + Math.floor((digit + remainder * 10) / d);
    remainder = (digit + remainder * 10) % d;
    i++;
  }
  return parseFloat(answer).toString();
}

console.log(longDivision('356', '8')); // "44.5"
