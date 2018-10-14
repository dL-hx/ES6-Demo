function fn(){
    return '我是函数';
}

let newFn = new Proxy(fn, {
    apply(){
        return `函数吗?`;
    }
});

console.log(newFn());


function sum(a,b){
    return a + b;
}
let newSum = new Proxy(sum,{
    apply(target,context,args){
        // console.log(target,context,args);
        // console.log(...arguments);
        return Reflect.apply(...arguments);
    }
});
console.log(newSum(2,3));



function show(...args){
    console.log(this);
    console.log(args);
}
//show(1,2,3,4);
/* [String: 'abc']
[ 1, 2, 3, 4 ] */
show.call('abc',1,2,3,4);
/* [String: 'abc']
[ 1, 2, 3, 4 ] */
show.apply('abc',[1,2,3,4]);


/* [String: 'aaaa']
[ 1, 2, 3, 4 ] */
Reflect.apply(show,'aaaa',[1,2,3,4]);


