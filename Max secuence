function maxSequence(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
        return;
    }

    let longestSequence = [];
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

        if (currentSequence.length > longestSequence.length) {
            longestSequence = [...currentSequence];
            leftMostIndex = i;
        } else if (currentSequence.length === longestSequence.length) {
            if (i < leftMostIndex) {
                leftMostIndex = i;
            }
        }
    }

    console.log(longestSequence.join(' '));
}
