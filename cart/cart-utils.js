import { findById } from '../utils.js';
import { items } from '../data.js';
import { getFromLocalStorage } from '../utils.js';






export function renderTable(cartItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    const itemData = findById(items, cartItem.id);
    const cost = itemData.price;

    tdQuantity.textContent = cartItem.quantity;
    tdPrice.textContent = `${cost}`;
   
    const itemName = itemData.name;
    tdName.textContent = itemName;

    const subTotal = calcLineItem(cost, cartItem.quantity);
    tdTotal.textContent = `${subTotal}`;
    tr.append(tdName, tdPrice, tdQuantity, tdTotal);
    return tr;
}
export function calcLineItem(quantity, amount) {
    const answer = Number(quantity) * Number(amount);
    return answer;
}


export function calcTotal(cart, items) {
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++){
        const item = cart[i];
        const itemActual = findById(items, item.id);
        console.log(itemActual);
        const subTotal = calcLineItem(itemActual.price, item.quantity);
        totalCost = totalCost + subTotal;
    }
    return totalCost;
}





// export const cartArray = [
//     { 
//         id: '001',
//         quantity: '1',
//     }, 
//     {
//         id: '002',
//         quantity: '5',
//     },
// ];