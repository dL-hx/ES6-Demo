/* 第一种方式读文件 Promise*/

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
//promise
//开始读取
readFile('10.async/data/a.txt').then(res =>{
    //console.log(res);//<Buffer 61 61 61 61 61 61 61 61 61 61 61 61 0d 0a>
    console.log(res.toString());//aaaaaaaaaaaa
    return readFile('10.async/data/b.txt');//返回出去
}).then(res =>{
    console.log(res.toString());//bbbbbbbbbbbbb
    return readFile('10.async/data/c.txt');//返回出去
}).then(res =>{
    console.log(res.toString());//ccccccccccccccc
})