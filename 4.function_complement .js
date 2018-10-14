//函数默认参数
function show(a, b) {
    //用两个参数接收
    console.log(a, b);//结果是  welcome 牧马人
}
show('welcome', '牧马人');//传两个参数

//为了保证函数的通用性
//有一天  '牧马人'不想打了打一个空字符串   函数改写为

function show(a, b) {
    //用两个参数接收
    console.log(a, b);//结果是 welcome
}                      //牧马人被清空
show('welcome', '');//传两个参数

//如果不传参数
//结果是welcome undefined

function show(a, b) {
    //用两个参数接收
    console.log(a, b);//结果是 welcome undefined
}
show('welcome');//传两个参数

//代码进一步改成
function show(a, b) {
    a = a || '欢迎';
    b = b || 'mmr';//传来的参数b 看有b吗没有就是mmr
    console.log(a, b);//结果是 welcome undefined
}
show('', '牧马人');//传两个参数 第一个参数传了   第一个参数是 空 

//ES更新后   可以添加默认值  
//将上一个代码修改为
function show(a = '欢迎', b = 'mmr') {
    console.log(a, b);//结果是 welcome undefined
}
show('welcome', '牧马人');  //welcome 牧马人
show('welcome', '');  //welcome 第二个参数被清空
show('welcome');//welcome mmr   第二个参数没传  
show('', '牧马人');// 牧马人   第一个参数被清空
show(false, '牧马人');//false '牧马人'
//show(,'牧马人');//Unexpected token 第一个参数必须传

//与解构的连用

function show({ x, y }) {
    console.log(x, y);
}
show({ x: 1, y: 1 });


function show({ x = 0, y = 0 }) {//默认值是0
    console.log(x, y);
}
show({ x: 1, y: 1 });


/* 给函数参数设定了默认值{}
b和c采用函数参数默认值{}对解构赋值进行赋值，
得到a=0，b=0 */
function show({ x = 0, y = 0 }={}) {
    console.log(x, y);
}
show({ x: 1, y: 1 });

//函数参数默认已经定义了,不能在使用let,const声明
function show(a = 18) {
    let a = 101;//错误  函数参数默认已经定义了
    console.log(a);
}
show(12);

//调用时可以不给值  默认值a = 18
//如果调用时给值  取给的值
function show(a = 18) {
    console.log(a);
}
show();


//三个点  扩展运算符 ...

let arr = ['apple','banana','orange'];
console.log(arr);//[ 'apple', 'banana', 'orange' ]

console.log(...arr);//apple banana orange

//复制一份数据到arr2
let arr = [1,2,3];
let arr2 = [...arr];
//let arr2 = Array.from(arr);//以前是array.from复制数据的  
console.log(arr, arr2);//[ 1, 2, 3 ] [ 1, 2, 3 ]

let str = 'a-b-c';
let arr = Array.from(str);//将字符串碾碎 放入
console.log(arr);//[ 'a', '-', 'b', '-', 'c']

function show(a,b,c,d,e) {
    console.log(a,b,c,d,e);
}
show(...[1,2,3,4,5]);//数组展开后赋值 

function show([a,b,c,d,e]) {//结构相同  解构赋值
    console.log(a,b,c,d,e);
}
show([1,2,3,4,5]);//数组展开后赋值 

//与函数的关联
//[1,2,3,4,5]  ->  ...[1,2,3,4,5] ->  1,2,3,4,5
//以前是这样做的    不方便太累了

function show(a,b,c,d,e) {
    console.log(a,b,c,d,e);
}
show(1,2,3,4,5);

//ES 修改为...
//[1,2,3,4,5]  ->  ...[1,2,3,4,5] ->  1,2,3,4,5
//1,2,3,4,5  -> ...a ->[1,2,3,4,5]
function show(...a) {
    console.log(a);//[1,2,3,4,5]
}
show(1,2,3,4,5);


//补充  传入一堆散的数字  怎么排序

function show() {
    return Array.prototype.slice.call(arguments).sort(function(a,b){
        return a-b;    // -1 升序排列 
    });//数字转成数组  对数组排序的方法
}
console.log(show(10,-2,101,-4,50));

function show() {
    let a = Array.prototype.slice.call(arguments);//数字转成数组  对数组排序的方法
    return a.sort(function(a,b){
        return a-b;    // -1 升序排列 
    });
}
console.log(show(1,-2,3,50,9));//[ -2, 1, 3, 9, 50 ]

//ES 更新后
function show(...a) {
    return a.sort(function(a,b){
        return a-b;    // -1 升序排列 
    });
}
console.log(show(1,-2,3,50,9));//[ -2, 1, 3, 50, 9 ]

var arr = [2,5,13,7,4,9,1];
arr.sort(function(a,b){
    return a-b;    // -1 升序排列 
})
console.log(arr);   // [1, 2, 4, 5, 7, 9, 13]

//剩余运算符 rest 收集

function show(a,b,...c) {
    console.log(a,b);//1 2
    console.log(c);//[ 3, 4, 5 ]
}
show(1,2,3,4,5);



