import '../../styles/index.css'
import { createListMainContent, createTaskMainContent, createThisWeekTasksMainContent, createTodayTasksMainContent } from "../main/main";
import { getContentElement } from "../content/contentElement";
import { loadIndividualTasks, loadLists, loadThisWeekTasks, loadTodayTasks } from '../../helpers/load';

export function createNavigation() {
    //Creating all navigation elements
    const navigation = document.createElement('div');
    const navigationTag = document.createElement('nav');

    const taskNavigation = document.createElement('div');
    const taskField = document.createElement('div');
    const taskButton = document.createElement('button');
    const todayButton = document.createElement('button');
    const thisWeekButton = document.createElement('button')

    const listNavigation = document.createElement('div');
    const listField = document.createElement('div');
    const listButton = document.createElement('button');
    const listContainer = document.createElement('div');

    //Assigning id selectors to nav elements
    navigation.id = 'navigation-container';
    taskNavigation.id = 'task-navigation';
    listContainer.id = 'list-container';

    //Assigning class selectors to nav elements
    taskField.classList.add('nav-add-field');
    taskButton.classList.add('start-button');
    listField.classList.add('nav-add-field');
    listButton.classList.add('start-button');
   
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

    listNavigation.appendChild(listField);
    listNavigation.appendChild(listContainer);

    listField.appendChild(listButton);

    //Adding Event listeners to buttons 
    taskButton.addEventListener('click', () => {
        const content = getContentElement();
        
        if(content.children[1].id != 'task-main-content') {
            content.removeChild(content.children[1]);
            content.appendChild(createTaskMainContent());

            loadIndividualTasks();
        }    
    });

    todayButton.addEventListener('click', () => {
        const content = getContentElement();

        if(content.children[1].id != 'today-tasks-main-content') {
            content.removeChild(content.children[1]);
            content.appendChild(createTodayTasksMainContent());

            loadTodayTasks();
        }
    });

    thisWeekButton.addEventListener('click', () => {
        const content = getContentElement();

        if(content.children[1].id != 'this-week-tasks-main-content') {
            content.removeChild(content.children[1]);
            content.appendChild(createThisWeekTasksMainContent());

            loadThisWeekTasks();
        }
    });

    listButton.addEventListener('click', () => {
        const content = getContentElement();

        if(content.children[1].id != 'list-main-content') {
            content.removeChild(content.children[1]);
            content.appendChild(createListMainContent());
  
            loadLists();
        }  
    });

    return navigation;
}

export function getNavListContainer() {
    return document.querySelector('#list-container');
}
