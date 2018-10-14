async function fn() {
    return 'welcome';
}
console.log(fn());//Promise { 'welcome' }

async function fn() {
    return 'welcome';
}
fn().then(res =>{//成功的结果是welcome
    console.log(res);
})

async function fn() {
    throw new Error('出错了');//抛出错误  '出错了'
}
fn().then(res =>{//成功了
    console.log(res);
},err =>{//第二个参数失败了    程序走这里
    console.log(err);//用来捕获参数

})


async function fn() {
    throw new Error('出错了');//抛出错误  '出错了'
}
fn().then(res =>{//成功了
    console.log(res);
}).catch(err =>{
    console.log(err);
})