// // for loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// } 

// for(let i=1; i<=5;++i){
//     console.log(`outerloop value: ${i}`);
//     for(let j =1;j<=5;j++){
//         console.log(`inner loop value: ${j} and outer value : ${i}`);
//     }
// }

let myArray=["batman","flash","superman"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue
// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`value of i is : ${index}`);
// }


for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log(`Detected 5 it will not get printed in log`);
        continue;
    }
    console.log(`value of i is : ${index}`);
}