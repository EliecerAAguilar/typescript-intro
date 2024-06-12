// T generic type
export function whatsMyType<T>(argument: T): T {

    return argument;
}

const amIString = whatsMyType<string>('Hola mundo');
console.log(amIString);

const amINumber = whatsMyType<number>(123);
console.log(amINumber);

const amIArray = whatsMyType<number[]>([1, 2, 3]);
console.log(amIArray);