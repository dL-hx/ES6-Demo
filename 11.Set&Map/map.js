let map = new Map();
let json = {
    a:1,
    b:2
};
/* Map {
    'a' => 'aaa',
    { a: 1, b: 2 } => 'aaa',
    'aaa' => { a: 1, b: 2 } } */
//set()方法 给Map对象添加key和value。
map.set('a','aaa');//正常

map.set(json,'aaa');

map.set('aaa',json);

//循环
/*    
    for(let [key,value] of map){
        console.log(key, value);
    }
 */

map.forEach((value,key) =>{
    console.log(value,key);
})
console.log(map.get(json));

console.log(map.get('aaa'));

map.delete('aaa');

console.log(map.get('aaa'));

console.log(map.has('aaa'));

console.log(map);

map.clear();//清空了删除了所有

console.log(map);

