// 访问一个对象身上的属性
let obj = {
    name : 'Strive'
};
//代理
let newObj = new Proxy(obj,{
    get (target,property){
        // return target[property];

        //property对象在不在目标中target
        if (property in target) {
            return target[property]
        }else{
            //throw new ReferenceError(`${property}属性不在此对象上`);
        console.warn(`${property}属性不在此对象上`);
        return '^_^';
        }
    }
});
console.log(newObj.name);
console.log(newObj.age);