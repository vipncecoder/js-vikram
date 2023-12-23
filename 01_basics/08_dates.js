// Dates

// let myDates= new Date();
// console.log(myDates);
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toISOString());
// console.log(typeof myDates); //object 

// let myCreateDate= new Date(2023, 12, 23);
// let myCreateDate= new Date("2023-12-24");
let myCreateDate=new Date("12-24-2023");
console.log(myCreateDate.toDateString());

let myTimeStamp= Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime()); //output time will come in mili second
console.log(Math.floor(Date.now()/1000)); //it wil five decimal value also so remove that use ceil or floor


let newDate= new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());


