function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('todo-list');

    const newTaskText = newTaskInput.value;
    if (newTaskText.trim() !== '') {
        const newTaskElement = document.createElement('li');
        newTaskElement.textContent = newTaskText;
        taskList.appendChild(newTaskElement);
        newTaskInput.value = '';
    }
}
