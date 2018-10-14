/**
 * 模板字符串
 * 
 * 打印如下文本
 * "zfpx"今年9岁了
 */

let name = 'zfpx';
let age = 9;


// let str = "\"" + name + "\"" + '今年' + age + '岁了';
// console.log(str);

let str = `\` "${name}"\`今年${age}岁了`
console.log(str);

//模板字符串可以换行

let str = "<ul>\r\n\
    <li>张三</li>\r\n\
    <li>李四</li>\r\n\
</ul>"
console.log(str);

let str = `<ul>
    <li>张三</li>
    <li>李四</li>
</ul>`
console.log(str);

//带标签的模板字符串

//[例1]
//
let name = 'zfpx';
let age = 9;
function greet(arg1, arg2, arg3) {
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
}
//下面两句代码等价
// 普通函数
//greet(["I'm ", ". I'm ", " years old."], name, age)

// tag 函数
greet`I'm ${name}. I'm ${age} years old.`

//[例3]
let name = 'zfpx';
let age = 'ninth';

let str = `${name.toUpperCase()}今年${age.toUpperCase()}岁了`;
console.log(str);



let name = 'zfpx';
let age = '9';
function tag(strings) {
    console.log(strings);
    let args = Array.prototype.slice.call(arguments,1);//去掉传入数组的第一给空值
    console.log(args);
    let str = '';
    for (let i = 0; i < args.length; i++) {
        str += (strings[i] + args[i].toString().toUpperCase());
    }
    str += strings[strings.length - 1];
    return str;
}
let str = tag `${name}今年${age}岁了`;
console.log(str);

//字符串的常见方法
let str =  'zfpxjwzpfx';
console.log(str.includes('jw'));
//true

let url = 'https://www.baidu.com';
console.log(url.startsWith('https'));
//true

let avatar = '1.png';
console.log(avatar.endsWith('.png'));
//true

let date = new Date();
let hour = date.getHours().toString();
let m = date.getMinutes().toString();
let s = date.getSeconds() .toString();

//拼成字符串
//padEnd 和padStart 是补位操作  不足两位在前面或后面补0
let result = `${hour.padEnd(2,0)}:${m.padStart(2,0)}:${s.padStart(2,0)}`;
console.log(result);