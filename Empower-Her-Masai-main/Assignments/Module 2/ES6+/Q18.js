//a
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
console.log(x);
//var y is function/global-scoped, so it's accessible outside the if block and logs 20. let x is block-scoped, so it’s not accessible outside the block, and logging it would error.
//b
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);

//c
const user = {
  name: "Jane Doe"
};
const userAge = user.profile?.age;
console.log(`User age: ${userAge}`);
console.log("The program did not crash.");