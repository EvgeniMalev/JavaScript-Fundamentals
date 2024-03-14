function object1() {

    let river = {
        name: 'Osam',
        length: '245',
        origin: 'Stara planina',
        flows_in: 'Danube',
        lakes: [{ name: 'Rozovo', area: 3 }, { name: 'Lozevo', area: 13 }, { name: 'Hisarsko', area: 7 }]
    };

    let secondRiver = JSON.parse(JSON.stringify(river));
    let thirdRiver = JSON.parse(JSON.stringify(river));
    
    river.lakes[0].name = 'Kamchia';
    
    console.log(river.lakes[0].name);        // Output: Kamchia
    console.log(secondRiver.lakes[0].name);  // Output: Rozovo
    console.log(thirdRiver.lakes[0].name);   // Output: Rozovo
}

object1();
