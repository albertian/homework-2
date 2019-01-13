//created for compactness
function commonNumber(x, func) {
    if (typeof func === 'function') {
        return func(x);
    } else {
        return x;
    }
}
function zero(func) {
    return commonNumber(0, func);
}
function one(func) {
    return commonNumber(1, func);
}
function two(func) {
    return commonNumber(2, func);
}
function three(func) {
    return commonNumber(3, func);
}
function four(func) {
    return commonNumber(4, func);
}
function five(func) {
    return commonNumber(5, func);
}
function six(func) {
    return commonNumber(6, func);
}
function seven(func) {
    return commonNumber(7, func);
}
function eight(func) {
    return commonNumber(8, func);
}
function nine(func) {
    return commonNumber(9, func);
}

function plus(a) {
    return ((a, b) => a + b).bind(this, a)
}
function minus(a) {
    return ((a, b) => b - a).bind(this, a)
}
function times(a) {
    return ((a, b) => a * b).bind(this, a)
}
function dividedBy(a) {
    return ((a, b) => Math.floor(b / a)).bind(this, a)
}