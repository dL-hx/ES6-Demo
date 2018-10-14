// 函数可以赋值默认值 一般情况下  和对象的解构赋值一起用
function ajax({ url = new Error('url不能为空'), method = 'get' }) {
    console.log(url);
}
ajax({ url: '/test', method: 'get' });

//函数参数默认值的设定
function f(a = 1, b = 2) {
    return a + b;
}

console.log(f());//3 当没有实参传入时,使用默认参数值
console.log(f(3));//5 a=3 b=2



//与解构赋值结合设定参数的默认值
function f1({ a = 1, b = 2 }) {
    return a + b;
}
console.log(f1({ a: 3, b: 4 }));//7
console.log(f1({}));//3 使用默认值
//console.log(f1());//报错，没有传入函数参数对象，因此这种写法必须传入参数为一个对象，否则将会报错

function f2(a = 0, { b = 1, c = 2 } = {}) {
    return a + b + c;
}
console.log(f2());//3 这种写法给函数参数设定了默认值{}，当传入的参数为非对象的时候，使用函数参数默认值对解构赋值设定默认值
console.log(f2(4));//7   a变量采用传入的实参4，b和c采用函数参数默认值{}对解构赋值进行赋值，得到b=1，c=2

function f3(a = 0, { b, c } = { b: 1, c: 2 }) {
    return a + b + c;
}
//这种写法只是将解构赋值的默认值移到了函数参数默认值里,效果是一样的

//函数参数默认值总结（解构赋值结构）：当传入的实参为空或为非对象时，如果函数设定了函数参数默认值对象，函数默认参数对象会赋值给解构赋值结构，
//否则没有函数默认参数对象时，将会报错。当传入的实参为对象时，即使函数设定了函数参数默认值对象也毫无作用，传入的参数对象会直接对解构赋值解构进行赋值


//函数参数默认值的位置   
//当设定默认值的参数设定在参数体尾部时，可以省略设定默认值的参数
//当设定默认值的参数没有设定在参数体尾部时，而且参数体尾部有没有设定默认值的参数，此时设定默认值的参数不可以省略，除非用undefined代替，触发默认值

function f4(a = 3, b) {
    return a + b;
}

//console.log(f4(,4))//报错
console.log(f4(undefined, 3));//6  使用undefined触发默认值

function f5(a, b = 4) {
    return a + b;
}

console.log(4);//8 可以省略设置默认值的参数

//函数的length属性

function f5(a, b, c = 8) {
    return a + b + c;
}

console.log(f5.length);//2   length属性为函数参数中没有设置默认值参数的个数


//函数参数默认值的作用域
function f6(a, b = a) {
    return a + b;
}

console.log(f6(4));//8  此时函数默认值设定的是函数中的一个形参，需要注意设置默认值时要保证变量已经被定义，获取变量值时会用当前作用域向上查找

var a_f7 = 6;
function f7(b = a_f7) {
    return b;
}

console.log(f7());//6 f7作用域中无a_f7，会向父作用域中查找

function f8(x, f = function () { x = 2; }) {
    var x = 12;
    f();
    return x;
}

console.log(f8(4));//12  形参中的变量和函数体声明的变量互不影响  查找会先查找函数体中，再去查找形参中

//箭头函数
function show() {
    return 1;
}
console.log(show());

let show = () => 1;
console.log(show());


function show(a, b) {
    return a + b;
}
console.log(show(12, 5));

//ES6

let show = (a, b) => a + b;
console.log(show(12, 5));


let show = (a = 12, b = 5) => {
    console.log(a, b);
    //return a + b;
}
show();

//在浏览器console 下运行
//10
var id = 10; //用var定义一个全局变量,属于window,let,const不同
let json = {
    id: 1,
    show: function () {
        setTimeout(function () {
            alert(this.id);
        }, 2000);
    }
};
json.show();

//在浏览器console 下运行
//1
var id = 10; //用var定义一个全局变量,属于window,let,const不同
let json = {
    id: 1,
    show: function () {
        setTimeout( () =>{
            alert(this.id);
        }, 2000);
    }
};
json.show();

//arguments问题
function show() {
    console.log(arguments);
}
show(1,2,3,4,5);


let show = ()=>{
    console.log(arguments);//错误
}
show(1,2,3,4,5);


//修改后
let show = (...args)=>{
    console.log(args);
}
show(1,2,3,4,5);


//箭头函数不能当构造函数举例
function show() {
    this.name = 'abc';
}
let s = new show();
console.log(s.name);

//TypeError: show is not a constructor
let show = () =>{//错误
    this.name = 'abc';
}
let s =new show();
console.log(s.name);



//函数参数最后面的逗号可以有了
function show(a,b,c,d,) {
    console.log(a,b,c,d);
}
show(1,2,3,4,);






//...将函数剩下的参数 变成数组,只能放在参数的最后面 
function sum(currency, ...args) {
    return currency + eval(args.join('+'));//方法用于把数组中的所有元素放入一个字符串。
}
console.log(sum('$', 1, 2, 3, 4, 5, 6));

//...的作用 在我们的函数形参中 是剩余运算符,把剩下的结果转化成数组

// 在对象或数组中也可以用...
//展开运算符   拓展运算符

//数组
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr, ...arr2];//1,2,3,4,5,6
console.log(arr3);

//对象
let name = { name: 'zfpx' };
let age = { age: 8 };
let result = { ...name, ...age };
//将两个对象放到一个新的对象中
//{ name: 'zfpx', age: 8 }
console.log(result);

let school = { name: { name: 'zfpx' } };
let newSchool = { ...school };
console.log(school);//{ name: { name: 'zfpx' } }
console.log(newSchool);//{ name: { name: 'zfpx' } }
console.log(school == newSchool);//false

school.name.name = 'jw';
console.log(newSchool); //{ name: { name: 'jw' } }

//深拷贝(两个对象完全没关系)  浅拷贝(对象里存的是地址空间,另一个对象改变了空间,也会导致当前对象更改)

//Object.assign  是浅拷贝 {...}也算浅拷贝

let school = { name: { name: 'zfpx' } };
let newSchool = Object.assign({}, school);//{ name: { name: 'jw' } }
school.name.name = 'jw';
console.log(newSchool);

// let school = {name:0xffff}
// let newSchoool =  {name:0xffff}
// 0xffff.a = 100;

//深拷贝
let school = { name: { name: 'zfpx' } };
let newSchool = JSON.parse(JSON.stringify(school));
school.name.name = 'zf';
console.log(newSchool);

//递归拷贝
let school = {
    name: { name: 'zfpx' },
    age: 9,
    address: '珠峰',
    arr: ['1', '2', '3']
}
//加入值
//school.__proto__ = {aaa:1};
function deepClone(parent, c) {//parent是要拷贝的对象
    let child = c || {};
    for (let key in parent) {
        if (parent.hasOwnProperty(key)) {
            let val = parent[key];
            if (typeof val === 'object') {
                child[key] = Object.prototype.toString.call(val) === '[object Array]' ? [] : {}
                deepClone(parent[key], child[key]);//[1,2,3]
            } else {
                child[key] = parent[key];//处理普通属性
            }
        }
    }
    return child;
}
console.log(deepClone(school));