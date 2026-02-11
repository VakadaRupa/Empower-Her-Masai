//Q11
function timer(duration, onComplete) {
  setTimeout(() => {
    const message = `Timer of ${duration} ms finished`;
    onComplete(message);
  }, duration);
}
function handleFinish(message) {
  console.log(`Timer finished! Message received: ${message}`);
}
const timeToWait = 5000; 
console.log(`Starting timer for ${timeToWait} ms...`);
timer(timeToWait, handleFinish);
console.log("Waiting for the timer to complete.");