

export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name: string,
        private address: string = 'no address',
        public lastName: string
    ){};
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName,'Colombia');
//     }
// }

export class Hero {
    // public person: Person;
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        // this.person = new Person(realName);
    }
}
const eliecer: Person = new Person('Eliecer','', 'Aguilar');
const ironMan = new Hero('IronMan',35, 'Tony', eliecer);
console.log(ironMan);