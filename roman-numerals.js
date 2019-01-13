//sorted
const dict = [
    { char: 'M', value: 1000 },
    { char: 'CM', value: 900 },
    { char: 'D', value: 500 },
    { char: 'CD', value: 400 },
    { char: 'C', value: 100 },
    { char: 'XC', value: 90 },
    { char: 'L', value: 50 },
    { char: 'XL', value: 40 },
    { char: 'X', value: 10 },
    { char: 'IX', value: 9 },
    { char: 'V', value: 5 },
    { char: 'IV', value: 4 },
    { char: 'I', value: 1 }
];

//works incorrect if number >= 4000
function solution(number, result = '') {
    if (number === 0) {
        return result;
    }
    for (let i = 0, len = dict.length; i < len; i++) {
        if (dict[i].value <= number) {
            result += dict[i].char;
            return solution(number - dict[i].value, result);
        }
    }
}