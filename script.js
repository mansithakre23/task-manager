
let taskList = [];

function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task === "") return alert("Please enter a task!");

  taskList.push({ name: task, completed: false });
  input.value = '';
  renderTasks();
}

function toggleTask(index) {
  taskList[index].completed = !taskList[index].completed;
  renderTasks();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const ul = document.getElementById('taskList');
  ul.innerHTML = '';
  taskList.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
      <span onclick="toggleTask(${index})">${task.name}</span>
      <button onclick="deleteTask(${index})" 
        style="background:#dc3545;color:white;border:none;
        padding:5px 10px;border-radius:5px;cursor:pointer;">Delete</button>
    `;
    ul.appendChild(li);
  });
  updateProgress();
}

function updateProgress() {
  const completedTasks = taskList.filter(task => task.completed).length;
  const totalTasks = taskList.length;
  const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const progressBar = document.getElementById('progressBar');
  progressBar.style.width = progress + '%';
  document.getElementById('progressText').innerText = progress + '% Completed';
}
