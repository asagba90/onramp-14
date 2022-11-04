/*
let a = 7
let b = -5
let c = a + b
if (c > 5) {
    console.log("I am the new boss in town")
} else{
    console.log("I am the New Bee"); 
}
*/

/*
const variable = 'hello';

if (! typeof variable === 'string') {
  // 👇️ this runs
  console.log('✅ type is string');
} else {
  console.log('⛔️ type is NOT string');
}
*/
/**
 let firstName = "tONY";

console.log(firstName.toUpperCase([0]));
console.log(firstName.toLowerCase([1], [2], [3]));
 */

var numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
  console.log(typeof x)
}

//console.log()