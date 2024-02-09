import '../../styles/taskPanel.css';
import { createTaskDeleteDialog } from '../dialogs/taskDeleteDialog';
import { createTaskDetailsDialog } from '../dialogs/taskDetailsDialog';
import { createEditTaskDialog } from '../dialogs/taskEditDialog';


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
    detailsButton.classList.add('top');
    deleteButton.classList.add('bottom');

    //Appending task attributes to the panel;
    taskTitle.textContent = task.title;
    taskDueDate.textContent = task.dueDate;

    if(task.priority == 'High') {
        priorityStripe.style.backgroundColor = 'var(--high-priority-color)';
    }
    if(task.priority == 'Medium') {
        priorityStripe.style.backgroundColor = 'var(--medium-priority-color)';
    }
    if(task.priority == 'Low') {
        priorityStripe.style.backgroundColor = 'var(--low-priority-color)';
    }

    //Connecting the panel to the task
    panel.dataset.id = task.id;

    //Attaching event listeners to the utility buttons
    detailsButton.addEventListener('click', () => {
        const taskDetailsDialog = createTaskDetailsDialog(task);
        document.body.appendChild(taskDetailsDialog);
        
        taskDetailsDialog.showModal();
    });

    editButton.addEventListener('click', () => {
        const editTaskDialog = createEditTaskDialog(task);
        document.body.appendChild(editTaskDialog);

        editTaskDialog.showModal();
    });

    deleteButton.addEventListener('click', () => {
        const deleteTaskDialog = createTaskDeleteDialog(task);
        document.body.appendChild(deleteTaskDialog);

        deleteTaskDialog.showModal();
    });

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
