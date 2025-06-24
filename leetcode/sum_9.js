// Q.https://leetcode.com/problems/palindrome-number/description/

Nini:

const num = -121;

const isPalindromeNumber = (num) => {
    let number = num;
    let reversedNumber = 0;

    while (number > 0) {
        let temp = number % 10; // 1  2  1
        reversedNumber = (reversedNumber * 10) + temp; // 1 12 121
        number = Math.floor(number / 10); // 0.1
    }

    return reversedNumber === num;
}
console.log(isPalindromeNumber(num));

Kruuu:

var isPalindrome = function (x) {
    if (Math.sign(x) == -1) {
        return false
    }
    let temp = x
    let output = 0
    while (temp) {
        rem = temp % 10
        output = (output * 10) + rem
        temp = Math.floor(temp / 10)
    }
    return output == x
};