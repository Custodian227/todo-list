import './listTaskDetailsDialog.css';

export function createListTaskDetailsDialog(listTask) {
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
    const statusField = document.createElement('div');

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

    const statusLabelContainer = document.createElement('div');
    const statusLabel = document.createElement('b');
    const statusValueContainer = document.createElement('div');
    const statusValue = document.createElement('span');

    //Assignemnt of id selectors to dialog elements
    dialog.id = 'task-details-dialog';
    closeButtonContainer.id = 'tdd-close-button-container';
    closeDialogButton.id = 'tdd-close-button';
    dialogHeaderContainer.id = 'tdd-dialog-header-container';
    logoContainer.id = 'tdd-logo-container';
    detailsContainer.id = 'tdd-details-container';
    titleField.id = 'tdd-title-field';
    descriptionField.id = 'tdd-description-field';
    dueDateField.id = 'tdd-due-date-field';
    priorityField.id = 'tdd-priority-field';
    priorityValueContainer.id = 'tdd-priority-value-container';
    statusField.id = 'tdd-status-field';
    statusValueContainer.id = 'tdd-status-value-container';

    //Assignmet of class selectors to dialog elements
    titleField.classList.add('tdd-details-flex-field');
    descriptionField.classList.add('tdd-details-field');
    dueDateField.classList.add('tdd-details-flex-field');
    priorityField.classList.add('tdd-details-flex-field');
    statusField.classList.add('tdd-details-flex-field');
    titleLabelContainer.classList.add('tdd-label-container');
    titleValueContainer.classList.add('tdd-value-container');
    descriptionLabelContainer.classList.add('tdd-label-container');
    descriptionValueContainer.classList.add('tdd-value-container');
    dueDateLabelContainer.classList.add('tdd-label-container');
    dueDateValueContainer.classList.add('tdd-value-container');
    priorityLabelContainer.classList.add('tdd-label-container');
    priorityValueContainer.classList.add('tdd-value-container');
    statusLabelContainer.classList.add('tdd-label-container');
    statusValueContainer.classList.add('tdd-value-container');

    //Form element properties
    closeDialogButton.type = 'button';

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    dialogHeader.textContent = 'Task Details';
    titleLabel.textContent = 'Title:';
    descriptionLabel.textContent = 'Description:';
    dueDateLabel.textContent = 'Due Date:';
    priorityLabel.textContent = 'Priority:';
    statusLabel.textContent = 'Status:';

    //Initialization of values that depend on the task object
    titleValue.textContent = listTask.title;
    descriptionValue.textContent = listTask.description;
    dueDateValue.textContent = listTask.dueDate;
    priorityValue.textContent = listTask.priority;

    if(listTask.status) {
        statusValue.textContent = 'Finished';
    }
    if(!listTask.status) {
        statusValue.textContent = 'Unfinished';
    }

    if(listTask.priority == "High") {
        priorityBox.classList.add('tdd-high-priority-box');
    }
    if(listTask.priority == "Medium") {
        priorityBox.classList.add('tdd-medium-priority-box');
    }
    if(listTask.priority == "Low") {
        priorityBox.classList.add('tdd-low-priority-box');
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
    detailsContainer.appendChild(statusField);

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

    statusField.appendChild(statusLabelContainer);
    statusField.appendChild(statusValueContainer);
    statusLabelContainer.appendChild(statusLabel);
    statusValueContainer.appendChild(statusValue);

    return dialog;
}

export function getTaskDetailsDialog() {
    return document.querySelector('#details-dialog');
}