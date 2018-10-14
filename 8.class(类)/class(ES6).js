class Person{
    constructor(name, age){//构造方法(函数),调用new,自动执行
        //console.log(`构造方法执行了,${name},${age}`);
        this.name = name;
        this.age = age;
    }
    //定义方法
    showName(){
        return `名字为: ${this.name}`;
    }
    showAge(){
        return `年龄: ${this.age}`;
    }
}
let p1 = new Person('Strive',18);
console.log(p1.showName(),p1.showAge());