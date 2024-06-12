

export class Person {
    public name: string;
    private address: string;

    constructor(){
        this.name = 'Eliecer';
        this.address = 'Panama';
    };
}


const ironMan = new Person();
console.log(ironMan);