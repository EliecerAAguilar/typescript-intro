

export interface Passenger{
    name: string;
    children?:string[];
}

const passenger1:Passenger = {
    name: 'Eliecer'
}

const passenger2:Passenger = {
    name: 'Izallana',
    children: ['Nathalia', 'Elieth']
}

const printChildren = (passenger: Passenger) => {
    const {name, children} = passenger;
    // const howManyChildren: number = children!.length;  non-null
    const howManyChildren: number = children?.length || 0;
    console.log(name,howManyChildren);
}

printChildren(passenger1);
printChildren(passenger2);