//过滤掉不符合条件的数据

//过滤掉奇数留下偶数

let set = new Set([1,2,3,4,5,6]);

set = new Set([...set].filter(val =>val%2==0));

console.log(set);//Set { 2, 4, 6 }


let set = new Set();

let json = {
    a:1,
    b:2
};

let json2 = {
    a:'apple',
    b:2
};

set.add(json);
set.add(json2);

//console.log(set);//Set { { a: 1, b: 2 }, { a: 'apple', b: 2 } }
set.forEach((item)=>{
    //1
    //apple
    console.log(item.a);
})

