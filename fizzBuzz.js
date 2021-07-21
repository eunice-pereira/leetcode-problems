//FizzBuzz (1)
// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz”
// instead of the number and for the multiples of five print “Buzz”. For numbers which are multiple
// s of both three and five print “FizzBuzz”.

// naive approach

function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    console.log(
      i % 15 === 0
        ? 'FizzBuzz'
        : i % 3 === 0
        ? 'Fizz'
        : i % 5 === 0
        ? 'Buzz'
        : i
    );
  }
}
fizzBuzz();

// optimized solution 
const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    console.log((i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '') || i);
  }
};

fizzBuzz();
