const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number of seconds for countdown: ", (input) => {
  let seconds = parseInt(input);
  if (isNaN(seconds) || seconds <= 0) {
    console.log("Please enter a valid number.");
    rl.close();
    return;
  }

  console.log(`Countdown starting from ${seconds} seconds...`);
  const countdown = setInterval(() => {
    console.log(seconds);
    seconds--;
    if (seconds < 0) {
      clearInterval(countdown);
      console.log("Countdown Complete!");
      rl.close();
      process.exit();
    }
  }, 1000);
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.on("keypress", (str, key) => {
    if (key.name === "s") {
      clearInterval(countdown);
      console.log("Countdown Stopped by User!");
      rl.close();
      process.exit();
    }
    if (key.ctrl && key.name === "c") process.exit();
  });
});
