// const tinderuser = new Object(); -singleton object

const tinderuser ={};    // non singleton object
tinderuser.id ="123qwe";
tinderuser.name="vikram";
tinderuser.isLoggedin= false;

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isLoggedOn'));

const regularUser= {
    email: "some.gmail.com",
    fullName:{
        userFullName:{
      firstName: "vikram",
    //   lastName: "kumar"
    }
}
}

// console.log(regularUser.fullName.userFullName.lastName);

obj1={1:"a",2:"b"};
obj2={3:"d",4:"v"};
obj3= {obj1,obj2};
// console.log(obj3); //here we face a problem that both array will not merge just will come inside obj3 as individual objects
// const obj4 = Object.assign({} , obj1, obj2); // we give {} this for to get new obj in this empty obj because first object in the syntax is target object in whic all other obj will merge

// console.log(obj4);

// other method to merge

const obj5={...obj1, ...obj2};
// console.log(obj5);