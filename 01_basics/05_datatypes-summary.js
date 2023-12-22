/* Datatypes 
1)Primtives
7 types: String,Number,Boolean,null(empty),undefined(value not defined but variable declared and also memory allocated),Symbol,BigInt(big values ,scientif big values)
*/
// example
const score=100;
const scoreValue= 100.32;
const isLoggingIn=false;
const outTemp= null;
let userEmail; // will give undefined

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);

const BigNUmber=2422532535353n;
/*
2)Reference type datatype(Non Primitive)
--Array, Objects, Functions

JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
*/
//array
const heros=["shaktiman" ,"nagraj"];
//object
let myInfo={
    name: "vikram",
    age: "24"
}
//function
const myFunction=function(){
    console.log("hello world");
}

// functioncall
console.log(myFunction());
console.log(typeof(myFunction)); //object function

//to find datatype use function typeOf(operator or variable name);
console.log(typeof(null)); //object

//************************************************

//Stack--- (primitive type) , Heap--(non primitive type) 
let myYoutubeName="vikramcode";   //variable myYoutubeName will go in stack
let anotherName= myYoutubeName; 
anotherName="vickycode"   
console.log(myYoutubeName);
console.log(anotherName);

let userOne={
    email: "user@gmail.com", //it will go intoo heap
    upi: "vicky@ybl"
}

let userTwo =userOne;   //userTwo will take data from heap using userOne reference
userTwo.email="vikram@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);



