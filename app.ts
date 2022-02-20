// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Maximlian',
//     age: 30
// }

const person = {
    name: 'Maximlian',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

