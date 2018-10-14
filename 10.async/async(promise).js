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

//async
async function fn() {
    //对应三个结果,使用解构 let [a,b,c]
    //下面的三个文件之间没有关联
    //有关系不要这样用
    let [a,b,c] = await Promise.all([
        readFile('10.async/data/a.txt'),
        readFile('10.async/data/b.txt'),
        readFile('10.async/data/c.txt'),
    ]);

    console.log(a.toString());
    console.log(b.toString());
    console.log(c.toString());
}
/* aaaaaaaaaaaa

bbbbbbbbbbbbbbbbb

ccccccccccccccc */
fn();