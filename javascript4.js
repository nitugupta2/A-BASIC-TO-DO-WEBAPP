document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const pendingTasks = document.getElementById('pendingTasks');
    const completedTasks = document.getElementById('completedTasks');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const task = document.createElement('li');
        task.textContent = taskText;
        taskInput.value = '';

        const actions = document.createElement('div');
        actions.classList.add('actions');

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', function() {
            task.classList.add('completed');
            completedTasks.appendChild(task);
            task.removeChild(actions);
            task.appendChild(deleteButton);
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            task.remove();
        });

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            const newTaskText = prompt('Edit your task:', task.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                task.textContent = newTaskText;
                task.appendChild(actions);
            }
        });

        actions.appendChild(completeButton);
        actions.appendChild(editButton);
        actions.appendChild(deleteButton);
        task.appendChild(actions);

        pendingTasks.appendChild(task);
    }
});
