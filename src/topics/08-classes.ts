

export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name: string,
        private address: string = 'no address'
    ){};
}

export class Hero extends Person {
    constructor(public alterEgo: string,
                public age: number,
                public realName: string) {
        super(realName,'Colombia');
    }
}
const ironMan = new Hero('IronMan',35, 'Tony');
console.log(ironMan);