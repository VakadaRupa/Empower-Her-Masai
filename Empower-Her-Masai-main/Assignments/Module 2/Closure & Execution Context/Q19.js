let age = 25;
function displayAge() {
  console.log(`Current age (before change): ${age}`);
}
function changeAge() {
  age = 50; 
}
displayAge(); 
changeAge();
console.log(`Updated age (after change): ${age}`); 