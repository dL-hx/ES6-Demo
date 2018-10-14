async function fn() {
    try{
        await Promise.reject('出现问题了');
    }catch(e){}
    
    let a = await Promise.resolve('success');
    console.log(a);
}

fn().then(res =>{
    console.log(res);
}).catch(err =>{
    console.log(err);
})