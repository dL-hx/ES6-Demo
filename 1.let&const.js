//var有很多问题
//1.同一变量用var可以声明多次
//2.var有预解释,变量自动提升
//3.var 作用域:全局作用域    函数作用域
//4.声明的变量可以更改   没有常量概念

//1)使用let 的变量不能重复声明
var name = 'zfpx'
var name = 'jw'

let name = 'zfpx'
let name = 'jw'


//2.变量提升
console.log(a);
let a = 1;
var a = 1;

// 3.作用域 会污染全局变量(全局作用域 函数作用域)
var a = 1;
console.log(window.a);

let a = 1;
console.log(window.a);

//当一个变量在一个作用域下声明过 这个变量就好绑定在这个作用域下 
//类似java的局部变量 

let a = 1;
if (true) {
    console.log(a);
}

let a = 1;
if (true) {
    console.log(a);
    let a = 1;
}

//const 来声明常量 不能更改的量
const PI = 3.14;
PI = 3.15

//不能给一个常量赋值
//不能更改引用的地址  但其内的值是可以改变的 

const SHOOL = {name:'zf'};
SHOOL.name =  'zfpx';
console.log(SHOOL)

//????????这个函数暂时看不懂
//let&const通常可以解决那些问题
for (let i = 0; i < 3; i++) {
    setTimeout(function(){
        console.log(i);
    });
}

