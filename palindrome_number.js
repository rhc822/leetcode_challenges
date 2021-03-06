/********************************

https://leetcode.com/problems/palindrome-number/

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?

********************************/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    // read from left and store value in var
    // read from right and store value in another var
    // compare the vars if equal then say yes a palindrome

    let leftToRight = x;
    let rightToLeft = "";
    let xToString = x.toString();
    // Convert integer to string and...
    // ...loop through each "letter" backwards
    for (let i = xToString.length - 1; i >= 0; i--) {
        // With each pass, store value in a new variable
        rightToLeft += xToString[i];
        rightToLeft = parseInt(rightToLeft, 10);
        }

    // If the numbers are equal, accept it
    if (leftToRight === rightToLeft) {

        return true;

    }
        // If not in range, send a message return a 0
    else {

        return false;

    }
};

console.log(isPalindrome(10));