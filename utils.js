import { items } from './data.js';

export const CART = 'CART';


    export function renderItems(items){
    
    const li = document.createElement('li');
    const name = document.createElement('h3');
    const crafter = document.createElement('p');
    const img = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('p');
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
    
    button.textContent = 'Add to inventory';
    button.addEventListener('click', () => {
        const cart = getFromLocalStorage('CART') || [];
        const itemInCart = findById(cart, items.id);
        
        if (itemInCart === undefined) {
            const newCartItem = {
                id: items.id,
                quantity: 1,
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
