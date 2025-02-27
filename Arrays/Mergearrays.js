function solve(arr1, arr2) {
    let firstArray = arr1;
    let secondArray = arr2; 
    let arrayForResult = [];
    
    for(let i = 0 ;i < firstArray.length; i++){
        let num = 0;
        if(i % 2 == 0){
            num = Number(firstArray[i]) + Number(secondArray[i]);
        }
        else{
            num = firstArray[i] + '' + secondArray[i];
        }
        arrayForResult.push(num);
    }
    console.log(arrayForResult.join(' - '));
}

solve(['3','5', '2', '3', '8', '12'], ['23','46', '22', '87', '36', '11']);
