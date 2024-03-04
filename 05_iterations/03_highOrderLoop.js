// for of

// ["", "", ""]
// [{},{},{}]

// for (const iterator of object) { // at the place of Object we have to place element on which we have to run loop
                                    // iterator is variable we have to define
// }

// const arr=[1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
// }


// const greetings="Hello World";
// for (const greet of greetings) {
//     console.log(`Each character is : ${greet}`);
// }

// maps

const map=new Map();
map.set('IN', "India")
map.set('USA', "United State of America");
map.set('Fr', "France");
map.set('IN', "India");
// console.log(map);

//below for of loop can't be used for object 
for(const [key, value] of map){
    // console.log(key, ':-', value);
}

const myObject={
    game1 : 'pubg',
    game2 : 'IGI'
}

for (const [key ,value] of myObject) { //Object is not iteratable using forof
    // console.log(key, ':-', value);     // TypeError: myObject is not iterable
} 
