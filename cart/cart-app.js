import { renderTable, calcTotal } from './cart-utils.js';
import { items } from '../data.js';
import { CART, getFromLocalStorage } from '../utils.js';



const cartArray = getFromLocalStorage(CART) || [];


const table = document.querySelector('tbody');

for (let i = 0; i < cartArray.length; i++) {
    const item = cartArray[i];
    const tr = renderTable(item);
    table.appendChild(tr);
}

const totalPrice = calcTotal(cartArray, items);
const totalToUser = document.getElementById('total');
console.log(totalPrice);


totalToUser.textContent = `Total Cost ${totalPrice} gold`;


const specialButton = document.getElementById('specialButton');

specialButton.addEventListener('click', () => {
    const fromCart = JSON.stringify(cartArray, true, 2);
    alert(fromCart);
    localStorage.clear();
    window.location.href = '../index.html';

});

