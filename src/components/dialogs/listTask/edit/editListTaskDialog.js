import { lists } from '../../../../data/data';
import { formatDueDate, formatSQLDueDate } from '../../../../helpers/date';
import { loadListTasks, loadThisWeekTasks, loadTodayTasks } from '../../../../helpers/load';
import { getContentElement } from '../../../content/contentElement';
import './editListTaskDialog.css';

export function createEditListTaskDialog(listTask) {
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
    dialog.id = 'edit-list-task-dialog';
    closeDialogButtonContainer.id = 'eltd-close-button-container';
    closeDialogButton.id = 'eltd-close-button';
    dialogHeaderContainer.id = 'eltd-dialog-header-container';
    logoContainer.id = 'eltd-logo-container';
    titleInput.id = 'eltd-title-input';
    descriptionArea.id = 'eltd-task-descritption';
    dueDateInput.id = 'eltd-task-due-date';
    priorityLabelContainer.id = 'eltd-priority-label-container';
    priorityBoxContainer.id = 'eltd-priority-box-container';
    prioritySelect.id = 'eltd-task-priority';
    editTaskButton.id = 'eltd-add-task-button';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('eltd-edit-field');
    descriptionField.classList.add('eltd-edit-field');
    dueDateField.classList.add('eltd-edit-field');
    priorityField.classList.add('eltd-edit-field');
    titleLabel.classList.add('eltd-label-margin');
    descriptionLabel.classList.add('eltd-label-margin');
    dueDateLabel.classList.add('eltd-label-margin');
    highPriorityBox.classList.add('eltd-high-priority-box');
    mediumPriorityBox.classList.add('eltd-medium-priority-box');
    lowPriorityBox.classList.add('eltd-low-priority-box');
    formButtons.classList.add('eltd-form-buttons');

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
    const sqlFormatDueDate = formatSQLDueDate(listTask.dueDate);

    //Saving values of the selected task inside the edit form
    titleInput.value = listTask.title;
    descriptionArea.textContent = listTask.description;
    dueDateInput.value = sqlFormatDueDate;
    prioritySelect.value = listTask.priority;

    //Adding event listeners to buttons
    editTaskButton.addEventListener('click', () => {
        const list = lists[listTask.listId];

        list.tasks[listTask.id].title = titleInput.value;
        list.tasks[listTask.id].description = descriptionArea.value;
        list.tasks[listTask.id].dueDate = formatDueDate(dueDateInput.value);
        list.tasks[listTask.id].priority = prioritySelect.value;

        const contentElement = getContentElement();

        if(contentElement.children[1].id == 'list-tasks-main-content') {
            loadListTasks(list);
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
