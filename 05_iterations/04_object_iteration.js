const myObject={
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

// forin loop -- map is not iteratable using for in loop but we can iterate array and object 

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for : ${myObject[key]}`);
// }

// const programming= ["js", "rb", "py", "java", "swift"];
// for (const key in programming) {
//     console.log(programming[key]);
// }

const map=new Map();
map.set('IN', "India")
map.set('USA', "United State of America");
map.set('Fr', "France");
map.set('IN', "India");

for (const key in map) {
    console.log(key);
}