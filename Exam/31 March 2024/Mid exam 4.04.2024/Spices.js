function organizeSpices(input) {
    let spices = input.shift().split(', ');

    for (let command of input) {
        if (command === 'done') {
            break;
        }

        let [action, ...params] = command.split(' ');

        if (action === 'AddSpice') {
            let spice = params[0];
            if (!spices.includes(spice)) {
                spices.push(spice);
            }
        } else if (action === 'AddManySpices') {
            let index = Number(params.shift());
            params = params[0].split('|');
            spices.splice(index, 0, ...params.filter(spice => !spices.includes(spice)));
        } else if (action === 'SwapSpices') {
            let [spice1, spice2] = params;
            let index1 = spices.indexOf(spice1);
            let index2 = spices.indexOf(spice2);
            if (index1 !== -1 && index2 !== -1) {
                [spices[index1], spices[index2]] = [spices[index2], spices[index1]];
            }
        } else if (action === 'ThrowAwaySpices') {
            let spice = params[0];
            let count = Number(params[1]);
            let index = spices.indexOf(spice);
            if (index !== -1) {
                spices.splice(index, count);
            }
        } else if (action === 'Arrange') {
            spices.sort();
        }
    }

    console.log(spices.join(' '));
}
