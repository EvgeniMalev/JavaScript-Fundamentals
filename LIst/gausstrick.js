function gaussTrick(input) {
    let numList = input.split(" ").map(Number);

    let sizeList = numList.length;

    for (let i = 0; i < Math.floor(sizeList / 2); i++) {
        let firstNum = numList[i];
        let secondNum = numList[numList.length - 1];

        numList[i] = firstNum + secondNum;

        numList.pop(); 
    }

    console.log(numList.join(" "));
}

const input = "1 2 3 4 5 6"; 
gaussTrick(input);
