function addTask(tasks, task) {
  tasks.push(task);
  console.log(`Task "${task}" added!`);
}

function listTasks(tasks) {
  console.log(tasks);
}
module.exports = { addTask, listTasks };
