//a
arr1 = [1, 2, 3];
arr2 = [4, 5];
const mergedArray = [...arr1, ...arr2];
//b
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
//c
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const { name, address: { city, pin } } = user;