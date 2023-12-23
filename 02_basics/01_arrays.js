//Array
// please refer for more info on array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr= [3,4,22,424,true,"vikram"];
console.log(myArr);


//Array method

myArr.push(7)  //will add this at the end
console.log(myArr);

myArr.pop(); //it will simply remove last element from array
myArr.pop();
console.log(myArr);

myArr.unshift(9);  // it will add element in the starting of array
console.log(myArr);

myArr.shift() // it will delete element from starting
console.log(myArr);

console.log(myArr.includes(7)); //it will give boolean value acc to value present in array or not
console.log(myArr.indexOf(1));//will give "-1" if element is not present

const newArray= myArr.join(); //join will bind the array and will change array into string
console.log(myArr);
console.log(newArray); 

//slice , splice

console.log("A", myArr);
const myn1=myArr.slice(1,3); //it will print value excluding index 3
console.log(myn1);
console.log("B", myArr);

const myn2= myArr.splice(1,3); //it will print value from 1 to 3 including 3rd indexed value and also change the original array
console.log("C", myn2);
console.log("D", myArr);
