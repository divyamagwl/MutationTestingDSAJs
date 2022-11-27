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

module.exports = {
    bubbleSort,
    countSort,
    insertionSort
};