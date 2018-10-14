let syml = Symbol('aaa');

console.log(syml);//Symbol(aaa)

console.log(typeof syml);//数据类型 symbol

//变量可以作为表达式

let symbol = Symbol('Strive');

let json = {
    a:'apple',
    b:'banana',
    [symbol]:'aaa'
}
for(let key in json){
    console.log(key);//a  b
    //如果symbol作为key,用for in循环出不来
}
