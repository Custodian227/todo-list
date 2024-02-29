import '../styles/index.css';
import { createContentElement, getContentElement } from "../components/content/contentElement";
import { createTaskMainContent } from "../components/main/main";
import { createSidebar } from "../components/sidebar/sidebar";
import { loadIndividualTasks } from './load';
import { getStorageIndividualTasks, getStorageLists } from '../data/data';

export function initializeIndexPage() {
    createContentElement();
    const content = getContentElement();

    content.appendChild(createSidebar());
    content.appendChild(createTaskMainContent());

    //Setting up the local storage data on first load
    if(getStorageIndividualTasks() === null) {
        localStorage.setItem('individual-tasks', JSON.stringify([]));
        localStorage.setItem('individual-tasks-index', 0);
    }
    if(getStorageLists() === null) {
        localStorage.setItem('lists', JSON.stringify([]));
        localStorage.setItem('lists-index', 0);
    }

    loadIndividualTasks();
}