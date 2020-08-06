/************************************

Given a 32-bit signed integer, reverse digits of an integer.

EXAMPLE 1:
Input: 123
Output: 321

EXAMPLE 2:
Input: -123
Output: -321

EXAMPLE 3:
Input: 120
Output: 21

NOTE:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*************************************/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    //~ if the number is within Range, accept it
    //~ else send a message not within range
    // convert to string and loop through each number backwards
    // at each pass, store values in a new variable
    // convert that variable back to number

    if (x <= 2147483647 || x >= -2147483647) {

        const xString = (String(x));
        for (let i = xString.length - 1; i >= 0; i--) {
            let reversedString = xString[i];
        }
        return reversedString;
    }

    else {

        return 0;

    }

};

console.log(reverse(256));