import { getTaskDialog } from "../dialogs/taskAddDialog";
import '../../styles/index.css'
import { getAddListDialog } from "../dialogs/listAddDialog";
import { createListMainContent, createTaskMainContent, getListMainContent, getTaskMainContent } from "../main/main";
import { todoListPanels, todoTaskPanels } from "../../data/data";
import { getContentElement } from "../content/contentElement";

export function createNavigation() {
    //Creating all navigation elements
    const navigation = document.createElement('div');
    const navigationTag = document.createElement('nav');

    const taskNavigation = document.createElement('div');
    const taskField = document.createElement('div');
    const taskButton = document.createElement('button');
    const addTaskButtonContainer = document.createElement('div');
    const addTaskButton = document.createElement('button');
    const todayButton = document.createElement('button');
    const thisWeekButton = document.createElement('button')

    const listNavigation = document.createElement('div');
    const listField = document.createElement('div');
    const listButton = document.createElement('button');
    const addListButtonContainer = document.createElement('div');
    const addListButton = document.createElement('button');
    const listContainer = document.createElement('div');

    //Assigning id selectors to nav elements
    navigation.id = 'navigation-container';
    taskNavigation.id = 'task-navigation';
    addTaskButton.id = 'add-task-button';
    listContainer.id = 'list-container';

    //Assigning class selectors to nav elements
    taskField.classList.add('nav-add-field');
    taskButton.classList.add('start-button');
    addTaskButtonContainer.classList.add('add-button-container');
    addTaskButton.classList.add('add-button');
    listField.classList.add('nav-add-field');
    listButton.classList.add('start-button');
    addListButtonContainer.classList.add('add-button-container');
    addListButton.classList.add('add-button');
   
    //Assigning text values to nav elements
    taskButton.textContent = 'Tasks';
    todayButton.textContent = 'Today';
    thisWeekButton.textContent = 'This Week';
    listButton.textContent = 'Lists';

    //Creating the navigation structure
    navigation.appendChild(navigationTag);
    navigationTag.appendChild(taskNavigation);
    navigationTag.appendChild(listNavigation);

    taskNavigation.appendChild(taskField);
    taskNavigation.appendChild(todayButton);
    taskNavigation.appendChild(thisWeekButton);

    taskField.appendChild(taskButton);
    taskField.appendChild(addTaskButtonContainer);
    addTaskButtonContainer.appendChild(addTaskButton);

    listNavigation.appendChild(listField);
    listNavigation.appendChild(listContainer);

    listField.appendChild(listButton);
    listField.appendChild(addListButtonContainer);
    addListButtonContainer.appendChild(addListButton);

    //Adding Event listeners to buttons 
    taskButton.addEventListener('click', () => {
        const content = getContentElement();
        
        //Check if the content container for the task is present in the content container
        if(content.children[1].id != 'task-main') {
            content.removeChild(getListMainContent());
        
            const taskMainContent = createTaskMainContent();
            content.appendChild(taskMainContent);
    
            todoTaskPanels.forEach(panel => {
                taskMainContent.appendChild(panel);
            });
        }    
    });

    addTaskButton.addEventListener('click', () => {
        getTaskDialog().showModal();
    });

    listButton.addEventListener('click', () => {
        const content = getContentElement();

        //Check if the content container for the lists is present in the content container
        if(content.children[1].id != 'list-main') {
            content.removeChild(getTaskMainContent());

            const listMainContent = createListMainContent();
            content.appendChild(listMainContent);
  
            todoListPanels.forEach(panel => {
                listMainContent.appendChild(panel);
            });
        }  
    });

    addListButton.addEventListener('click', () => {
        getAddListDialog().showModal()
    });

    return navigation;
}

export function getNavListContainer() {
    return document.querySelector('#list-container');
}
