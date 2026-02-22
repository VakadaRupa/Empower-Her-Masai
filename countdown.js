function createCountdown(seconds, onTick, onComplete) {
  let remaining = seconds;
  let end = Date.now() + seconds * 1000;
  let timer;

  function tick() {
    remaining = Math.max(0, Math.round((end - Date.now()) / 1000));
    onTick(remaining);

    if (remaining <= 0) {
      onComplete();
    } else {
      timer = setTimeout(tick, 1000);
    }
  }

  tick();

  return {
    pause() {
      clearTimeout(timer);
      remaining = Math.round((end - Date.now()) / 1000);
    },
    resume() {
      end = Date.now() + remaining * 1000;
      tick();
    }
  };
}