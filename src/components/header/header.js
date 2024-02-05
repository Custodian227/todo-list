export function createHeader() {
    const header = document.createElement('div');
    const headerTag = document.createElement('header');
    const divOne = document.createElement('div');
    const appLogo = document.createElement('div');
    const appTitle = document.createElement('h1');

    header.id = 'header-container';
    appLogo.id = 'app-logo'

    appTitle.textContent = 'Dilligent';

    header.appendChild(headerTag);
    headerTag.appendChild(divOne);
    divOne.appendChild(appLogo);
    divOne.appendChild(appTitle);

    return header;
}