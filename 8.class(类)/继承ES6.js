//父类
class Person{
   constructor(name){
       this.name = name;
   } 
   showName(){
       console.log('父类的showName');
       return `名字为:${this.name}`;
   }
}
//子类
class Student extends Person{//继承父类
    constructor(name,skill){
        super(name);//
        this.skill = skill;
    }
    showName(){
        //父级的方法执行
        super.showName();//还想调用父类的showName 使用super.showName
        //做自己的事情
        console.log('子类里的showName');
    }
    showSkill(){
        return `我的技能为:${this.skill}`;
    }
}
let stu1 = new Student('Strive','逃学');
console.log(stu1.showSkill());//我的技能为:逃学
console.log(stu1.showName());//重载 子类里的showName
                                //undefined 因为该函数没有返回值有 undefined