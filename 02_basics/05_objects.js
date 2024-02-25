// Destructuring

const course={
    courseName: " js in hindi",
    price: "999",
    cousreInst: "Hitesh choudhary"
}

// for accessing keys of object we do destructuring of objects and array

const { cousreInst: Instructor}= course;  //here we destructured courseInst into Instructor now we can access Instructor for courseInst
console.log(Instructor);

// jason is an object without name

