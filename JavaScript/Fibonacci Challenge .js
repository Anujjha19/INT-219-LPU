var n = 3;
function fibonacciGenerator(n) {
    var output = [];
    if (n === 1) {
        return [0];
    }
    else if (n === 2) {
        return [0, 1];
    }
    else {
        output = [0, 1];
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;

}