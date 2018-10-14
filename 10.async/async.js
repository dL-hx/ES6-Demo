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
//async
//开始读取

/* 读取结果是
aaaaaaaaaaaa

bbbbbbbbbbbbbbbbb

ccccccccccccccc */
//函数前面加关键字  async  告诉该函数是一个异步的函数
//和async配合的是   await(等一等,结果出来在往下走)
async function fn(){
    try {
        let f1 = await readFile('10.async/data/a.txt');//定义变量f1 接收
        let f2 = await readFile('10.async/data/b.txt');//定义变量f1 接收
        let f3 = await readFile('10.async/data/c.txt');//定义变量f1 接收
    } catch (err) {
        
    }
    
    
    console.log(f1.toString());//打印f1的结果  aaaaaaaaaaaa

    console.log(f2.toString());//打印f1的结果  bbbbbbbbbbbbb

    console.log(f3.toString());//打印f1的结果  ccccccccccccccc
}
fn();//调用函数