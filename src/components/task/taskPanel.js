import '../../styles/taskPanel.css';

export function createTaskPanel(task) {
    const panel = document.createElement('div');

    const priorityStripe = document.createElement('div');
    const taskTitleContainer = document.createElement('div');
    const taskDueDateContainer = document.createElement('div');
    const taskCheckboxContainer = document.createElement('div');
    const utilityContainer = document.createElement('div');

    const taskTitle = document.createElement('h3');
    const taskDueDate = document.createElement('span');
    const checkbox = document.createElement('input');

    const detailsButton = document.createElement('button');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    //Assigning properties of elements
    checkbox.type = 'checkbox';

    //Assigning id selectors to panel elements
    panel.id = 'panel-container';
    priorityStripe.id = 'priority-stripe';
    taskTitleContainer.id = 'task-title-container';
    taskDueDateContainer.id = 'task-due-date-container';
    taskCheckboxContainer.id = 'task-checkbox-container';
    utilityContainer.id = 'utility-container';

    //Assigning class selectors to panel elements
    editButton.classList.add('mid');
    priorityStripe.classList.add('high-priority');

    //Appending task attributes to the panel;
    taskTitle.textContent = task.title;
    taskDueDate.textContent = task.dueDate;

    if(task.priority == 'High') {
        priorityStripe.classList.add('high-priority');
    }
    if(task.priority == 'Medium') {
        priorityStripe.classList.add('medium-priority');
    }
    if(task.priority == 'Low') {
        priorityStripe.classList.add('low-priority');
    }

    //Connecting the panel to the task
    panel.dataset.id = task.id;

    //Creating the structure of the panel
    panel.appendChild(priorityStripe);
    panel.appendChild(taskTitleContainer);
    panel.appendChild(taskDueDateContainer);
    panel.appendChild(taskCheckboxContainer);
    panel.appendChild(utilityContainer);

    taskTitleContainer.appendChild(taskTitle);
    taskDueDateContainer.appendChild(taskDueDate);
    taskCheckboxContainer.appendChild(checkbox);

    utilityContainer.appendChild(detailsButton);
    utilityContainer.appendChild(editButton);
    utilityContainer.appendChild(deleteButton);

    return panel;
}