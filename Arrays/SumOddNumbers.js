function sumOddNumbers(arr) { 
    let sum = 0;

    for (let element of arr) {
        let number = Number(element);

        if (number % 2 !== 0) { 
            sum += number;
        }
    }

    console.log(sum);
}

sumOddNumbers(['18', '22', '43', '54', '7', '61']); 
sumOddNumbers(['103', '56', '78', '91']);           
sumOddNumbers(['2', '4', '6', '8', '10']);   
