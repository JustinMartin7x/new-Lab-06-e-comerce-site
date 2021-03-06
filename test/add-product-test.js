import { addNewItem, getLocalStorageItems } from '../utils.js';
import { PRODUCTS } from '../constants.js';



const test = QUnit.test;



test('should take in  items ffrom local storage and add new item', (expect) => {
    const newItem = {
        id: '0025',
        name: 'staff of fire',
        crafter: 'Bjorn',
        image: 'brambles.jpg',
        description: 'cause nothing says hello like a fireball down the throat',
        price: 25,
    };
    const expected = [
        {
            id: '001',
            name: 'Staff of Brambles',
            crafter: 'Svien',
            image: './assets/brambles.jpg',
            description: 'a magical staff that produces a cone of rooting brambles.',
            price: '15',
            // onSale: false,
    
        },
        {
            id: '002',
            name: 'Bag of Holding',
            crafter: 'Cantune',
            image: './assets/bag.jpg',
            description: 'a ba that can hold up to +100 slots for your items',
            price: '25',
            onSale: true,
        },
        {
            id: '003',
            name: 'Ring of Health + 1',
            crafter: 'Unknown',
            image: './assets/ring1.jpg',
            description: 'Wearer will be gain a +3 boost to health',
            price: '150',
            onSale: false, 
        },
        {
            id: '004',
            name: 'Ring of Cats Grace',
            crafter: 'Baldur',
            image: './assets/catring1.jpg',
            description: 'wearer will gain a +5 boost to Dexterity',
            price: '200',
            onSale: false, 
        },
        {
            id: '005',
            name: 'scroll of summon undead',
            crafter: 'Neconorun',
            image: './assets/scroll.jpg',
            description: 'One time instant cast of raise undead',
            price: '100',
            onSale: true, 
        },
        {
            id: '006',
            name: 'Potion of Greater Vitality',
            crafter: 'Finnius Philactry',
            image: './assets/potion1.jpg',
            description: 'when consumed grants perminant +3 to constition ',
            price: '1000',
            onSale: false, 
        },
        {
            id: '007',
            name: 'locked Box',
            crafter: 'unknown',
            image: './assets/box.jpg',
            description: 'no one has been able to open this box. its contents are unknown.',
            price: '5',
            onSale: true, 
        },
        {

            id: '0025',
            name: 'staff of fire',
            crafter: 'Bjorn',
            image: 'brambles.jpg',
            description: 'cause nothing says hello like a fireball down the throat',
            price: 25,
        }

    ];

    addNewItem(newItem);
    const localStorageAfter = getLocalStorageItems(expected);
    expect.deepEqual(localStorageAfter, expected);
});

 