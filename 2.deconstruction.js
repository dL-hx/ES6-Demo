//解构: 等号左边和右边类似

//数组的解构
let arr = ['zfpx', 9];
let name = arr[0];
let age = arr[1];

console.log(name, age);


let arr = ['zfpx', 9];
let [name, age] = arr;
console.log(name, age);

//对象
let obj = { name: 'zfpx', age: 9 };
//传来了两个参数   用三个变量接收,另一个用默认值
//给name起别名n    name:n
//给address起别名 address = "回龙观"
let { name: n, age, address = "回龙观" } = obj;
console.log(n, age, address);


//复杂的解构 省略解构
//省略第一项   拿到地址 和第三项的值
//代码结果是 回龙观  jw
let arr = [{ name: 'zfpx', age: '9' }, '回龙观', { name: 'jw' }];
let [, address, { name }] = arr;
console.log(address, name);

let a = 12;
let b = 5;

[a,b] = [b,a];

console.log(a,b);