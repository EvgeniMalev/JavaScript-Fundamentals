function arradv5() {

    let arr = [4, 15, 56, 112, 189, 204, 342];

    let arrnew = arr.map( n => n - 1);
    let multiarr = arr.map( n => n * 2);
    let powarr = arr.map( n => Math.pow(n, 3));

    console.log(arrnew);
    console.log(multiarr);
    console.log(powarr);
}
arradv5();
