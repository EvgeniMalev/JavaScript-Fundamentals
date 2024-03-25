/*
Create an object from a rows, properties of a fridge
*/

function createFridge(tableRows) {
    const objects = [];

    tableRows.forEach(row => {
        const values = row.split(" | ");
        const fridgeObj = {
            fridgeName: values[0],
            height: parseFloat(values[1]),
            width: parseFloat(values[2]),
            length: parseFloat(values[3]),
            weight: parseFloat(values[4])
        };
        objects.push(fridgeObj);
    });

    objects.forEach(obj => {
        console.log(obj);
    });
}
