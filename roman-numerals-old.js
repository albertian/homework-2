//sorted
const dict = [
    {char: 'M', value: 1000},
    {char: 'D', value: 500},
    {char: 'C', value: 100},
    {char: 'L', value: 50},
    {char: 'X', value: 10},
    {char: 'V', value: 5},
    {char: 'I', value: 1}
];

//works incorrect if number >= 4000
function solution(number, result = '', equalsCounter = 1) {
    if (number === 0) {
        return result;
    }
    for (let i = 0, len = dict.length; i < len; i++) {
        if (dict[i].value <= number) {
            console.log(number);
            if (dict[i].char === result[result.length - 1]) {
                equalsCounter += 1;
            } else {
                equalsCounter = 1;
            }
            if (equalsCounter === 4) {
                //for IX cases
                if (result[result.length - 4] === dict[i-1].char) {
                    result = result.substring(0, result.length - 4);
                    result += dict[i].char + dict[i - 2].char;
                } else {
                    //for IV cases
                    result = result.substring(0, result.length - 3);
                    result += dict[i].char + dict[i - 1].char;
                }
            } else {
                result += dict[i].char;
            }
            
            return solution(number - dict[i].value, result, equalsCounter);
        }
    } 
}