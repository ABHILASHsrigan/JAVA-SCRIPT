
function addTask() {
    const taskText = document.getElementById('taskInput').value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    const currentTime = new Date();
    const timeString = currentTime.toLocaleTimeString();


