// 例 1 
let a = 1;
let promise = new Promise(function(resolve, reject){
    //resolve 成功调用
    //reject 失败调用
    if (a == 10) {
        resolve('成功');
    } else {
        reject('失败');
    }
});
// promise.then(success,fail);

promise.then(res =>{//成功走这个
    console.log(res);
},err =>{         //失败走这个
    console.log(err);//失败
});

promise.catch(err =>{//reject,发生错误,别名 then()第二个参数err的别名
    console.log(err);//失败
})


//例 2
let a = 1;
let promise = new Promise(function(resolve, reject){
    //resolve 成功调用
    //reject 失败调用
    if (a == 10) {
        resolve('成功');
    } else {
        reject('失败');
    }
});
promise.then(res =>{//成功走这个
    console.log(res);
});

promise.catch(err =>{//reject,发生错误,别名 then()第二个参数err的别名
    console.log(err);//失败
})

//例 3
let a = 1;
let promise = new Promise(function(resolve, reject){
    //resolve 成功调用
    //reject 失败调用
    if (a == 10) {
        resolve('成功');
    } else {
        reject('失败');
    }
});
promise.then(res =>{//成功走这个
    console.log(res);
}).catch(err =>{
    console.log(err);//失败
});

//resolve
let p1 = Promise.resolve('aaa');
p1.then(res =>{
    console.log(res);//aaa
})


//等价于
let p1 = new Promise(resolve =>{
    resolve('aaa');
});

p1.then(res =>{
    console.log(res);//aaa
});

//reject
let p1 = Promise.reject('aaa');//第一句告诉promise是错误的
p1.then(res =>{
    console.log(res);
}).catch(err => {
    console.log(res);//aaa程序从这走
})


/* Promise.all 对promise对象打包,打包完还是promise对象*/
let p1 = Promise.resolve('aaa');
let p2 = Promise.resolve('bbb');
let p3 = Promise.resolve('ccc');

Promise.all([p1,p2,p3]).then(res =>{
    //console.log(res);//[ 'aaa', 'bbb', 'ccc' ]

    //使用解构
    let [res1,res2,res3] = res;
    console.log(res1,res2,res3);//aaa bbb ccc
})

/*  */
/* Promise.race 对promise对象打包,打包完还是promise对象*/
let p1 = Promise.reject('aaa');
let p2 = Promise.resolve('bbb');
let p3 = Promise.resolve('ccc');

Promise.race([p1,p2,p3]).then(res =>{
    console.log(res);
}).catch(err =>{
    console.log(err);//aaa    第一个错误
})

// 与ajax配合的一个实例
//在浏览器运行

let status = 1;
let userLogin = (resolve,reject)=>{
    setTimeout(() => {
        if (status ==1) {
            resolve({data:'登录成功',msg:'xxx',token:'xxxxxx'});
        } else {
            reject('失败了');
        }
    }, 2000);
};
let getUserInfo = (resolve,reject)=>{
    setTimeout(() => {
        if (status ==1) {
            resolve({data:'获取用户信息成功',msg:'scscs',token:'ssss'});
        } else {
            reject('失败了');
        }
    }, 1000);
};
//将以上串起来  使用 Promise
new Promise(userLogin).then(res =>{
    //console.log(res);
    console.log('用户登陆成功');
    return new Promise(getUserInfo);
}).then(res =>{
    console.log('获取用户信息成功');
    console.log(res);
});