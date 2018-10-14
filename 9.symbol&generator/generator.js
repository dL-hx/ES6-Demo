function * gen(){//生成器
    yield 'welcome';//生成'welcome'
    yield 'to';
    return '牧马人';//返回'牧马人'
}

let g1 = gen();
console.log(g1);//Object [Generator] {}
console.log(g1.next());//{ value: 'welcome', done: false }false 表示后面还有信息
console.log(g1.next());//{ value: 'to', done: false }
console.log(g1.next());//{ value: '牧马人', done: true } true  完成了后面已经没有东西了