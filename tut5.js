//type conversion & coercion
// Type conversion 
console.log('Welcome to tut5');
let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));
let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
console.log(date, (typeof date));

let arr =  String([1,2,3,4,5]);
console.log(arr.length, (typeof arr));

let i = 75;
console.log(i.toString())

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
console.log(stri, (typeof stri));

let number = parseFloat('34.098');


console.log(number.toFixed(2), (typeof number));

// Type coercion

let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);




let res;
// string to number
res = Number('100');
console.log(res); // 100
// boolean to number
res = Number(false);
console.log(res); // 0
res = Number(' ')
console.log(res); // 0
res = Number('hello');
console.log(res); // NaN
res = Number(undefined);
console.log(res); // NaN

/*res=Boolean(1); // true
res= Boolean(0); // false
res= Boolean("hello"); // true
res= Boolean(""); // false

let res
let a=90
res= String(a) // returns a string from a number variable a
String(378009) // returns a string from a number literal 378009
a.toString() 
(378009).toString()*/

console.log( parseInt('$100 dollars') ); // NaN
console.log( parseInt('+10.25990 kg') ); // 10
console.log( parseFloat(' +10.25 kg') ); // 10.25
console.log( parseFloat('ABC’) ); //NaN

let res;
res = '3' + 4; 
console.log(res) // "34"
res = '9' + true; 
console.log(res); // "9true"
res= '0' + null; 
console.log(res); // "0null"

let res
res = '4' - '4'; 
console.log(res); // 0
res = '4' * 5;
console.log(res); // 20

let res;
res = '5' - true;
console.log(res); // 4
res = 10 + false;
console.log(res); // 10

res = 4 + null; // 4
res = 4 - undefined;// NaN

