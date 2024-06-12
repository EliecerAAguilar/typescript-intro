export interface Product {
    description: string;
    price: number;
}

interface TaxcalculationOptions {
    tax: number;
    products: Product[]
}

const phone: Product = {
    description: 'Iphone',
    price: 1000
}

const tablet: Product = {
    description: 'Ipad',
    price: 200
}

const shoppingCart: Product[] = [phone, tablet];
const tax: number = 0.15;

export const taxCalculation = (options: TaxcalculationOptions) : [number,number] => {
    let total: number = 0;

    const {products} = options;
    const {tax} = options;

    products.forEach(({price}) => {
        total += price;
    });

    return [total, total * tax];
}

const result = taxCalculation({products:shoppingCart, tax});
const [total, taxAmount] = result;

console.log('Total ', total);
console.log('Tax ', taxAmount);


