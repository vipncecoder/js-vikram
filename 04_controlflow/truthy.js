// const name= "vikram";
// if (name){
//     console.log("name is present");
// }else{
//     console.log("dont have the name");
// }

// falsy value-- false, 0, -0, BigInt 0n, "", null, undefined, NaN, ''']

// truthy value-- "0", 'false', " ", [], {}, function(){}
const emptyObj={};
if(Object.keys(emptyObj).length === 0){  //Object.keys() returns an array
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val;
// val =5 ?? 10; // if we do console log we will get 5 if at the place of 5 it is null or undefined then 10 will come as an output
val= null ?? null ?? 15; // here 15 will come means first value will come after null or undefined in the log
console.log(val);

// ternary operator

// condition ? true : false

const iceTeaPrice=100;
iceTeaPrice>=80 ? console.log("grater than 80"): console.log("less than 80");;