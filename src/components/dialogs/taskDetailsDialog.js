import '../../styles/taskDetailsDialog.css';

export function createTaskDetailsDialog(task) {
    const dialog = document.createElement('dialog');
    const closeButtonContainer = document.createElement('div');
    const closeDialogButton = document.createElement('button');

    const dialogHeaderContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const dialogHeader = document.createElement('h2');

    const detailsContainer = document.createElement('div');
    const titleField = document.createElement('div');
    const descriptionField = document.createElement('div');
    const dueDateField = document.createElement('div');
    const priorityField = document.createElement('div');

    const titleLabelContainer = document.createElement('div');
    const titleLabel = document.createElement('b');
    const titleValueContainer = document.createElement('div');
    const titleValue = document.createElement('span');

    const descriptionLabelContainer = document.createElement('div');
    const descriptionLabel = document.createElement('b');
    const descriptionValueContainer = document.createElement('div');
    const descriptionValue = document.createElement('span');

    const dueDateLabelContainer = document.createElement('div');
    const dueDateLabel = document.createElement('b');
    const dueDateValueContainer = document.createElement('div');
    const dueDateValue = document.createElement('span');

    const priorityLabelContainer = document.createElement('div');
    const priorityLabel = document.createElement('b');
    const priorityValueContainer = document.createElement('div');
    const priorityValue = document.createElement('span');
    const priorityBox = document.createElement('div');

    //Assignemnt of id selectors to dialog elements
    dialog.id = 'details-dialog';
    closeButtonContainer.id = 'close-button-container';
    closeDialogButton.id = 'close-button';
    dialogHeaderContainer.id = 'dialog-header-container';
    logoContainer.id = 'logo-container';
    detailsContainer.id = 'details-container';
    titleField.id = 'title-field';
    descriptionField.id = 'description-field';
    dueDateField.id = 'due-date-field';
    priorityField.id = 'priority-field';
    priorityValueContainer.id = 'priority-value-container';

    //Assignmet of class selectors to dialog elements
    titleField.classList.add('flex-field');
    descriptionField.classList.add('field');
    dueDateField.classList.add('flex-field');
    priorityField.classList.add('flex-field');
    titleLabelContainer.classList.add('label-container');
    titleValueContainer.classList.add('value-container');
    descriptionLabelContainer.classList.add('label-container');
    descriptionValueContainer.classList.add('value-container');
    dueDateLabelContainer.classList.add('label-container');
    dueDateValueContainer.classList.add('value-container');
    priorityLabelContainer.classList.add('label-container');
    priorityValueContainer.classList.add('value-container');

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    dialogHeader.textContent = 'Task Details';
    titleLabel.textContent = 'Title:';
    descriptionLabel.textContent = 'Description:';
    dueDateLabel.textContent = 'Due Date:';
    priorityLabel.textContent = 'Priority:';

    //Initialization of values that depend on the task object
    titleValue.textContent = task.title;
    descriptionValue.textContent = task.description;
    dueDateValue.textContent = task.dueDate;
    priorityValue.textContent = task.priority;

    if(task.priority == "High") {
        priorityBox.classList.add('high-priority-box');
    }
    if(task.priority == "Medium") {
        priorityBox.classList.add('medium-priority-box');
    }
    if(task.priority == "Low") {
        priorityBox.classList.add('low-priority-box');
    }

    //Attaching an event listener to the close dialog button
    closeDialogButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
    });

    //Creating the structure of the dialog
    dialog.appendChild(closeButtonContainer);
    dialog.appendChild(dialogHeaderContainer);
    dialog.appendChild(detailsContainer);

    closeButtonContainer.appendChild(closeDialogButton);
    dialogHeaderContainer.appendChild(logoContainer);
    dialogHeaderContainer.appendChild(dialogHeader);

    detailsContainer.appendChild(titleField);
    detailsContainer.appendChild(descriptionField);
    detailsContainer.appendChild(dueDateField);
    detailsContainer.appendChild(priorityField);

    titleField.appendChild(titleLabelContainer);
    titleField.appendChild(titleValueContainer);
    titleLabelContainer.appendChild(titleLabel);
    titleValueContainer.appendChild(titleValue);

    descriptionField.appendChild(descriptionLabelContainer);
    descriptionField.appendChild(descriptionValueContainer);
    descriptionLabelContainer.appendChild(descriptionLabel);
    descriptionValueContainer.appendChild(descriptionValue);

    dueDateField.appendChild(dueDateLabelContainer);
    dueDateField.appendChild(dueDateValueContainer);
    dueDateLabelContainer.appendChild(dueDateLabel);
    dueDateValueContainer.appendChild(dueDateValue);

    priorityField.appendChild(priorityLabelContainer);
    priorityField.appendChild(priorityValueContainer);
    priorityLabelContainer.appendChild(priorityLabel);
    priorityValueContainer.appendChild(priorityValue);
    priorityValueContainer.appendChild(priorityBox);

    return dialog;
}

export function getTaskDetailsDialog() {
    return document.querySelector('#details-dialog');
}