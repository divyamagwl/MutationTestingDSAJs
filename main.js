const { 
    bubbleSort
} 
= require('./Sorting/index.js')

function main() {

    console.log("SORTING ALGORITHMS")

    var arr1 = [3, 0, 2, 5, -1, 4, 1, 10, 20];
    console.log("Bubble Sort");
    console.log(bubbleSort(arr1));

}

main()