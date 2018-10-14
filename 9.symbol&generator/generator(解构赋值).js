function * gen(){//生成器
    yield 'welcome';//生成'welcome'
    yield 'to';
    return '牧马人';//返回'牧马人'
}
let [a, b, c] = gen();
console.log(a, b, c);//welcome to undefined

//配合扩展运算符
function * gen(){//生成器
    yield 'welcome';//生成'welcome'
    yield 'to';
    return '牧马人';//返回'牧马人'
}
let [a,...b] = gen();
console.log(a, b);//welcome [ 'to' ]



function * gen(){//生成器
    yield 'welcome';//生成'welcome'
    yield 'to';
    return '牧马人';//返回'牧马人'
}
console.log(...gen());//welcome to

//Array.from  将其合并到数组中
function * gen(){//生成器
    yield 'welcome';//生成'welcome'
    yield 'to';
    return '牧马人';//返回'牧马人'
}
console.log(Array.from(gen()));//[ 'welcome', 'to' ]