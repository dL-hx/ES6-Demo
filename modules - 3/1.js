// const a = 12;
// const b = 5;
import {a,b} from '../modules-2/2.js'
const sum = () => {
    console.log(a + b);
    return a + b;
}

const show = () =>{
    console.log("执行了show");
    return 1;
}

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        return `我的名字是${this.name}`;
    }
}

export{
    a,
    b,
    sum,
    show
}
export default {
    Person
}