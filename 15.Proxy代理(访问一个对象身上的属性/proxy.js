let obj = {
    name:'Strive'
};
//访问之前代理
let newObj = new Proxy(obj,{
    get(target,property){
        //console.log(target,property);
        //TODO
        console.log(`您访问了${property}属性`);
        return target[property];
    }
});
console.log(newObj.name);