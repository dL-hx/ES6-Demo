let str = '2018-03-20';
let reg = /(\d{4})-(\d{2})-(\d{2})/;

let dateArr = str.match(reg);
let year = dateArr[1];
let month = dateArr[2];
let day = dateArr[3];
//2018 03 20
console.log(year, month,day);

//命名捕获
let str = '2018-03-20';
let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
//console.log(str.match(reg).groups);//{ year: '2018', month: '03', day: '20' }
//得到这样的json开始解构
let {year,month,day}= str.match(reg).groups;
console.log(year,month,day);//2018 03 20
