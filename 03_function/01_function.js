// function declaration

// function function_name(){}

// function calling
// function_name();

function sayMyName() {
    console.log("hi my name is vikram");
}

// sayMyName();

// function using parameters

function sumTwoNum(number1, number2){ //here number1 and number2 is called parameter
    result= number1+number2;
    // console.log(result);  //by using this we will get undefined value when will call this function

    return result;  // if we do not return then this function will not return the output or sum
}

// console.log(sumTwoNum(4,4)); //here will retun undefined if we don not return in the function
// sumTwoNum(4,4); //here provided number is called argument

function loggegIn(username){ //(username = " sam ")  -- this will set the default value of username so undefined case is gone
    // to avoid error of undefined we can simply use conditional statement
    if(username === undefined){ //if(!username) --this we can use also
        console.log("Please provide username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loggegIn()); //if we do not pass any argument it will return undefined at the place of username

// passing object keys as function parameter
const user = {
    username1: "vikram",
    price : 999
}

function handleObject(anyObject){
    console.log(` username ${anyObject.username1} is buying item worth ${anyObject.price}`)
}

// (handleObject(user));

// we can pass object directly 

// handleObject({
//     username1: "sam",
//     price:999
// });

// we can pass array in function as parameter also 

const newArray= [3,4,5];
function returnArrayValue(getArray){
    return getArray[1];
}

// console.log(returnArrayValue(newArray));

// we can pass whole array also

console.log(returnArrayValue([400,500,600]));

