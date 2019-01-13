// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
    const args = [],
        body = func.toString(),
        dependencyNames = body.match(/\((.*)\)/)[1].split(/\,\s?/);
    
    for (let key of dependencyNames) {
        const dependency = this.dependency[key];
        if (dependency !== undefined) {
            args.push(dependency);
        }
    }
    return func.bind(this, ...args);
}
