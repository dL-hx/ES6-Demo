let setArr = new Set(['a','b','c','d']);
setArr.forEach((value,index) =>{
    console.log(value,index);
})

let set = new Set(['apple','banana']);
set.forEach((item)=>{
    //apple
    //banana
    console.log(item);
})

let wSet = new WeakSet();

let json = {
    a:1,
    b:2
};
let json2 = {
    a:'apple',
    b:2
};
wSet.add(json);
wSet.add(json2);
console.log(wSet.size);//WeakSet { [items unknown] }
