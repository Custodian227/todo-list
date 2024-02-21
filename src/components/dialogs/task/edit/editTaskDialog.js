import { individualTasks } from '../../../../data/data';
import { formatDueDate, formatSQLDueDate } from '../../../../helpers/date';
import { loadIndividualTasks, loadThisWeekTasks, loadTodayTasks } from '../../../../helpers/load';
import { getContentElement } from '../../../content/contentElement';
import './editTaskDialog.css';

export function createEditTaskDialog(task) {
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
    const editTaskButton = document.createElement('button');
    const resetFormButton = document.createElement('button');

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    closeDialogButton.type = 'button';
    dialogHeader.textContent = 'Edit a Task';

    titleLabel.textContent = 'Title';
    descriptionLabel.textContent = 'Description';
    dueDateLabel.textContent = 'Due Date';
    priorityLabel.textContent = 'Priority';

    editTaskButton.textContent = 'Edit';
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

    editTaskButton.type = 'button';
    resetFormButton.type = 'reset';
    closeDialogButton.type = 'button';

    //Assignment of id selectors to dialog elements 
    dialog.id = 'edit-task-dialog';
    closeDialogButtonContainer.id = 'etd-close-button-container';
    closeDialogButton.id = 'etd-close-button';
    dialogHeaderContainer.id = 'etd-dialog-header-container';
    logoContainer.id = 'etd-logo-container';
    titleInput.id = 'etd-title-input';
    descriptionArea.id = 'etd-task-descritption';
    dueDateInput.id = 'etd-task-due-date';
    priorityLabelContainer.id = 'etd-priority-label-container';
    priorityBoxContainer.id = 'etd-priority-box-container';
    prioritySelect.id = 'etd-task-priority';
    editTaskButton.id = 'etd-add-task-button';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('etd-edit-field');
    descriptionField.classList.add('etd-edit-field');
    dueDateField.classList.add('etd-edit-field');
    priorityField.classList.add('etd-edit-field');
    titleLabel.classList.add('etd-label-margin');
    descriptionLabel.classList.add('etd-label-margin');
    dueDateLabel.classList.add('etd-label-margin');
    highPriorityBox.classList.add('etd-high-priority-box');
    mediumPriorityBox.classList.add('etd-medium-priority-box');
    lowPriorityBox.classList.add('etd-low-priority-box');
    formButtons.classList.add('etd-form-buttons');

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

    formButtons.appendChild(editTaskButton);
    formButtons.appendChild(resetFormButton);

    //Changing the due date into a sql date format so that the 
    //value can be saved into the edit task dialog
    const sqlFormatDueDate = formatSQLDueDate(task.dueDate);

    //Saving values of the selected task inside the edit form
    titleInput.value = task.title;
    descriptionArea.textContent = task.description;
    dueDateInput.value = sqlFormatDueDate;
    prioritySelect.value = task.priority;

    //Adding event listeners to buttons
    editTaskButton.addEventListener('click', () => {
        individualTasks[task.id].title = titleInput.value;
        individualTasks[task.id].description = descriptionArea.value;
        individualTasks[task.id].dueDate = formatDueDate(dueDateInput.value);
        individualTasks[task.id].priority = prioritySelect.value;

        const contentElement = getContentElement();
        
        if(contentElement.children[1].id == 'task-main-content') {
            loadIndividualTasks();
        }
        if(contentElement.children[1].id == 'today-tasks-main-content') {
            loadTodayTasks();
        }
        if(contentElement.children[1].id == 'this-week-tasks-main-content') {
            loadThisWeekTasks();
        }
    
        document.body.removeChild(dialog);
    });

    closeDialogButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
    });

    return dialog;
}