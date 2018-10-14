let arr = ['a','b','c','a'];//a是重复的

console.log(arr);

console.log('-----------------------');

let setArr = new Set(['a','b','c','a','b']);

setArr.add('e');//xxx.add():往setArr.add  中添加一项

console.log(setArr);//Set { 'a', 'b', 'c','e' }
console.log('------------------');
setArr.delete('b');//删除b项
console.log(setArr);//Set { 'a', 'c', 'e' }

console.log('------------------');
console.log(setArr.has('b'));//false   检查setArr中有没有b项

console.log('-----------------');

console.log(setArr.size);//3  查看个数

//xxx.clear()   清除所有

setArr.clear();

console.log(setArr);//Set {}