let timers = {};
let id = 0;

function mySetInterval(cb, delay) {
  const currentId = ++id;

  function run() {
    timers[currentId] = setTimeout(() => {
      cb();
      run();
    }, delay);
  }

  run();
  return currentId;
}

function myClearInterval(id) {
  clearTimeout(timers[id]);
  delete timers[id];
}