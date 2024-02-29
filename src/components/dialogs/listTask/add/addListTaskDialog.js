import './addListTaskDialog.css';
import { getStorageLists, updateStorageLists } from '../../../../data/data';
import { formatDueDate } from '../../../../helpers/date';
import { getMainContentListTasksContainer } from '../../../main/main';
import { getContentElement } from '../../../content/contentElement';
import { createListTask } from '../../../../factories/listTask';
import { loadListTasks } from '../../../../helpers/load';

export function createAddListTaskDialog() {
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
    dialogHeader.textContent = 'Add Task To List';

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
    dialog.id = 'add-list-task-dialog';
    closeDialogButtonContainer.id = 'altd-close-button-container';
    closeDialogButton.id = 'altd-close-button';
    dialogHeaderContainer.id = 'altd-dialog-header-container';
    logoContainer.id = 'altd-logo-container';
    titleInput.id = 'altd-title-input';
    descriptionArea.id = 'altd-task-descritption';
    dueDateInput.id = 'altd-task-due-date';
    priorityLabelContainer.id = 'altd-priority-label-container';
    priorityBoxContainer.id = 'altd-priority-box-container';
    prioritySelect.id = 'altd-task-priority';
    addTaskButton.id = 'altd-add-task-button';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('altd-add-field');
    descriptionField.classList.add('altd-add-field');
    dueDateField.classList.add('altd-add-field');
    priorityField.classList.add('altd-add-field');
    titleLabel.classList.add('altd-label-margin');
    descriptionLabel.classList.add('altd-label-margin');
    dueDateLabel.classList.add('altd-label-margin');
    highPriorityBox.classList.add('altd-high-priority-box');
    mediumPriorityBox.classList.add('altd-medium-priority-box');
    lowPriorityBox.classList.add('altd-low-priority-box');
    formButtons.classList.add('altd-form-buttons');

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

        const listTasksMainContent = getMainContentListTasksContainer();
        
        const storageLists = getStorageLists();

        let listId = +listTasksMainContent.parentElement.dataset.id;
        const list = storageLists[listId];

        const listTask = createListTask(list.currentListTaskCounter, taskTitle, taskDescription, taskDueDate, taskPriority, false, listId);
        list.tasks.push(listTask);
        list.currentListTaskCounter++;

        updateStorageLists(storageLists);

        if(getContentElement().children[1].id == 'list-tasks-main-content') {
            loadListTasks(list);
        }

        clearAddListTaskForm(titleInput, descriptionArea, dueDateInput, prioritySelect);
        document.body.removeChild(dialog);
    });

    closeDialogButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
        clearAddListTaskForm(titleInput, descriptionArea, dueDateInput, prioritySelect);
    });

    return dialog;
}

export function getAddListTaskDialog() {
    return document.querySelector('#add-list-task-dialog');
}

function clearAddListTaskForm(titleInput, descriptionArea, dueDateInput, prioritySelect) {
    titleInput.value = '';
    descriptionArea.value = '';
    dueDateInput.value = '';
    prioritySelect.value = 'High';
}