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
    
    for(let i=0; i<n; i++){
        if(arr[i]>maxElement){
            maxElement=arr[i];
        }
    }

    let counts = new Array(maxElement+1);

    for(let i=0; i<=maxElement; i++){
        counts[i]=0;
    }

    for(let i=0; i<n; i++){
        counts[arr[i]]++;
    }

    let newArray = new Array(n);
    
    let c=0;

    for(let i=0; i<=maxElement; i++){
        while(counts[i]>0){
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
  
      // If the current minimum index is not the minimum index you started with, swap the elements.
      if (min_index != i) {
        let temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
      }
    }
    return arr;
}

module.exports = {
    bubbleSort,
    countSort,
    insertionSort,
    selectionSort
};