let marvel_heros= [ 'iron man','thor','spiderman'];
let dc_Heros=['superman' , 'flash','batman'];

// marvel_heros.push(dc_Heros);
// console.log(marvel_heros);

// const allHeros= marvel_heros.concat(dc_Heros);
// console.log(allHeros);

// other method to concat
// const all_New_Heros=[...marvel_heros,...dc_Heros];//it is called spread operator
// console.log(all_New_Heros);

const anotherArray= [1,2,3,[4,5,6],7,[8,9,[10,11]]];//flat will make a single array
const usable_Array=anotherArray.flat(1);//at the place of infinity we should give depth till how much we want to flat
console.log(usable_Array);

console.log(Array.isArray("VikramKumar"));//it will give true or false according array is present or not
console.log(Array.from('VikramKumar'));//it will make array of string passed in the function
console.log(Array.from({name: 'vikram'})); // will make empty array

let score1=100;
let score2=200;
let score3=300;

//if we want to make array of these score will use below code
console.log(Array.of(score1,score2,score3));
