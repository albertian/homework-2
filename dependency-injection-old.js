// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
    // Your code goes here
    const args = [];
    let i = 0;
    for (let key in this.dependency) {
        args.push(function (i) {
            const body = arguments.callee.caller.toString(),
                depName = body.match(/\((.*)\)/)[1].split(',')[i].trim();
            return this.dependency[depName]();
        }.bind(this, i++));
    }
    return func.bind(this, ...args);
}

