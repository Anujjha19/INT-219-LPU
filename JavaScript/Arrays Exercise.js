
//Exercise For Array Lecture 24 -  no 49/58

const sabTv = [
    {
        name: 'Mehta',
        height: '172',
        mass: '77',
        eye_color: 'brown',
        gender: 'male',
    },
    {
        name: 'Jethalal',
        height: '145',
        mass: '136',
        eye_color: 'black',
        gender: 'male',
    },
    {
        name: 'Babita Ji',
        height: '150',
        mass: '49',
        eye_color: 'grey',
        gender: 'female',
    },
    {
        name: 'Iyer',
        height: '168',
        mass: '84',
        eye_color: 'black',
        gender: 'male',
    },
];

//Get an Array of all Names

console.log(sabTv.map(ch => ch.name));

//Get an array of objects with just name and height properties

const propertiesOfCh = sabTv.map(ch => {
    return {
        name: ch.name,
        height: ch.height
    }
})
console.log(propertiesOfCh);

//Get the total height of all characters

const totalHeight = sabTv.reduce((prevHeight, sabTv) => {
    return prevHeight + Number(sabTv.height);
}, 0);
console.log(totalHeight);

//Get chracters with mass greater than 100

console.log(sabTv.filter(heroes => heroes.mass > 100));

//Get all the male characters

console.log(sabTv.filter(heroes => heroes.gender == 'male'));

//Sort by name

const sortByName = sabTv.sort((hero1, hero2) => {
    if (hero1.name > hero2.name) {
        return -1;
    }
    if (hero1.name < hero2.name) {
        return 1;
    }
    // names must be equal
    return 0;
});
console.log(sortByName);

//Sort by gender

const sortByGender = sabTv.sort((hero1 , hero2) => {
    if (hero1.gender> hero2.gender) {
        return -1;
    }
    if (hero1.gender <  hero2.gender) {
        return 1;
    }
    // names must be equal
    return 0;
});
console.log(sortByGender);

//Does every character have mass more than 40?

console.log(sabTv.every((heroes) =>{
    return heroes.mass > 40;
}))

//Does any character have mass more than 40?

console.log(sabTv.every((heroes) => heroes.mass < 40 ));

//Does every character have blue eyes?

console.log(sabTv.every((heroes) => heroes.eye_color =='blue' ));

// Is there atleast one male character?

console.log(sabTv.some((heroes) => heroes.gender));

//Is there at least one character taller than 200?

console.log(sabTv.some((heroes) => heroes.height > 200));
