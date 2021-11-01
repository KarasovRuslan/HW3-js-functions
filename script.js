console.log('------------- 4')
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3));

//

function deduct(a, b) {
    return a - b;
} 
console.log(deduct(10, 6));

//

function multi(a, b) {
    return a * b;
} 
console.log(multi(2, 7));

//

function divis(a, b) {
    return a / b;
} 
console.log(divis(24, 6));

//

console.log('------------- 5')
function getBack(n) {
    for (let x = 1; x <= n; x++) {
        console.log(x)
    }
}
getBack(5);

//

console.log('------------- 6')
function getFor(n) {
    for (let x = 1; n >= x; n--) {
        console.log(n)
    }
}
getFor(5);

//

console.log('------------- 7')
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
}
console.log(pow(3, 3));


// function pow(x, n) {
//     let result = Math.pow(x, n);
//     return result;
// }
// console.log(pow(3, 3));


//

console.log('------------- 8')
function isBigger(a, b) {
    return a > b;
}
console.log(isBigger(5, -1));

console.log('------------- 9')
function isSmaller(a, b) {
    return a < b;
}
console.log(isSmaller(5, -1));