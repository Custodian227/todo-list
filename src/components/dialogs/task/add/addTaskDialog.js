import './addTaskDialog.css';
import { getStorageIndividualTasks, getStorageIndividualTasksIndex, updateStorageIndividualTasks, updateStorageIndividualTasksIndex } from '../../../../data/data';
import { createTask } from '../../../../factories/task';
import { formatDueDate } from '../../../../helpers/date';
import { getContentElement } from '../../../content/contentElement';
import { loadIndividualTasks } from '../../../../helpers/load';

export function createAddTaskDialog() {
    //Creating all dialog elements
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');

    const closeDialogButtonContainer = document.createElement('div');
    const closeDialogButton = document.createElement('button');

    const dialogHeaderContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const dialogHeader = document.createElement('h2');

    const fieldsContainer = document.createElement('div');

    const titleField = document.createElement('div');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');

    const descriptionField = document.createElement('div');
    const descriptionLabel = document.createElement('label');
    const descriptionArea = document.createElement('textarea');

    const dueDateField = document.createElement('div');
    const dueDateLabel = document.createElement('label');
    const dueDateInput = document.createElement('input');

    const priorityField = document.createElement('div');

    const priorityLabelContainer = document.createElement('div');
    const priorityLabel = document.createElement('label');
    const priorityBoxContainer = document.createElement('div');
    const highPriorityBox = document.createElement('div');
    const mediumPriorityBox = document.createElement('div');
    const lowPriorityBox = document.createElement('div');

    const prioritySelect = document.createElement('select');
    const highPriorityOption = document.createElement('option');
    const mediumPriorityOption = document.createElement('option');
    const lowPriorityOption = document.createElement('option');

    const formButtons = document.createElement('div');
    const addTaskButton = document.createElement('button');
    const resetFormButton = document.createElement('button');

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    dialogHeader.textContent = 'Add a Task';

    titleLabel.textContent = 'Title';
    descriptionLabel.textContent = 'Description';
    dueDateLabel.textContent = 'Due Date';
    priorityLabel.textContent = 'Priority';

    addTaskButton.textContent = 'Add';
    resetFormButton.textContent = 'Reset';

    //Form element properties
    form.method = 'dialog';

    titleLabel.for = 'task-title';
    titleLabel.name = 'title';
    titleInput.name = 'title';
    titleInput.type = 'text';

    descriptionLabel.for = 'task-description'
    descriptionLabel.name = 'description';
    descriptionArea.name = 'description';
    descriptionArea.rows = '4';
    descriptionArea.style.resize = 'none'

    dueDateLabel.for = 'task-due-date';
    dueDateLabel.name = 'due-date';
    dueDateInput.name = 'due-date';
    dueDateInput.type = 'date';

    priorityLabel.for = 'task-priority';
    priorityLabel.name = 'priority';
    prioritySelect.name = 'priority';

    highPriorityOption.textContent = 'High';
    mediumPriorityOption.textContent = 'Medium';
    lowPriorityOption.textContent = 'Low';

    highPriorityOption.value = 'High';
    mediumPriorityOption.value = 'Medium';
    lowPriorityOption.value = 'Low';

    addTaskButton.type = 'button';
    resetFormButton.type = 'reset';
    closeDialogButton.type = 'button';

    //Assignment of id selectors to dialog elements 
    dialog.id = 'add-task-dialog';
    closeDialogButtonContainer.id = 'atd-close-button-container';
    closeDialogButton.id = 'atd-close-button';
    dialogHeaderContainer.id = 'atd-dialog-header-container';
    logoContainer.id = 'atd-logo-container';
    titleInput.id = 'atd-title-input';
    descriptionArea.id = 'atd-task-descritption';
    dueDateInput.id = 'atd-task-due-date';
    priorityLabelContainer.id = 'atd-priority-label-container';
    priorityBoxContainer.id = 'atd-priority-box-container';
    prioritySelect.id = 'atd-task-priority';
    addTaskButton.id = 'atd-add-task-button';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('atd-add-field');
    descriptionField.classList.add('atd-add-field');
    dueDateField.classList.add('atd-add-field');
    priorityField.classList.add('atd-add-field');
    titleLabel.classList.add('atd-label-margin');
    descriptionLabel.classList.add('atd-label-margin');
    dueDateLabel.classList.add('atd-label-margin');
    highPriorityBox.classList.add('atd-high-priority-box');
    mediumPriorityBox.classList.add('atd-medium-priority-box');
    lowPriorityBox.classList.add('atd-low-priority-box');
    formButtons.classList.add('atd-form-buttons');

    //Creating the structure of the dialog
    dialog.appendChild(form);

    form.appendChild(closeDialogButtonContainer);
    form.appendChild(dialogHeaderContainer);
    form.appendChild(fieldsContainer);

    closeDialogButtonContainer.appendChild(closeDialogButton);
    dialogHeaderContainer.appendChild(logoContainer);
    dialogHeaderContainer.appendChild(dialogHeader);

    fieldsContainer.appendChild(titleField);
    fieldsContainer.appendChild(descriptionField);
    fieldsContainer.appendChild(dueDateField);
    fieldsContainer.appendChild(priorityField);
    fieldsContainer.appendChild(formButtons);

    titleField.appendChild(titleLabel);
    titleField.appendChild(titleInput);

    descriptionField.appendChild(descriptionLabel);
    descriptionField.appendChild(descriptionArea);

    dueDateField.appendChild(dueDateLabel);
    dueDateField.appendChild(dueDateInput);

    priorityField.appendChild(priorityLabelContainer);
    priorityField.appendChild(prioritySelect);

    priorityLabelContainer.appendChild(priorityLabel);
    priorityLabelContainer.appendChild(priorityBoxContainer);

    priorityBoxContainer.appendChild(highPriorityBox);
    priorityBoxContainer.appendChild(mediumPriorityBox);
    priorityBoxContainer.appendChild(lowPriorityBox);

    prioritySelect.appendChild(highPriorityOption);
    prioritySelect.appendChild(mediumPriorityOption);
    prioritySelect.appendChild(lowPriorityOption);

    formButtons.appendChild(addTaskButton);
    formButtons.appendChild(resetFormButton);

    //Adding event listeners to buttons
    addTaskButton.addEventListener('click', () => {
        let taskTitle = titleInput.value;
        let taskDescription = descriptionArea.value;
        let taskDueDate =  formatDueDate(dueDateInput.value);
        let taskPriority = prioritySelect.value;

        //Getting the current individual task index for tracking the task id
        let storageIndividualTaskIndex = getStorageIndividualTasksIndex();

        //Creating a task object
        const task = createTask(storageIndividualTaskIndex, taskTitle, taskDescription, taskDueDate, false, taskPriority);

        //Update the changes made to the individual tasks array
        const storageIndividualTasks = getStorageIndividualTasks();
        storageIndividualTasks.push(task);

        updateStorageIndividualTasks(storageIndividualTasks);
        
        //Updating the index of the individual tasks array
        storageIndividualTaskIndex++;

        updateStorageIndividualTasksIndex(storageIndividualTaskIndex);

        if(getContentElement().children[1].id == 'task-main-content') {
            loadIndividualTasks();
        }

        clearAddTaskForm(titleInput, descriptionArea, dueDateInput, prioritySelect);
        document.body.removeChild(dialog);
    });

    closeDialogButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
        clearAddTaskForm(titleInput, descriptionArea, dueDateInput, prioritySelect);
    });

    return dialog;
}

export function getAddTaskDialog() {
    return document.querySelector('#add-task-dialog');
}

function clearAddTaskForm(titleInput, descriptionArea, dueDateInput, prioritySelect) {
    titleInput.value = '';
    descriptionArea.value = '';
    dueDateInput.value = '';
    prioritySelect.value = 'High';
}