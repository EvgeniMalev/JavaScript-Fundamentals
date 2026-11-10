function inverseMatrix(matrix) {
    let n = matrix.length;

    for (let row of matrix) {
        if (row.length !== n) {
            throw new Error("Матрицата трябва да е квадратна!");
        }
    }

    let augmented = matrix.map((row, i) => [
        ...row,
        ...Array.from({ length: n }, (_, j) =>
            i === j ? 1 : 0
        )
    ]);

    for (let i = 0; i < n; i++) {

        let pivot = i;

        for (let j = i + 1; j < n; j++) {
            if (Math.abs(augmented[j][i]) >
                Math.abs(augmented[pivot][i])) {
                pivot = j;
            }
        }

        if (Math.abs(augmented[pivot][i]) < 1e-10) {
            throw new Error("Матрицата няма обратна!");
        }

        [augmented[i], augmented[pivot]] =
        [augmented[pivot], augmented[i]];

        let divisor = augmented[i][i];

        for (let j = 0; j < 2 * n; j++) {
            augmented[i][j] /= divisor;
        }

        for (let k = 0; k < n; k++) {
            if (k !== i) {
                let factor = augmented[k][i];

                for (let j = 0; j < 2 * n; j++) {
                    augmented[k][j] -=
                        factor * augmented[i][j];
                }
            }
        }
    }

    return augmented.map(row => row.slice(n));
}

let A = [
    [2, 1],
    [5, 3]
];

try {
    let inverse = inverseMatrix(A);

    console.log("Обратна матрица:");

    inverse.forEach(row =>
        console.log(row.map(x => x.toFixed(4)).join("  "))
    );

} catch (error) {
    console.log(error.message);
}
