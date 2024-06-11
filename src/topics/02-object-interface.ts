let skills :string [] = ['Bash','Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    homeTown: string | undefined;
}

const strider : Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash','Counter', 'Healing'],
    homeTown: undefined
};

strider.homeTown = 'Panama';
console.table(strider);

export {};