//three method to declare objects ---when using literals it will not form singleton--using constructor object will be singleton

//object.create--constructor method to make object

// object literals

// symbol
const mySym= Symbol('key1');

const user={
    name: "vikram",
    age: 18,
    [mySym]: "mykey",//for using symbol we have to declare in []
    location: "delhi",
    emailId: "vikram@gmail.com",
    isLoggedIn: false,
    lastLoggedDays: [ "mon","tue"]

}
//syntax to access object elements
// console.log(user);

// console.log(user.age);
// console.log(user.emailId);
// console.log(user[mySym]);

// we can also change object's keys value and also can freeze object if we do not want to make changes in objects

user.age=44;//it will change the value of age
// console.log(user.age);
// Object.freeze(user);//after this we will not be able to change keys of object
// user.name="kumar"
// console.log(user.name);
// user.age=55;
// console.log(user.age);
// console.log(user);


//function declaration

user.greeting= function(){
    console.log("hello sir");
}
user.greetingTwo=function(){
    console.log(`hello user, ${this.age}`);//this will help to select key of objects
}

console.log(user.greeting); //will give undefined

console.log(user.greeting());//will print function
console.log(user.greetingTwo());




