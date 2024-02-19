export function createList(id, title, tasks, currentListTaskCounter) {
    currentListTaskCounter = 0;
    return { id, title, tasks, currentListTaskCounter };
}