//will return false for ')('-like string
function validBraces(braces){
    const stack = [],
        openBraces = ['(', '[', '{'],
        closingBraces = [')', ']', '}'];
    for (let i = 0, c, len = braces.length; i < len; i++) {
        c = braces[i];
        if (openBraces.indexOf(c) !== -1) {
            stack.push(c);
        } else {
            const index = closingBraces.indexOf(c);
            if (index !== -1 && openBraces[index] !== stack.pop()) {
                return false;
            }
        }
    }
    return !stack.length;
}