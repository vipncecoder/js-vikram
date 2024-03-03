// const user ={
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`); //this specify the current context of attached value with this

//     }
// }
// // console.log(user.welcomeMessage());
// // user.username="vikkram";
// // console.log(user.welcomeMessage());

// console.log(this); // here it will return empty obj

// using this in function

// function chai(){
//     let userName= " Vikram "
//     console.log(this.userName);
// }
// chai(); //this will give undefined as a output

// const chai1 =function(){
//     // let userName=" sam "
//     console.log(this.userName);
// }
// chai1(); //it will also give undefined

// so to overcome this issue we use arrow function if we want to use this in function

const chai2 = () => {
    let username = "hitesh"
    console.log(this);
}
chai2(); // it will also give indefined

// const addTwo= (num1 ,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(3,4));

// another method if we dont want to use return -- if curly bracess then use return otherwise dont use return

// const addTwoo=(num1 ,num2)=> num1+num2
// console.log(addTwoo(3,4));

// if we want to return object then

// const objReturn= ()=> ({ usernm : " vikram"})
// console.log(objReturn());

// immediately invoked function expression IIFE

// here we can wrap funct also can not use function keyword

// named IIFE
// (function aurCode() {
//     console.log(`DB connected`);
// } )();


//unnamed IIFE with argument passing

((name)=>{ // name is argument
    console.log(`vikram is her ${name}`);
})('hitesh'); // here we have to pass value of argument