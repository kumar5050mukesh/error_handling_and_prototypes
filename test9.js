function numberChecker(arr) {
    return function (num) {
        return arr.includes(num);
    }
}

let checkNum = numberChecker([1, 2, 3, 4, 5]);
console.log(checkNum(3)); 
console.log(checkNum(6));