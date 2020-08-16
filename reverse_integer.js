/************************************

https://leetcode.com/problems/reverse-integer/


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

    let xString = "";
    xString = x.toString();
    // Convert integer to string and...
    let reversedString = "";
    // ...loop through each "letter" backwards
    for (let i = xString.length - 1; i >= 0; i--) {
        // With each pass, store value in a new variable
        reversedString += xString[i];
        }
        // If given value is negative, "record" the minus in a separate variable and add it back when converting to integer
        if (reversedString.includes("-")) {

            let negativeSign = reversedString.charAt(reversedString.length - 1);
            // Convert that variable back to an integer
            reversedString = parseInt(negativeSign + reversedString, 10);

        }
        // If the number is within Range, accept it
        if (reversedString <= 0x7FFFFFFF && reversedString >= -0x7FFFFFFF) {

            return parseInt(reversedString, 10);

        }
        // If not in range, send a message return a 0
        else {

            return 0;

        }
};

console.log(reverse(-2147483648));