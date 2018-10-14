/* 对对象的扩展 */

let name = 'Strive';
let age = 18;

let json = {
    name,  //name:name,
    age,   //age:age
    /*  showA: function(){
         return this.name;
     } */
    showA() {
        return this.name;
    },
    showB() {
        return this.age;
    }
};
console.log(json.showA(), json.showB());//Strive 18

//复习下解构
let x = 10;
let y = 20;
function show({x,y}){
    console.log(x,y);
}
show({x,y});

/* Object.is()   */

// console.log(NaN == NaN);//false  两个对象不相等
// console.log(Number.isNaN(NaN));//true


/* Object.is()   看着长相 一样就相等 否则不相等*/
let  b = Object.is(NaN,NaN);
console.log(b);//true

console.log(+0 == -0);//true
console.log(Object.is(+0,-0));//false  看着长相 一样就相等 否则不相等

console.log(Object.is('aaa','aac'));//false

/* 3.Object.assign()    用来合并对象 */

//将三个变量合并

let json = {a:1};
let json2 = {b:2};
let json3 = {c:3};

let obj = Object.assign({},json,json2,json3);
console.log(obj);//{ a: 1, b: 2, c: 3 }



let json = {a:1};
let json2 = {b:2,a:2};//后面传入a:2 会覆盖前面的a:1
let json3 = {c:3};

let obj = Object.assign({},json,json2,json3);
console.log(obj);//{ a: 2, b: 2, c: 3 }

//复制一个对象到另一个
let arr = ['apple', 'banana', 'orange'];
let arr2 = Object.assign([],arr);//将数组合并到新的数组     将数组复制一份到新的里面
arr2.push('tomato');//为数组2  添加变量
console.log(arr2);
console.log(arr);

/* Object.keys() */
    let json =  {
        a:1,
        b:2,
        c:3
    };
    for (let key of Object.keys(json)) {
        console.log(key);
        /* 结果是       
        a
        b
        c 
        */
    }

    //使用解构
    let {keys,values,entries} = Object;
    let json =  {
        a:1,
        b:2,
        c:3
    };
    for (let key of keys(json)) {
        console.log(key);
        /* 结果是       
        a
        b
        c 
        */
    }
    for (let value of values(json)) {
        console.log(value);
    }
    for(let item of entries(json)){
        console.log(item);
    }

    for(let [key,val] of entries(json)){
        console.log(key,val);
    }
/*对象身上:  对象的扩展运算*/
let {x,y,...z} = {x:1,y:2,a:3,b:4};
console.log(x,y,z);//1 2 { a: 3, b: 4 }


let json = {a:3,b:4};
let json2 = {...json};//拷贝json对象
console.log(json2);//{ a: 3, b: 4 }
delete json2.b;//删除json2的b
console.log(json2);//{ a: 3 }
console.log(json);//{ a: 3, b: 4 }


