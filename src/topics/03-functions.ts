function addNumbers(a: number, b: number){
    return a + b;
}

const result: number = addNumbers(2,3);

console.log({result});

const addNumberArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

const resultArrow: string = addNumberArrow(2, 3);
console.log({resultArrow});

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const resultMultiply = multiply(2);
console.log({resultMultiply});


export {};