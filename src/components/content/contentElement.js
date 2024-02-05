export function createContentElement() {
    const content = document.createElement('div');
    content.id = 'content';

    document.body.appendChild(content);
}

export function getContentElement() {
    return document.querySelector('#content');
}

