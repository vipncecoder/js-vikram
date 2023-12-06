const accountId = 112233; //value can't be changed when we use 'const'
let accountEmail = "vik@gmail.com";
var accountPass = "vik@1423"; //we will not use var bcoz it does not know scope so it can be changed anywhere
accountCity = "Pune";  //variable can be declared like this also but not recommended.
// accountId=2123; here this is 'const' so we cant change the value of this accountId
accountEmail = "vikram@gmail.com";
accountPass = "manu@6950";
// console.log(accountId);
let accountState; //it will give undefined if we want to print it

console.table([accountId, accountEmail, accountPass, accountCity, accountState]);  //using this method we can print all variale in form of tables