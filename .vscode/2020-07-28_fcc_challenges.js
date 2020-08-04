/*

Given a positive number less than 100,000, calculate the square root without using library or built in methods.

example:
findSquareRoot(9) // 3
findSquareRoot(15) // 3.872  or something close to it
findSquareRoot(576) // 24
findSquareRoot(63504) // 252

*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*

I found this way to calculate the square root manually on the following website:

http://www.math.com/school/subject1/lessons/S1U1L9DP.html

*/


// 1) calculate all perfect squares under 100,000 and store values in an array

const perfectSquares = [];
const rootsOfPerfectSquares = []
//console.log(perfectSquares);

for (i = 1; i < 100000; i++){

  perfectSquares.push(i * i);
  rootsOfPerfectSquares.push(i);

  if (i * i >= 100000) {

        break;

    }

  }

console.log(perfectSquares);
console.log(rootsOfPerfectSquares);

// 2) Take the input of a given number and check if it is > 1 and <= 100000

function calculateSquareRoot(num) {

    if (num > 1 && num <= 100000) {

        for (i = 0; i < perfectSquares.length; i++) { // 3) Find the nearest perfect squares on either side of given number
          if (num === perfectSquares[i]) { // Check if given number is a perfect square
                alreadyPerfectSquare = perfectSquares[i];
                console.log(alreadyPerfectSquare);
            }
          else if (num < perfectSquares[i] && num > perfectSquares[i - 1] ) { // 3) Find the nearest perfect squares on either side of given number
                bottomSquareRoot = rootsOfPerfectSquares[i - 1];
                console.log(((num / bottomSquareRoot) + bottomSquareRoot) / 2); // 4) Divide the given number by the lower perfect square number and average the resulting answer and the lower perfect square number together
            }
          }

    }
    else {

        console.log("Number is invalid. Please enter a number greater than 1 and less than 100,000");

    }
}

calculateSquareRoot(1000)


// 6) Take that resulting answer Test if answer is to desired accuracy



// 7) If so, display answer. If not, repeat












// https://www.freecodecamp.org/news/find-square-root-of-number-calculate-by-hand/


// https://docs.google.com/document/d/1RjqPdF3Uie78ymWlFhTxpdqotbkS_oeZ865w-3ehPh4/edit

// function something (given a # < 100,000){

//   a number do a calculation to that
//   return value

// }

// ---------------------------------

// What my team and I started last time...

// const returnSqrt = (number) => {

//     //   a number do a calculation to that
//     //   return value
//     // split number into pairs


//     let n = number.toString().length
//       if (n % 2 !== 0) {
//         newN = n + "0"
//       } else {

//       }

//       return n;

//     }

//     const answer = returnSqrt(2025);

//     console.log(answer);