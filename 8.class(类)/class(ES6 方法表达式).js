let aaa = 'strive';
let bbb = 'method';
class Person{
   [aaa + bbb](){
       return '随便了...'
   }
}
let p1 = new Person('Strive',18);
console.log(p1[aaa + bbb]());//随便了
//等同于
//console.log(p1.strivemethod());