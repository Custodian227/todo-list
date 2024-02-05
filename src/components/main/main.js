export function createMainContent() {
    const main = document.createElement('div');
    main.id = 'main-contant';

    return main;
}

export function getMainContent() {
    return document.querySelector('#main-content');
}