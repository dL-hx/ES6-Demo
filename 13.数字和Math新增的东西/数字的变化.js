let a = 12;
//console.log(isNaN(a));//监测是不是NaN

let str = "welcome";
console.log(Number.isNaN(a));//false

console.log(Number.isFinite(a));//true  监测a是不是数字

console.log(str);

//判断是不是整数
let a = 12;
let b = 12.5;
console.log(Number.isInteger(a));//true
console.log(Number.isInteger(b));//false


let a = 2**53 - 1;
console.log(Number.isSafeInteger(a));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Math.cbrt(27));

