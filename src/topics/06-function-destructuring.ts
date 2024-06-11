interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Iphone',
    price: 1000
}

const tablet: Product = {
    description: 'Ipad',
    price: 200
}

interface TaxcalculationOptions {
    tax: number;
    products: Product[]
}

const shoppingCart: Product[] = [phone, tablet];
const tax: number = 0.15;

const taxCalculation = (options: TaxcalculationOptions) : number[] => {
    let total: number = 0;

    options.products.forEach(product => {
        total += product.price;
    });
    return [total, options.tax]
}

const result = taxCalculation({products:shoppingCart, tax});
console.log('Total ', result[0]);
console.log('Tax ', result[1]);


export {};