// import functions and grab DOM elements
import { renderItems, getLocalStorageItems } from './utils.js';
// import { items } from './data.js';


// initialize state

// set event listeners to update state and DOM



const localStorageItems = getLocalStorageItems();


const ul = document.querySelector('#lists');

for (let i = 0; i < localStorageItems.length; i++) {
    const item = localStorageItems[i];
    const li = renderItems(item);
    ul.appendChild(li);
}