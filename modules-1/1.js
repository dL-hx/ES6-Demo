//第一种写法
/* export const a = 12;//导出模块
export const b = 5;
export let c = 101;
console.log(1111);
 */

// //换一种写法

// const a = 12;
// const b = 5;
// const c = 101;

// export {
//     a,
//     b,
//     c
// }

//别名
const a = 12;
const b = 5;
const c = 101;

export {
    a as aaa,
    b as banana,
    c as cup
}

