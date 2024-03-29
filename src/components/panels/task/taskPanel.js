import './taskPanel.css';
import { createTaskDeleteDialog } from '../../dialogs/task/delete/taskDeleteDialog';
import { createTaskDetailsDialog } from '../../dialogs/task/details/taskDetailsDialog';
import { createEditTaskDialog } from '../../dialogs/task/edit/editTaskDialog';
import { getStorageIndividualTasks, updateStorageIndividualTasks } from '../../../data/data';


export function createTaskPanel(task) {
    const panel = document.createElement('div');

    const priorityStripe = document.createElement('div');
    const taskTitleContainer = document.createElement('div');
    const taskDueDateContainer = document.createElement('div');
    const taskCheckboxContainer = document.createElement('div');
    const utilityContainer = document.createElement('div');

    const taskTitle = document.createElement('h3');
    const taskDueDate = document.createElement('span');
    const checkboxContainer =document.createElement('div');
    const checkbox = document.createElement('input');

    const detailsButton = document.createElement('button');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    //Assigning properties of elements
    checkbox.type = 'checkbox';

    //Assigning id selectors to panel elements
    panel.id = 'tp-panel-container';
    priorityStripe.id = 'tp-priority-stripe';
    taskTitleContainer.id = 'tp-task-title-container';
    taskDueDateContainer.id = 'tp-task-due-date-container';
    taskCheckboxContainer.id = 'tp-task-checkbox-container';
    utilityContainer.id = 'tp-utility-container';

    //Assigning class selectors to panel elements
    editButton.classList.add('tp-mid');
    detailsButton.classList.add('tp-top');
    deleteButton.classList.add('tp-bottom');

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

    //Saving the state of the checkbox
    if(task.status == true) {
        checkbox.checked = true;
    }
    if(task.status == false) {
        checkbox.checked = false;
    }

    checkboxContainer.addEventListener('click', () => {
        const storageIndividualTasks = getStorageIndividualTasks();

        if(checkbox.checked) {
            task.status = true;
            storageIndividualTasks[task.id].status = true;
        }
        if(!checkbox.checked) {
            task.status = false;
            storageIndividualTasks[task.id].status = false;
        }

        updateStorageIndividualTasks(storageIndividualTasks);
    })

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
    taskCheckboxContainer.appendChild(checkboxContainer);
    checkboxContainer.appendChild(checkbox);

    utilityContainer.appendChild(detailsButton);
    utilityContainer.appendChild(editButton);
    utilityContainer.appendChild(deleteButton);

    return panel;
}
