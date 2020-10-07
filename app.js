// import functions and grab DOM elements
import { renderItems } from './utils.js';
import { items } from './data.js';

// initialize state

// set event listeners to update state and DOM






const ul = document.querySelector('#lists');

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const li = renderItems(item);
    ul.appendChild(li);
}