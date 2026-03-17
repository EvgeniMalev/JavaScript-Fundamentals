function minSequence(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
        return;
    }

    let shortestSequence = null;
    let leftMostIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i];
        let currentSequence = [currentEl];

        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];

            if (nextEl === currentEl) {
                currentSequence.push(nextEl);
            } else {
                break;
            }
        }

        if (
            shortestSequence === null ||
            currentSequence.length < shortestSequence.length
        ) {
            shortestSequence = [...currentSequence];
            leftMostIndex = i;
        } else if (currentSequence.length === shortestSequence.length) {
            if (i < leftMostIndex) {
                leftMostIndex = i;
            }
        }
    }

    console.log(shortestSequence.join(' '));
}
