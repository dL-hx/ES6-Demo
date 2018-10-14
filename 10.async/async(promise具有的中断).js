async function fn() {
    await Promise.reject('出现问题了').catch(err =>{
        console.log(err);
    });

    let a = await Promise.resolve('success');
    console.log(a);
}

fn().then(res =>{
    console.log(res);
})