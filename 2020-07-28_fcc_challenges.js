/*==========================================
INSTRUCTIONS

Given a positive number less than 100,000, calculate the square root without using library or built in methods.

example:
findSquareRoot(9) // 3
findSquareRoot(15) // 3.872  or something close to it
findSquareRoot(576) // 24
findSquareRoot(63504) // 252

=============================================*/



/*

I found this way to calculate the square root manually on the following website:

http://www.math.com/school/subject1/lessons/S1U1L9DP.html

The site is a math site, not a coding site, so I had to "translate" the instructions into code. The math instructions from the site are as follows:

1. Estimate - first, get as close as you can by finding two perfect square roots your number is between.

2. Divide - divide your number by one of those square roots.

3. Average - take the average of the result of step 2 and the root.

4. Use the result of step 3 to repeat steps 2 and 3 until you have a number that is accurate enough for you.

*/


const perfectSquares = [];
const rootsOfPerfectSquares = []

// calculate all perfect squares and their accompanying roots under 100,000 and store those values in arrays
for (i = 1; i < 100000; i++){

  perfectSquares.push(i * i);
  rootsOfPerfectSquares.push(i);

  if (i * i >= 100000) {

        break;

    }
}

// Create a function to calculate the square root
function calculateSquareRoot(num) {

    //Take the input of a given number and check if it is > 1 and <= 100000
    if (num > 1 && num <= 100000) {

        for (i = 0; i < perfectSquares.length; i++) {
            // Check if given number is a perfect square
            if (num === perfectSquares[i]) {
                console.log(rootsOfPerfectSquares[i] + " is the square root of " + num);
            }

            // Find the nearest perfect squares on either side of given number
            else if (num < perfectSquares[i] && num > perfectSquares[i - 1] ) {
                // Divide the given number by the lower perfect square number and then do a simple average calculation using the resulting answer again with the lower perfect square number
                approximation = ((num / rootsOfPerfectSquares[i - 1]) + rootsOfPerfectSquares[i - 1]) / 2;
                approximationSquared = approximation * approximation;

                    // Check if the result of squaring the approximation is within the desired level of accuracy (in this case, at least two zeroes past the decimal)
                    if  (approximationSquared.toString().includes(".00")) {

              	        console.log(approximation + " is the square root of " + num);

                    } else {

                        // If the result of squaring the approximation is NOT within the desired level of accuracy, continuing averaging the resulting approximation until it is within tolerance
                        while (!approximationSquared.toString().includes(".00")) {

                            approximation = ((num / approximation) + approximation) / 2
                            approximationSquared = approximation * approximation;
                        }

                        console.log(approximation + " is the square root of " + num);
                        console.log(typeof approximation)

                    }
            }
        }
    }
    else {
        console.log("Number is invalid. Please enter a number greater than 1 and less than 100,000");
    }
}

calculateSquareRoot(63504)







/**************************************************

What my team and I had initially started on 7/28...


https://www.freecodecamp.org/news/find-square-root-of-number-calculate-by-hand/


https://docs.google.com/document/d/1RjqPdF3Uie78ymWlFhTxpdqotbkS_oeZ865w-3ehPh4/edit

function something (given a # < 100,000){

  a number do a calculation to that
  return value

}

---------------------------------


const returnSqrt = (number) => {

    //   a number do a calculation to that
    //   return value
    // split number into pairs


    let n = number.toString().length
      if (n % 2 !== 0) {
        newN = n + "0"
      } else {

      }

      return n;

    }

    const answer = returnSqrt(2025);

    console.log(answer);

***************************************************/