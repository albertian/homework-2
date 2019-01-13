/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function(str, len) {
    let words = [],
        result = '',
        currentLineLength = 0,
        temp = '';
    for (let i = 0, length = str.length; i < length; i++) {
        if (currentLineLength++ === len) {
            const sum = words.reduce((res, item) => res + item.length, 0);
            if (words.length === 1) {
                result += words[0] + '\n';
            } else {
                const spases = getSpasesLengths(len - sum, words.length - 1);
                result += words.reduce((res, item, i) => res + item + " ".repeat(spases[i]), '') + '\n';
            } 
            currentLineLength = temp.length;
            words = [];
        }
        //spase is an indicator of word end
        if (str[i] === ' ') {
            words.push(temp);
            temp = '';
        } else {
            temp += str[i];
        }
    }
    result += words.reduce((res, item) => res + item + " ", '') + temp;
    return result;
};
var getSpasesLengths = function (number, count) {
    const arr = [];
    while(number) {
        const length = Math.ceil(number / count);
        arr.push(length);
        number -= length;
        count --;
    }
    return arr;
}