let tasks = [];

// Load tasks from local storage on page load
window.onload = function() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
    }
};

function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const taskName = document.getElementById('taskName').value;
    const priority = document.getElementById('priority').value;

    if (taskName.trim() === '') {
        alert('Please enter a task name.');
        return;
    }

    const task = {
        id: Date.now(),
        name: taskName,
        priority: priority
    };

    tasks.push(task);
    saveTasksToLocalStorage(); // Save to local storage
    document.getElementById('taskName').value = '';
    renderTasks();
}

function renderTasks(filteredTasks = tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    filteredTasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
            <strong>${task.name}</strong> - Priority: ${task.priority}
            <br>
            <button onclick="editTask(${task.id})">Edit</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(taskDiv);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasksToLocalStorage(); // Save to local storage
    renderTasks();
}

function editTask(id) {
    const newName = prompt('Enter new task name:');
    if (newName) {
        tasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, name: newName };
            }
            return task;
        });
        saveTasksToLocalStorage(); // Save to local storage
        renderTasks();
    }
}

function filterTasks() {
    const selectedPriority = document.getElementById('filter').value;
    if (selectedPriority === 'All') {
        renderTasks();
    } else {
        const filtered = tasks.filter(task => task.priority === selectedPriority);
        renderTasks(filtered);
    }
}
