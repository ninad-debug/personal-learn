// Q.https://leetcode.com/problems/roman-to-integer/description/

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

Nini:

const romanToIntNumber = (value) => {
    let sum = 0;
    let i = value.length - 1 // 6
    let obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    while (i >= 0) {
        if (value[i - 1] && (
            (value[i - 1] === 'I' && ['V', 'X'].includes(value[i])) ||
            (value[i - 1] === 'X' && ['L', 'C'].includes(value[i])) ||
            (value[i - 1] === 'C' && ['D', 'M'].includes(value[i]))
        )) {
            sum += obj[value[i]] - obj[value[i - 1]];
            i -= 2;
        } else {
            sum += obj[value[i]];
            i--;
        }
    }

    return sum; // 1, 9, 9, 4
}

// --------------------------------------------------------------------------------------------------------------- 

Kruuu:

var romanToInt = function (s) {
    const values = {
        'I': 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let sLength = s.split('')?.length
    let valueArr = s.split('')
    let value = 0
    while (sLength) {
        if (values[valueArr[sLength - 2]] < values[valueArr[sLength - 1]]) {
            value += (values[valueArr[sLength - 1]] - values[valueArr[sLength - 2]])
            sLength -= 2
        }
        else {
            value += values[valueArr[sLength - 1]]
            sLength -= 1
        }
    }
    return value
};