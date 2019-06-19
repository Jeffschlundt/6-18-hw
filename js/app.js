// Question 1-
//Interpolation: Inject variables directly into a string (or templates  )
//Example: (rewriten from an example on Stack Overflow )
// const age = 3; 
// console.log (`I am ${age} years old!`); 
// (notice the back ticks)
//Concatanation: Joining (or glueing) two string together
//Example: (rewritten from w3school.com)
// const str1 = "Hello"
// const str2 = "World!"
// const res = str1.concat(str1 + ' ' + strg 2); 

// Question 2-
// D.R.Y stands for 'Don't Repeat Yourself.' You can use loops to not repeat yourself

//Question 3-
// Delaring a variable states its type and name
//defining a variable states its value

//Question 4- Most of the time (like 95% in this class) you use const becase they 
//run safer and less buggy code becase they canot be redefined (but they can mutate).  Use let when
// something needs to be redined and mutable.

//Question 5- A parent directory- a folder that is one level up from the current
// file. 

//Question 6- Unix Command- Use the term 'man' with any command to see a truly 
//exhustive user manuel

//Question 7- Tab Completion: Instead of writing the entire name of an
// onerous file or directory name, one can simply type a few letter of 
// the name and push tab to complete writing out the name. 

// Part 2
/*
const a = 4; 
const b = 53;
const c = 57; 
const d = 16;
const e = "Kevin"; 
console.log(48 == '48'); 
*/

//1) !=
//2) >
//3) ==
//4) != !=
//5) === !=
//6) ==
//7) ==

//Part 3

//1) Yes, this is an infinte loop, because while it does not have a 
// 'stop' or 'false' parameter. There is no 'off switch'
//2) Yes this is because while someone tried to reassign const, 
// it cannot be read. 
//3) So I honestly had no idea what to expect from this code. I know 
// i++ would increase incrementaly, but I'm not sure that that mean with 
// a string. If there was an array for string, would that concatenate
// strings?
/*
let letters = "A"; 
let i = 0; 

while (i < 20) {
	letters +- "A"; 
	i++; 
}
console.log(letters); 
*/

//Part 4

//1) The while loops excutes the function as long as the parameters 
// are true. For loops are self contained and usually self incrementing 
// a shut off is set. 
//2)
/*
 for ( let i = 0; i <= 999; i++){
 	console.log(` The number is ${i}`)
 }
*/
//3) A) The first part of the control statement assigns initial value
//   B) The second part of the control statement assignes the end value
//   C) The third part of the control state is the iterator, it tells 
//      how to iterate
//4) 
for (let i = 999; i <=0; i--){
	console.log(` The number is ${i}`); 
}
