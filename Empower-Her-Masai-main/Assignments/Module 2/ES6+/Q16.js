// a
const isEven = (n) => n % 2 === 0;
console.log(`Is 4 even? ${isEven(4)}`);
console.log(`Is 7 even? ${isEven(7)}`); 
//b
const marks = 40;
const result = (marks >= 35) ? "Pass" : "Fail";
console.log(`With marks of ${marks}, the result is: ${result}`); // Pass
//c
const greet = (name) => {
    const display_name = (name) ? name : "Guest";
    console.log(`Hello, ${display_name}`);
};
greet("Joshitha");
