//Individual Tasks Data
export function getStorageIndividualTasks() {
    return JSON.parse(localStorage.getItem('individual-tasks'));
}

export function updateStorageIndividualTasks(storageIndividualTasks) {
    localStorage.setItem('individual-tasks', JSON.stringify(storageIndividualTasks));
}

export function getStorageIndividualTasksIndex() {
    return JSON.parse(localStorage.getItem('individual-tasks-index'));
}

export function updateStorageIndividualTasksIndex(storageIndividualTaskIndex) {
    localStorage.setItem('individual-tasks-index', JSON.stringify(storageIndividualTaskIndex));
}

//Lists Data
export function getStorageLists() {
    return JSON.parse(localStorage.getItem('lists'));
}

export function updateStorageLists(storageLists) {
    localStorage.setItem('lists', JSON.stringify(storageLists));
}

export function getStorageListsIndex() {
    return JSON.parse(localStorage.getItem('lists-index'));
}

export function updateStorageListsIndex(storageListsIndex) {
    localStorage.setItem('lists-index', JSON.stringify(storageListsIndex));
}






