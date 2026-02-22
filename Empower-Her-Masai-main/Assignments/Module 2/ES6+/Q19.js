//1

//a 
let a = 5;
let b = 7;
console.log(`${a} + ${b} = ${a + b}`);

//b
const multiLineString = `This is the first line
This is the second line
This is the third line`;
console.log(multiLineString);

//c
let firstName = "Joshitha";
let lastName = "Ganagalla";
console.log(`${firstName} ${lastName}`);

//2

//a
const square = (n) => n * n;
console.log(square(5));

//b
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();

//c
const obj2 = {
  value: 50,
  test: function() {
    console.log(this.value);
  }
};
obj2.test();

//3

//a
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };
console.log(productCopy);

//b
const a1 = { x: 1 };
const b1 = { y: 2 };
const merged = { ...a1, ...b1 };
console.log(merged);

//c
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(3, 5, 7, 2));

//4

//a
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

//b
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

//c
const info = {};
console.log(info?.name);

//5

//a
for (var i = 0; i < 3; i++) {}
console.log(i);

//b
for (let j = 0; j < 3; j++) {}
console.log(j);

//c
let speed;
let kmph = 70;
speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

//d
const age = 19;
console.log(age >= 18 ? "Adult" : "Minor");

//6

//a
const num = 0;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");

//b
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

//c
const a2 = ["x", "y"];
const b2 = ["z"];
const combined = [...a2, ...b2];
console.log(combined);

//d
const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));

//7

//a
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id, status);

//b
const id1 = 101;
const role = "admin";
const user2 = { id: id1, role: role };
console.log(user2);

//c
const id2 = 102;
const role2 = "user";
const user3 = {
  id: id2,
  role: role2,
  greet() {
    console.log("Hello!");
  }
};
console.log(user3);
user3.greet();

//8

console.log(`Today's date is: ${new Date().toDateString()}`);

const name = "John";
const score = 85;
console.log(`Hello ${name}, your score is ${score}/100`);

const add = (x, y) => x + y;
console.log(add(2, 3));

const isAdult = (age) => age >= 18;
console.log(isAdult(20));

const double = (n) => n * 2;
console.log(double(4));

const arr2 = [1, 2, 3];
const clonedArr = [...arr2];
console.log(clonedArr);

const arr3 = [2, 3, 4];
const updatedArr = [100, ...arr3];
console.log(updatedArr);

const obj1 = { name: "Pen", price: 10 };
const obj2 = { price: 12 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

const user4 = { name: "Alex", address: { city: "Bangalore" } };
console.log(user4?.address?.city);

const user5 = { name: "Alex", job: {} };
console.log(user5?.job?.title);

const user6 = null;
console.log(user6?.address?.city);

//9

console.log(`Today's date is: ${new Date().toDateString()}`);

const user7 = { name: "John", score: 85 };
console.log(`Hello ${user7.name}, your score is ${user7.score}/100`);

//10

const add1 = (x, y) => x + y;
console.log(add1(2, 3));

const isAdult1 = (age) => age >= 18;
console.log(isAdult1(20));

const double1 = (n) => n * 2;
console.log(double1(4));

//11

const arr4 = [1, 2, 3];
const clonedArr1 = [...arr4];
console.log(clonedArr1);

const arr5 = [2, 3, 4];
const updatedArr1 = [100, ...arr5];
console.log(updatedArr1);

const obj3 = { name: "Pen", price: 10 };
const obj4 = { price: 12 };
const mergedObj1 = { ...obj3, ...obj4 };
console.log(mergedObj1);

//12

const user8 = { name: "Alex", address: { city: "Bangalore" } };
console.log(user8?.address?.city);

const user9 = { name: "Alex", job: {} };
console.log(user9?.job?.title);

const user10 = null;
console.log(user10?.address?.city);
