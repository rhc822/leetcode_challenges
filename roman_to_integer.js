/*
13. Roman to Integer

https://leetcode.com/problems/roman-to-integer/

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    //call the function, provide a roman numeral string as a parameter
    //create a map of sorts or definition table or key or whatever either as individual variables (e.g. let I = 1) or as objects (e.g. I: 1)
    let numeralList = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    // Create an empty variable to hold the running tabulation during conversion
    let calculation = 0;

    //loop through the letters in the given string
    for (let i=0; i < s.length; i++) {
        // The number it's currently on in the loop
        let currentRomanNumeral = numeralList[s[i]];
        // The next number in the loop
        let nextRomanNumeral = numeralList[s[i + 1]];
        // Logic to determine whether to add the numbers
        if (currentRomanNumeral >= (nextRomanNumeral || 0)) {
            calculation += currentRomanNumeral;
        // Logic to determine whether to subtract the numbers
        } else {

            calculation -= currentRomanNumeral;

        }
    }
    console.log(calculation)
    return calculation;

};

romanToInt("MCMXCIV");