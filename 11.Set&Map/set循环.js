let setArr = new Set(['a','b','c','d']);
/* 
a
b
c
d
 */
for(let item of setArr){
    console.log(item);
}





/* key()&values() */
/*
[Running] node "c:\Users\Lenovo\Desktop\day01-es6\11.Set&Map\tempCodeRunnerFile.js"
a
b
c
d
-------------------------
a
b
c
d
-------------------------
[ 'a', 'a' ]
[ 'b', 'b' ]
[ 'c', 'c' ]
[ 'd', 'd' ]
-------------------------
a a
b b
c c
d d */
let setArr = new Set(['a','b','c','d']);

for (let item of setArr.keys()) {
    console.log(item);
}
console.log('-------------------------');

for (let item of setArr.values()) {
    console.log(item);
}
console.log('-------------------------');
for (let item of setArr.entries()) {
    console.log(item);
}
console.log('-------------------------');
for (let [k, v] of setArr.entries()) {
    console.log(k, v);
}