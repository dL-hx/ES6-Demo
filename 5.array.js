let arr = ['apple', 'banana', 'orange', 'tomato'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(function (val, index, arr) {
    console.log(val, index, arr);
})

arr.forEach(function (val, index, arr) {
    console.log(this, val, index, arr);
}, 123);

//使用箭头函数
arr.forEach((val, index, arr) => {
    console.log(this, val, index, arr);
}, 123);






/* map函数 */
let arr = [
    { title: 'aaaaa', read: 100, hot: true },
    { title: 'bbbbb', read: 100, hot: true },
    { title: 'ccccc', read: 100, hot: true }
];
let newArr = arr.map((item,index,arr)=>{
    console.log(item,index,arr);
    return 1;
});
console.log(newArr);

/* 重新整理数据结构 */

let arr = [
    { title: 'aaaaa', read: 100, hot: true },
    { title: 'bbbbb', read: 100, hot: true },
    { title: 'ccccc', read: 100, hot: true }
];
let newArr = arr.map((item,index,arr)=>{
    let json = {};
    json.t = `^_^${item.title}------`;
    json.r = item.read + 200;
    json.hot = item.hot == true && '真棒!!!';
    return json;
});

console.log(newArr);


//filter
let arr = [
    { title: 'aaaaa', read: 100, hot: true },
    { title: 'bbbbb', read: 100, hot: false},
    { title: 'ccccc', read: 100, hot: true }
];

//去掉当前最false的新闻 留下hot
let newArr = arr.filter((item,index,arr)=>{
    return item.hot == true;//或写成   return item.hot
});
console.log(newArr);

/* arr.some() 类似查找*/

let arr = ['apple', 'banana', 'orange'];

let b = arr.some((val,index,arr) =>{
    return val == 'banana2';//看数组中有无该元素    //返回值是true or false
});

console.log(b);

//从数组中找一些元素

let arr = ['apple', 'banana', 'orange'];

function findInArray(arr,item) {
    return arr.some((val, index,arr) => {
        return val == item;
    });
}
console.log(findInArray(arr,'orange'));

/* every 数组中每一个值都是......(奇数) */
let arr = [1,3,5,7,9,10];

var b = arr.every((val,index,arr) =>{
    return val%2 ==1;//是奇数
});

console.log(b);

/* reduce  */

//求数组的和
let arr = [1,2,3,4,5,6,7,8,9,10];
let res= arr.reduce((prev,cur,index,arr)=>{
    return prev + cur;
});
console.log(res);

////求数组的阶乘 (2^2)^4 = 64
let arr = [2,2,3];

let res = arr.reduce((prev,cur,index,arr)=>{
    return Math.pow(prev,cur);
});

console.log(res);//64


//ES2017   新增幂运算符

console.log(Math.pow(2,3));

console.log(2**4);

/* arr.reduceRight() 从右往左的 */

let arr = [2,2,3];

let res = arr.reduceRight((prev,cur,index,arr)=>{//(3^2^2) = 81
    return Math.pow(prev,cur);
});

console.log(res);//64


//for ...of 循环 
/* apple
banana
orange
tomato */
let arr = ['apple', 'banana', 'orange', 'tomato'];
for (let val of arr) {
    console.log(val);
}
/* 索引值 arr.keys()取索引值
0
1
2
3 */
for (let index of arr.keys()) {
    console.log(index);
}
/* arr.values()取值
apple
banana
orange
tomato
*/
for (let index of arr.values()) {
    console.log(index);
}
/*
索引 + 值 
[ 0, 'apple' ]
[ 1, 'banana' ]
[ 2, 'orange' ]
[ 3, 'tomato' ] */
for (let item of arr.entries()) {
    console.log(item);
}
/* item[0]索引值  item[1]值
0
1
2
3 */
for (let item of arr.entries()) {
    console.log(item[0]);
}
/*
 0 'apple'
1 'banana'
2 'orange'
3 'tomato'
 */
for (let [key,val] of arr.entries()) {
    console.log(key,val);
}

let str = 'Strive';
//let arr = str.split('');
let arr = Array.from(str);//S
console.log(arr);

let json = {
    0:'apple',
    1:'banana',
    2:'orange',
    length :3//没有lenth出错
}
let arr = Array.from(json);
console.log(arr);


//Array.of()把一组值  转成数组

let arr = Array.of('apple','banana','orange');
console.log(arr);
/* 
Array.of  = function (...args) {
    return args;
}
*/
/* arr.find() */
let arr = [23,900,101,80,100];
let res = arr.find((val,index,arr) =>{
    return val>100;
});
console.log(res); //900

/* arr.findIndex() */

let arr = [23,900,101,80,100];
let res = arr.findIndex((val,index,arr) =>{
    return val>100;
});
console.log(res); //1

/* arr.fill() 填充 */

let arr = new Array(10);
arr.fill('默认值',1,3);
console.log(arr);

/* arr.includes() 包含 */
let arr = ['apple', 'banana', 'orange', 'tomato'];

let b = arr.indexOf('orange');
console.log(b);
