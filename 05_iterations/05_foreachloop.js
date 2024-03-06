const coding=[ "js","cpp","py","ruby"];

// ways to iterate array using forEach loop

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

// if we tag a var for foreach it will not store anything in that variable

//   Filter

const myNum=[1,2,3,4,5,6,7,8,9,10];
// const newNums= myNum.filter((myNum)=>{   //filter takes call back function and can return values
//     return myNum>4;     //here use of return is must 
// })

// console.log(newNums);

// if we wanted to do the same we can use foreach loop as below

// const newNums=[];
// myNum.forEach((myNum)=>{
//     if(myNum>4){
//         newNums.push(myNum+2);
//         // newNums.pop(myNum);
//     }
// })

// console.log(newNums);

// map

// const number= myNum.map((num) => { return num+10})
// console.log(number);

// chaining of function

const newNum= myNum.map((num)=> num*10).map((num)=> num+1).filter((num)=> num>50);
// console.log(newNum);

// reduce

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

// console.log(sumWithInitial);
// Expected output: 10

const shoppingCart= [
    {
        itemName : "js courese",
        price :2999
    },
    {
        itemName : "python courese",
        price :3999
    },
    {
        itemName : "java courese",
        price :4999
    },
    {
        itemName : "data science courese",
        price :12999
    }
]

const priceToPay= shoppingCart.reduce((acc, item)=> acc+item.price,0);
console.log(priceToPay);