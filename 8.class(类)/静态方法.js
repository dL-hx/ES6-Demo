/* 如果想要用类去调用使用静态方法
Person.xxx()
static xxx(){

}
 */
class Person{
    constructor(){

    }
    showName(){
        return '这是showName方法';
    }
    //想使用类去调用 加static关键字
    static aaa(){
        return '这是静态方法';
    }
}
let p1 = new Person();
console.log(p1.showName());//这是showName方法
console.log(Person.aaa());//这是静态方法