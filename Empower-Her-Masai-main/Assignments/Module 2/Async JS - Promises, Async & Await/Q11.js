//Q11
function displayMessage(name) {
  console.log(`Hello, ${name}!`);
}
function getUserInput(callback) {
  console.log("Fetching username...");
  setTimeout(() => {
    const username = "Alice";
    callback(username);
  }, 1000);
}
getUserInput(displayMessage);