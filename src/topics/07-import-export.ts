import {Product} from './06-function-destructuring'
import {taxCalculation} from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'phone',
        price: 1000
    },

    {
        description: 'tablet',
        price: 2000
    }
];

const tax: number  = 0.15;
const [total, taxTotal] = taxCalculation({products:shoppingCart, tax});

console.log('Total ', total);
console.log('Tax total', taxTotal);