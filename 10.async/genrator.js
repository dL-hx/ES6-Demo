/* 第二种方式读文件 genrator*/

const fs = require('fs');
//(解决异步的新方式ES2017)
//简单封装  fs封装成一个promise
const readFile = function (fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,data)=>{//文件读取是否失败,失败调用reject
            if (err)  reject(err);//如果错误将具体错误告诉他
            resolve(data);//成功读取data
        })

    })
}
//genrator
//开始读取
function * gen() {
    yield readFile('10.async/data/a.txt');
    yield readFile('10.async/data/b.txt');
    yield readFile('10.async/data/c.txt');
}

let g1 = gen();

g1.next().value.then(res =>{
    console.log(res.toString());//aaaaaaaaaaaa
    return g1.next().value;//返回下一个值
}).then(res =>{
    console.log(res.toString());//bbbbbbbbbbbbbbbbb
    return g1.next().value;//返回下一个值
}).then(res =>{
    console.log(res.toString());//ccccccccccccccc
})