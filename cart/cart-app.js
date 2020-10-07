import { renderTable, cartArray, calcTotal } from './cart-utils.js';
import { items } from '../data.js';






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