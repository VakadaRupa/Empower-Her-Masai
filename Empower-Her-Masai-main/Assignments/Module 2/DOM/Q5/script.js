
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim(); 
  if (taskText === '') {
    alert('Please enter a task!');
    return; 
  }
  const li = document.createElement('li');
  li.classList.add('task-item');

  const textNode = document.createTextNode(taskText);
  li.appendChild(textNode);

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.classList.add('btn-complete');
  completeButton.addEventListener('click', () => {
    li.classList.toggle('completed'); 
  });
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('btn-delete');
  deleteButton.addEventListener('click', () => {
    li.remove(); 
  });

  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  taskList.appendChild(li);
  taskInput.value = '';
});
