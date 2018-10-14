class Person{
    constructor(){

    }
    get aaa(){//get(aaa属性的)取值函数
        return `aaa的属性`;
    }
    set aaa(val){//set(aaa属性的)函数  设置值val
        console.log(`设置aaa属性,值为${val}`);
    }
}
let p1 = new Person();
p1.aaa = '123';
console.log(p1.aaa);//有get取值函数才能正确