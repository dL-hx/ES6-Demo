function * gen(){//生成器
    yield 'welcome';//生成'welcome'
    yield 'to';
    return '牧马人';//返回'牧马人'
}
/**
 * 
 * Object [Generator] {}
   welcome
   to
 */
let g1 = gen();
console.log(g1);//Object [Generator] {}
for (let val of g1) {
    console.log(val);//return 的东西,它不会遍历
}

