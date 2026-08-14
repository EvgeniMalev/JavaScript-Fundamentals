function sumaDoN(n) {
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += i;
    }

    return suma;
}

// Пример
let n = 10;
console.log("Сумата от 1 до " + n + " е: " + sumaDoN(n));
