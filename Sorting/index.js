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

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return Merge(mergeSort(left), mergeSort(right));

}

// Heap Sort
const heapSort = (arr) => {
    var N = arr.length;

    // Build heap (rearrange array)
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
        heapify(arr, N, i);

    // One by one extract an element from heap
    for (var i = N - 1; i > 0; i--) {
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
const heapify = (arr, N, i) => {
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < N && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < N && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(arr, N, largest);
    }
}

// Bucket Sort
const bucketSort = arr => {
    if (arr.length === 0) {
        return arr;
    }
    let i,
        minValue = arr[0],
        maxValue = arr[0],
        bucketSize = 5;
    arr.forEach(function (currentVal) {
        if (currentVal < minValue) {
            minValue = currentVal;
        } else if (currentVal > maxValue) {
            maxValue = currentVal;
        }
    })
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let allBuckets = new Array(bucketCount);
    for (i = 0; i < allBuckets.length; i++) {
        allBuckets[i] = [];
    }
    arr.forEach(function (currentVal) {
        allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
    });
    arr.length = 0;
    allBuckets.forEach(function (bucket) {
        insertion(bucket);
        bucket.forEach(function (element) {
            arr.push(element)
        });
    });
    return arr;
}

const insertion = arr => {
    let length = arr.length;
    let i, j;
    for (i = 1; i < length; i++) {
        let temp = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
};

// Odd even sort
const oddEvenSort = (arr) => {
    n = arr.length
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;
        let temp = 0;

        // Perform Bubble sort on odd indexed element
        for (let i = 1; i <= n - 2; i = i + 2) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isSorted = false;
            }
        }

        // Perform Bubble sort on even indexed element
        for (let i = 0; i <= n - 2; i = i + 2) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isSorted = false;
            }
        }
    }

    return arr;
}

// Shell Sort
const shellSort = (arr) => {
    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];

            while (j >= increment && arr[j - increment] > temp) {
                arr[j] = arr[j - increment];
                j = j - increment;
            }

            arr[j] = temp;
        }

        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment * 5 / 11);
        }
    }
    return arr;
}

// Comb Sort
const combSort = (arr) => {
    const is_array_sorted = (arr) => {
        var sorted = true;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                sorted = false;
                break;
            }
        }
        return sorted;
    }

    var iteration_count = 0;
    var gap = arr.length - 2;
    var decrease_factor = 1.25;

    // Repeat iterations Until array is not sorted

    while (!is_array_sorted(arr)) {
        // If not first gap  Calculate gap
        if (iteration_count > 0)
            gap = (gap == 1) ? gap : Math.floor(gap / decrease_factor);

        // Set front and back elements and increment to a gap
        var front = 0;
        var back = gap;
        while (back <= arr.length - 1) {
            // Swap the elements if they are not ordered

            if (arr[front] > arr[back]) {
                var temp = arr[front];
                arr[front] = arr[back];
                arr[back] = temp;
            }

            // Increment and re-run swapping

            front += 1;
            back += 1;
        }
        iteration_count += 1;
    }
    return arr;
}

// Pigeonhole Sort
const pigeonholeSort = (nums) => {
    if(nums.length == 0) return [];
    let min_val = nums[0]
    let max_val = nums[0]
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max_val) {max_val = nums[i]}
      if (nums[i] < min_val) {min_val = nums[i]}
    }
  
    const range = max_val - min_val + 1
    const data = Array(range).fill(0)
  
    for (let i = 0; i < nums.length; i++) {
      data[nums[i] - min_val]++
    }
  
    let index = 0
  
    for (let j = 0; j < range; j++) {
      while (data[j]-- > 0) {
        nums[index++] = j + min_val
      }
    }
    return nums
}


module.exports = {
    bubbleSort,
    countSort,
    insertionSort,
    selectionSort,
    quickSort,
    mergeSort,
    heapSort,
    bucketSort,
    oddEvenSort,
    shellSort,
    combSort,
    pigeonholeSort
};