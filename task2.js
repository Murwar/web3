// Реализуйте функцию sum

function sum() {
    return this.reduce(function(sum, current) {
        return sum + current;
    });
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));