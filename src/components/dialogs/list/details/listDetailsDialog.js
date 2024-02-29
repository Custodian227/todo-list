import './listDetailsDialog.css';

export function createListDetailsDialog(list) {
    const dialog = document.createElement('dialog');
    const closeButtonContainer = document.createElement('div');
    const closeDialogButton = document.createElement('button');

    const dialogHeaderContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const dialogHeader = document.createElement('h2');

    const detailsContainer = document.createElement('div');
    const titleField = document.createElement('div');
    const numberOfTasksField = document.createElement('div');

    const titleLabelContainer = document.createElement('div');
    const titleLabel = document.createElement('b');
    const titleValueContainer = document.createElement('div');
    const titleValue = document.createElement('span');

    const numberOfTasksLabelContainer = document.createElement('div');
    const numberOfTasksLabel = document.createElement('b');
    const numberOfTasksValueContainer = document.createElement('div');
    const numberOfTasksValue = document.createElement('span');

    //Assignemnt of id selectors to dialog elements
    dialog.id = 'list-details-dialog';
    closeButtonContainer.id = 'ldd-close-button-container';
    closeDialogButton.id = 'ldd-close-button';
    dialogHeaderContainer.id = 'ldd-dialog-header-container';
    logoContainer.id = 'ldd-logo-container';
    detailsContainer.id = 'ldd-details-container';
    titleField.id = 'ldd-title-field';
    numberOfTasksField.id = 'ldd-number-of-tasks-field';

    //Assignmet of class selectors to dialog elements
    titleField.classList.add('ldd-list-details-flex-field');
    titleLabelContainer.classList.add('ldd-list-label-container');
    titleValueContainer.classList.add('ldd-list-value-container');

    numberOfTasksField.classList.add('ldd-list-details-flex-field');
    numberOfTasksLabelContainer.classList.add('ldd-list-label-container');
    numberOfTasksValueContainer.classList.add('ldd-list-value-container');

    //Assignment of atttributes to form elements
    closeDialogButton.type = 'button';

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    dialogHeader.textContent = 'List Details';
    titleLabel.textContent = 'Title:';
    numberOfTasksLabel.textContent = 'Tasks:'

    //Initialization of values that depend on the task object
    titleValue.textContent = list.title;

    let taskCounter = 0;

    list.tasks.forEach(listTask => {
        if(listTask !== null) {
            taskCounter++;
        }
    });

    numberOfTasksValue.textContent = taskCounter;

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
    detailsContainer.appendChild(numberOfTasksField);

    titleField.appendChild(titleLabelContainer);
    titleField.appendChild(titleValueContainer);
    titleLabelContainer.appendChild(titleLabel);
    titleValueContainer.appendChild(titleValue);

    numberOfTasksField.appendChild(numberOfTasksLabelContainer);
    numberOfTasksField.appendChild(numberOfTasksValueContainer);
    numberOfTasksLabelContainer.appendChild(numberOfTasksLabel);
    numberOfTasksValueContainer.appendChild(numberOfTasksValue);

    return dialog;
}

export function getTaskDetailsDialog() {
    return document.querySelector('#details-dialog');
}