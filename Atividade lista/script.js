function addTarefas() {
    const taskInput = document.getElementById('taskinput');
    const taskList = document.getElementById('tasklist');

    if (taskInput.value.trim() === '') {
        return;
    }

    const li = document.createElement('li');
    li.className = 'task-item';

    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}