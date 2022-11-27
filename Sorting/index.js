// Bubble Sorting
const bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                checked = true;
            }
        }
    } while (checked);
    return inputArr;
};

// Count Sort
const countSort = (arr) => {
    const n = arr.length;
    let maxElement = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    let counts = new Array(maxElement + 1);

    for (let i = 0; i <= maxElement; i++) {
        counts[i] = 0;
    }

    for (let i = 0; i < n; i++) {
        counts[arr[i]]++;
    }

    let newArray = new Array(n);

    let c = 0;

    for (let i = 0; i <= maxElement; i++) {
        while (counts[i] > 0) {
            newArray[c++] = i;
            counts[i]--;
        }
    }

    return newArray;
};

// Insertion Sort
const insertionSort = (unsortedArray) => {
    for (let i = 1; i < unsortedArray.length; i++) {
        let current = unsortedArray[i];
        let j;
        for (j = i - 1; j >= 0 && unsortedArray[j] > current; j--) {
            unsortedArray[j + 1] = unsortedArray[j]
        }
        unsortedArray[j + 1] = current;
    }
    return unsortedArray;
}

// Selection Sort
const selectionSort = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        // Set the minimum to this position.
        min_index = i;

        // Looking for a smaller number in the unsorted subarray.
        for (let j = i + 1; j < n; j++) {
            // If find one, set the minimum to this position.
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
    }
    return arr;
}

// Quick Sort
const quickSort = (arr) => {
    quicksort(arr, 0, arr.length - 1);
    return arr;
}

const quicksort = (arr, start, end) => {
    if (start < end) {
        let p = partition(arr, start, end);
        quicksort(arr, 0, p - 1);
        quicksort(arr, p + 1, end);

    }
}

const partition = (arr, start, end) => {
    let p = start;
    let pivot = arr[end];
    for (let i = start; i < end; i++) {
        if (arr[i] <= pivot) {
            let temp = arr[i];
            arr[i] = arr[p];
            arr[p] = temp;
            p++;

        }
    }
    let temp = arr[p];
    arr[p] = arr[end];
    arr[end] = temp;
    return p;
}

// Merge Sort
const Merge = (left, right) => {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return Merge(mergeSort(left), mergeSort(right));

}
module.exports = {
    bubbleSort,
    countSort,
    insertionSort,
    selectionSort,
    quickSort,
    mergeSort
};