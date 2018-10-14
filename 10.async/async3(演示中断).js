async function fn() {
    await Promise.reject('出现问题了');//出现reject演示中断执行
    let a = await Promise.resolve('success');
    console.log(a);
}
fn().then(res =>{
    console.log(res);
}).catch(err =>{
    console.log(err);//出现问题了
})