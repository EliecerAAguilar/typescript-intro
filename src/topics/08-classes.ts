

export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name: string,
        private address: string = 'no address'
    ){};
}


const ironMan = new Person('Eliecer','Panama');
console.log(ironMan);