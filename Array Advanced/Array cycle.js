function arradv2() {

    let arr = [3, 12, 30, 60, 66, 78];
    let arr2 = arr.slice();
    let arr3 = arr2.slice();

    for (let i = arr.length; i > 3; i--) {
        console.log(arr.slice(0, i));
    }
}

arradv2();
