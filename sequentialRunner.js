async function runSequential(tasks, delay) {
  const results = [];

  for (let task of tasks) {
    const res = await task();
    results.push(res);
    await new Promise(r => setTimeout(r, delay));
  }

  return results;
}