import { todoTaskPanels, todoTasks } from '../../data/data';
import { formatDisplayDueDate, formatSQLDueDate } from '../../helpers/date';
import '../../styles/taskEditDialog.css';

export function createEditTaskDialog(task) {
    //Creating all dialog elements
    const taskDialog = document.createElement('dialog');
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

    //Assignment of id selectors to dialog elements 
    taskDialog.id = 'edit-task-dialog';
    closeDialogButtonContainer.id = 'close-button-container';
    closeDialogButton.id = 'close-button';
    dialogHeaderContainer.id = 'dialog-header-container';
    logoContainer.id = 'logo-container';
    titleInput.id = 'title-input';
    descriptionArea.id = 'task-descritption';
    dueDateInput.id = 'task-due-date';
    priorityLabelContainer.id = 'priority-label-container';
    priorityBoxContainer.id = 'priority-box-container';
    prioritySelect.id = 'task-priority';
    editTaskButton.id = 'add-task-button';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('edit-field');
    descriptionField.classList.add('edit-field');
    dueDateField.classList.add('edit-field');
    priorityField.classList.add('edit-field');
    titleLabel.classList.add('label-margin');
    descriptionLabel.classList.add('label-margin');
    dueDateLabel.classList.add('label-margin');
    highPriorityBox.classList.add('high-priority-box');
    mediumPriorityBox.classList.add('medium-priority-box');
    lowPriorityBox.classList.add('low-priority-box');
    formButtons.classList.add('form-buttons');

    //Creating the structure of the dialog
    taskDialog.appendChild(form);

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
        todoTasks[task.id].title = titleInput.value;
        todoTasks[task.id].description = descriptionArea.value;
        todoTasks[task.id].dueDate = formatDisplayDueDate(dueDateInput.value);
        todoTasks[task.id].priority = prioritySelect.value;

        const taskPanel = todoTaskPanels[task.id];

        //The position of the task title name inside the task panel
        taskPanel.children[1].children[0].textContent = task.title;
        //The position of the task due date inside the task panel
        taskPanel.children[2].children[0].textContent = task.dueDate;

        if (task.priority == 'High') {
            //The position of the priority stripe inside the task panel
            taskPanel.children[0].style.backgroundColor = 'var(--high-priority-color)';
        }
        if (task.priority == 'Medium') {
            taskPanel.children[0].style.backgroundColor = 'var(--medium-priority-color)';
        }
        if (task.priority == 'Low') {
            taskPanel.children[0].style.backgroundColor = 'var(--low-priority-color)';
        }

        document.body.removeChild(taskDialog);
    });

    closeDialogButton.addEventListener('click', () => {
        taskDialog.close();
        document.body.removeChild(taskDialog);
    });

    return taskDialog;
}

export function getTaskDialog() {
    return document.querySelector('#add-task-dialog');
}