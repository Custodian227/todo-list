import { currentTaskIndex, incrementCurrentTaskIndex, todoTaskPanels, todoTasks } from '../../data/data';
import { createTask } from '../../factories/task';
import { formatDueDate } from '../../helpers/date';
import '../../styles/taskDialog.css';
import { getMainContent } from '../main/main';
import { createTaskPanel } from '../task/taskPanel';

export function createTaskDialog() {
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
    const defaultOption = document.createElement('option');
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

    defaultOption.disabled = 'true';
    defaultOption.selected = 'true';
    defaultOption.text = '--Priority--';
    highPriorityOption.textContent = 'High';
    mediumPriorityOption.textContent = 'Medium';
    lowPriorityOption.textContent = 'Low';

    addTaskButton.type = 'submit';
    resetFormButton.type = 'clear';

    //Assignment of id selectors to dialog elements 
    taskDialog.id = 'add-task-dialog';
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
    addTaskButton.id = 'add-task-button';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('field');
    descriptionField.classList.add('field');
    dueDateField.classList.add('field');
    priorityField.classList.add('field');
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

    prioritySelect.appendChild(defaultOption);
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

        //Creating a task object
        const task = createTask(currentTaskIndex, taskTitle, taskDescription, taskDueDate, taskPriority);
        todoTasks.push(task);

        //Creating a panel for the task object
        const panel = createTaskPanel(task);
        todoTaskPanels.push(panel);

        incrementCurrentTaskIndex();

        getMainContent().appendChild(panel);
    });

    return taskDialog;
}

export function getTaskDialog() {
    return document.querySelector('#add-task-dialog');
}