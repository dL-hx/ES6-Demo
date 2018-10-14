//父类
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function(){
    return `名字是:${this.name}`;
}

//子类
function Student(name,skill) {
    Person.call(this,name);//继承属性
    this.skill = skill;
}
Student.prototype = new Person();//继承方法

//调用
let stu1 = new Student('Strive','逃学');
console.log(stu1.name);//Strive
console.log(stu1.showName());//名字是:Strive