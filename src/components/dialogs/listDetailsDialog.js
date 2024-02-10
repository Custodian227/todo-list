import '../../styles/listDetailsDialog.css';

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
    dialog.id = 'details-dialog';
    closeButtonContainer.id = 'close-button-container';
    closeDialogButton.id = 'close-button';
    dialogHeaderContainer.id = 'dialog-header-container';
    logoContainer.id = 'logo-container';
    detailsContainer.id = 'details-container';
    titleField.id = 'title-field';
    numberOfTasksField.id = 'number-of-tasks-field';

    //Assignmet of class selectors to dialog elements
    titleField.classList.add('list-details-flex-field');
    titleLabelContainer.classList.add('list-label-container');
    titleValueContainer.classList.add('list-value-container');

    numberOfTasksField.classList.add('list-details-flex-field');
    numberOfTasksLabelContainer.classList.add('list-label-container');
    numberOfTasksValueContainer.classList.add('list-value-container');

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    dialogHeader.textContent = 'List Details';
    titleLabel.textContent = 'Title:';
    numberOfTasksLabel.textContent = 'Tasks:'

    //Initialization of values that depend on the task object
    titleValue.textContent = list.title;
    numberOfTasksValue.textContent = list.tasks.length;

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