//将数组的二倍复制到另一个数组
let set = new Set([1,2,3]);
let set2 = new Set();

for (let value of set.values()) {
    set2.add(value*2);
}
console.log(set2);//Set { 2, 4, 6 }

/* 另一种写法 set中使用Map(对数组进行处理)进行优化  */

let set = new Set([1,2,3]);
set = new Set([...set].map(val =>val*2));

console.log(set);//Set { 2, 4, 6 }