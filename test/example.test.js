// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { calcLineItem, calcTotal, cartArray } from '../cart/cart-utils.js';
import { items } from '../data.js';
const test = QUnit.test;

// test('time to test a function', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = '140';
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = calcTotal(cartArray);

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });

test('take in quantity and ammount and return Line item total', (expect) => {
    const quantity = 2;
    const amount = 16;
    
    const expected = 32.00;

    const actual = calcLineItem(quantity, amount);

    expect.equal(actual, expected);
});


test('take in the cart and the items  and display the total cost', (expect) => {
    

    
    const expected = 140;

    const actual = calcTotal(cartArray, items);

    expect.equal(actual, expected);
});