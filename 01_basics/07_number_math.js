// const num1= 400;
// console.log(num1);
// const balance= new Number(100);
// console.log(balance);

// const num2=123.423;
// console.log(num2.toPrecision(3));

// const num3=10000000000;
// console.log(num3.toLocaleString('en-IN'));


// // in console of browser we can also see what properties we have associated with strings, number etc
// /*
// function for number
// console.log(balance);
// VM694:1 Number {33}
// [[Prototype]]: Number
// constructor: ƒ Number()
// toExponential: ƒ toExponential()
// toFixed: ƒ toFixed()
// toLocaleString: ƒ toLocaleString()
// toPrecision: ƒ toPrecision()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// [[Prototype]]: Object
// [[PrimitiveValue]]: 0
// [[PrimitiveValue]]: 33

// */

/*  math */

// console.log(Math); //object
// console.log(Math.abs(-4));
// console.log(Math.round(5.4));
// console.log(Math.ceil(5.4));
// console.log(Math.floor(5.4));
// console.log(Math.max(3,4,1,6,5));
// console.log(Math.min(3,6,2,7,8));

console.log(Math.random()); //it will generate different values each time between 0 to 1
// if we need other domain we need to manipulate the query using logic
console.log(Math.ceil(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1))+min);




