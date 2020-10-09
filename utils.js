import { items as hardCodedItems } from './data.js';

import { CART, PRODUCTS } from './constants.js';

export function renderItems(items){
    
    const li = document.createElement('li');
    const name = document.createElement('h3');
    const crafter = document.createElement('p');
    const img = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const drop = document.createElement('select');
    const button = document.createElement('button');

    li.classList.add('id');

    name.classList.add('name');
    name.textContent = items.name;

    crafter.classList.add('crafter');
    crafter.textContent = `Crafted by ${items.crafter}`;

    img.classList.add('image');
    img.src = items.image;
    

    description.classList.add('description');
    description.textContent = items.description;

    price.classList.add('price');
    price.textContent = `Cost ${items.price}`;
    
    drop.classList.add('drop');
    for (let i = 1; i <= 10; i++){
        const option = document.createElement('OPTION'); 
        option.text = i;
        option.value = i;
        drop.append(option);
    }
    drop.addEventListener('change', (e) => {
        console.log(e.target.value);
    });


    button.textContent = 'Add to inventory';
    button.addEventListener('click', () => {
        const cart = getFromLocalStorage('CART') || [];
        const itemInCart = findById(cart, items.id);
        
        if (itemInCart === undefined) {
            const newCartItem = {
                id: items.id,
                quantity: drop.value,
            };
            cart.push(newCartItem);
        } else {

            itemInCart.quantity++;
        }
        setInLocalStorage(CART, cart);

    });

    li.append(name);
    li.append(crafter);
    li.append(img);
    li.append(description);
    li.append(price);
    li.append(drop);
    li.append(button);
    return li;
}           


export function findById(someArray, someId) {

    for (let i = 0; i < someArray.length; i++) {
        if (someArray[i].id === someId) {
            return someArray[i];
        }
    }
}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
}
export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);
    localStorage.setItem(key, stringyItem);
    return value;

}

export function getLocalStorageItems() {
    let localStorageItems = JSON.parse(localStorage.getItem(PRODUCTS));
    if (!localStorageItems) {
        const stringyItems = JSON.stringify(hardCodedItems);
        localStorage.setItem(PRODUCTS, stringyItems);
        localStorageItems = hardCodedItems;
    } return localStorageItems;

}
export function addNewItem(newItem) {
    const localStoredItems = getLocalStorageItems();
    localStoredItems.push(newItem);
    setInLocalStorage(PRODUCTS, localStoredItems);
}