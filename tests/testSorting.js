const { 
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
} 
= require('../Sorting/index.js')

const isEqArrays = (a1, a2) => {
    if (a1.length !== a2.length) {
        return false;
    }
    for (var i = a1.length; i--;) {
        if (a1[i] !== a2[i]) {
            return false;
        }
    }
    return true;
}

describe('Unit test for bubble sort', () => {
    test('Empty array', () => {
        let arr = [];
        let sortArr = [];
        expect(isEqArrays(bubbleSort(arr), sortArr)).toEqual(true);
    })
    test('Single Element array', () => {
        let arr = [1];
        let sortArr = [1];
        expect(isEqArrays(bubbleSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(isEqArrays(bubbleSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(isEqArrays(bubbleSort(arr), sortArr)).toEqual(true);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(bubbleSort(arr), sortArr)).toEqual(true);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(bubbleSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(isEqArrays(bubbleSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(isEqArrays(bubbleSort(arr), sortArr)).toEqual(true);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        let sortArr = [2, 2, 2, 2, 2];
        expect(isEqArrays(bubbleSort(arr), sortArr)).toEqual(true);
    })
})

describe('Unit test for count sort', () => {
    test('Empty array', () => {
        let arr = [];
        let sortArr = [];
        expect(isEqArrays(countSort(arr), sortArr)).toEqual(true);
    })
    test('Single Element array', () => {
        let arr = [1];
        let sortArr = [1];
        expect(isEqArrays(countSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(isEqArrays(countSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(isEqArrays(countSort(arr), sortArr)).toEqual(true);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(countSort(arr), sortArr)).toEqual(true);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(countSort(arr), sortArr)).toEqual(true);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        let sortArr = [2, 2, 2, 2, 2];
        expect(isEqArrays(countSort(arr), sortArr)).toEqual(true);
    })
})

describe('Unit test for insertion sort', () => {
    test('Empty array', () => {
        let arr = [];
        let sortArr = [];
        expect(isEqArrays(insertionSort(arr), sortArr)).toEqual(true);
    })
    test('Single Element array', () => {
        let arr = [1];
        let sortArr = [1];
        expect(isEqArrays(insertionSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(isEqArrays(insertionSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(isEqArrays(insertionSort(arr), sortArr)).toEqual(true);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(insertionSort(arr), sortArr)).toEqual(true);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(insertionSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(isEqArrays(insertionSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(isEqArrays(insertionSort(arr), sortArr)).toEqual(true);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        let sortArr = [2, 2, 2, 2, 2];
        expect(isEqArrays(insertionSort(arr), sortArr)).toEqual(true);
    })
})

describe('Unit test for selection sort', () => {
    test('Empty array', () => {
        let arr = [];
        let sortArr = [];
        expect(isEqArrays(selectionSort(arr), sortArr)).toEqual(true);
    })
    test('Single Element array', () => {
        let arr = [1];
        let sortArr = [1];
        expect(isEqArrays(selectionSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(isEqArrays(selectionSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(isEqArrays(selectionSort(arr), sortArr)).toEqual(true);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(selectionSort(arr), sortArr)).toEqual(true);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(selectionSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(isEqArrays(selectionSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(isEqArrays(selectionSort(arr), sortArr)).toEqual(true);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        let sortArr = [2, 2, 2, 2, 2];
        expect(isEqArrays(selectionSort(arr), sortArr)).toEqual(true);
    })
})

describe('Unit test for quick sort', () => {
    test('Empty array', () => {
        let arr = [];
        let sortArr = [];
        expect(isEqArrays(quickSort(arr), sortArr)).toEqual(true);
    })
    test('Single Element array', () => {
        let arr = [1];
        let sortArr = [1];
        expect(isEqArrays(quickSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(isEqArrays(quickSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(isEqArrays(quickSort(arr), sortArr)).toEqual(true);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(quickSort(arr), sortArr)).toEqual(true);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(quickSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(isEqArrays(quickSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(isEqArrays(quickSort(arr), sortArr)).toEqual(true);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        let sortArr = [2, 2, 2, 2, 2];
        expect(isEqArrays(quickSort(arr), sortArr)).toEqual(true);
    })
})

describe('Unit test for merge sort', () => {
    test('Empty array', () => {
        let arr = [];
        let sortArr = [];
        expect(isEqArrays(mergeSort(arr), sortArr)).toEqual(true);
    })
    test('Single Element array', () => {
        let arr = [1];
        let sortArr = [1];
        expect(isEqArrays(mergeSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(isEqArrays(mergeSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(isEqArrays(mergeSort(arr), sortArr)).toEqual(true);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(mergeSort(arr), sortArr)).toEqual(true);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(mergeSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(isEqArrays(mergeSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(isEqArrays(mergeSort(arr), sortArr)).toEqual(true);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        let sortArr = [2, 2, 2, 2, 2];
        expect(isEqArrays(mergeSort(arr), sortArr)).toEqual(true);
    })
})

describe('Unit test for heap sort', () => {
    test('Empty array', () => {
        let arr = [];
        let sortArr = [];
        expect(isEqArrays(heapSort(arr), sortArr)).toEqual(true);
    })
    test('Single Element array', () => {
        let arr = [1];
        let sortArr = [1];
        expect(isEqArrays(heapSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(isEqArrays(heapSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(isEqArrays(heapSort(arr), sortArr)).toEqual(true);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(heapSort(arr), sortArr)).toEqual(true);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(heapSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(isEqArrays(heapSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(isEqArrays(heapSort(arr), sortArr)).toEqual(true);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        let sortArr = [2, 2, 2, 2, 2];
        expect(isEqArrays(heapSort(arr), sortArr)).toEqual(true);
    })
})

describe('Unit test for bucket sort', () => {
    test('Empty array', () => {
        let arr = [];
        let sortArr = [];
        expect(isEqArrays(bucketSort(arr), sortArr)).toEqual(true);
    })
    test('Single Element array', () => {
        let arr = [1];
        let sortArr = [1];
        expect(isEqArrays(bucketSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(isEqArrays(bucketSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(isEqArrays(bucketSort(arr), sortArr)).toEqual(true);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(bucketSort(arr), sortArr)).toEqual(true);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(bucketSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(isEqArrays(bucketSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(isEqArrays(bucketSort(arr), sortArr)).toEqual(true);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        let sortArr = [2, 2, 2, 2, 2];
        expect(isEqArrays(bucketSort(arr), sortArr)).toEqual(true);
    })
})

describe('Unit test for odd even sort', () => {
    test('Empty array', () => {
        let arr = [];
        let sortArr = [];
        expect(isEqArrays(oddEvenSort(arr), sortArr)).toEqual(true);
    })
    test('Single Element array', () => {
        let arr = [1];
        let sortArr = [1];
        expect(isEqArrays(oddEvenSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(isEqArrays(oddEvenSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(isEqArrays(oddEvenSort(arr), sortArr)).toEqual(true);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(oddEvenSort(arr), sortArr)).toEqual(true);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(oddEvenSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(isEqArrays(oddEvenSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(isEqArrays(oddEvenSort(arr), sortArr)).toEqual(true);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        let sortArr = [2, 2, 2, 2, 2];
        expect(isEqArrays(oddEvenSort(arr), sortArr)).toEqual(true);
    })
})

describe('Unit test for shell sort', () => {
    test('Empty array', () => {
        let arr = [];
        let sortArr = [];
        expect(isEqArrays(shellSort(arr), sortArr)).toEqual(true);
    })
    test('Single Element array', () => {
        let arr = [1];
        let sortArr = [1];
        expect(isEqArrays(shellSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(isEqArrays(shellSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(isEqArrays(shellSort(arr), sortArr)).toEqual(true);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(shellSort(arr), sortArr)).toEqual(true);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(shellSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(isEqArrays(shellSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(isEqArrays(shellSort(arr), sortArr)).toEqual(true);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        let sortArr = [2, 2, 2, 2, 2];
        expect(isEqArrays(shellSort(arr), sortArr)).toEqual(true);
    })
})

describe('Unit test for comb sort', () => {
    test('Empty array', () => {
        let arr = [];
        let sortArr = [];
        expect(isEqArrays(combSort(arr), sortArr)).toEqual(true);
    })
    test('Single Element array', () => {
        let arr = [1];
        let sortArr = [1];
        expect(isEqArrays(combSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(isEqArrays(combSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(isEqArrays(combSort(arr), sortArr)).toEqual(true);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(combSort(arr), sortArr)).toEqual(true);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(combSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with neg elements', () => {
        let arr = [-214, 908, 193, -974, 923, 679, -892, 794, 121, -243, 621, 848, -634, 384, 901, -172, 114, 260, -980, 400, 596, -339, 486, 361, -641, 712, 878, -410, 662, 312, -863, 561, 645, -972, 188, 641, -250, 686, 16, -128, 886, 130, -578, 43, 959, -53, 638, 128, -816, 2, 152, -758, 868, 984, -475, 888, 629, -24, 197, 445, -790, 939, 943, -262, 172, 428, -493, 375, 19, -849, 909, 26, -449, 487, 593, -865, 827, 86, -360, 51, 916, -513, 381, 203, -682, 658, 244, -482, 957, 248, -759, 85, 879, -510, 593, 697, -133, 271, 66]
        let sortArr = [-980, -974, -972, -892, -865, -863, -849, -816, -790, -759, -758, -682, -641, -634, -578, -513, -510, -493, -482, -475, -449, -410, -360, -339, -262, -250, -243, -214, -172, -133, -128, -53, -24, 2, 16, 19, 26, 43, 51, 66, 85, 86, 114, 121, 128, 130, 152, 172, 188, 193, 197, 203, 244, 248, 260, 271, 312, 361, 375, 381, 384, 400, 428, 445, 486, 487, 561, 593, 593, 596, 621, 629, 638, 641, 645, 658, 662, 679, 686, 697, 712, 794, 827, 848, 868, 878, 879, 886, 888, 901, 908, 909, 916, 923, 939, 943, 957, 959, 984]
        expect(isEqArrays(combSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(isEqArrays(combSort(arr), sortArr)).toEqual(true);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        let sortArr = [2, 2, 2, 2, 2];
        expect(isEqArrays(combSort(arr), sortArr)).toEqual(true);
    })
})

describe('Unit test for pigeonhole sort', () => {
    test('Empty array', () => {
        let arr = [];
        let sortArr = [];
        expect(isEqArrays(pigeonholeSort(arr), sortArr)).toEqual(true);
    })
    test('Single Element array', () => {
        let arr = [1];
        let sortArr = [1];
        expect(isEqArrays(pigeonholeSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(isEqArrays(pigeonholeSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(isEqArrays(pigeonholeSort(arr), sortArr)).toEqual(true);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(pigeonholeSort(arr), sortArr)).toEqual(true);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(isEqArrays(pigeonholeSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with neg elements', () => {
        let arr = [-214, 908, 193, -974, 923, 679, -892, 794, 121, -243, 621, 848, -634, 384, 901, -172, 114, 260, -980, 400, 596, -339, 486, 361, -641, 712, 878, -410, 662, 312, -863, 561, 645, -972, 188, 641, -250, 686, 16, -128, 886, 130, -578, 43, 959, -53, 638, 128, -816, 2, 152, -758, 868, 984, -475, 888, 629, -24, 197, 445, -790, 939, 943, -262, 172, 428, -493, 375, 19, -849, 909, 26, -449, 487, 593, -865, 827, 86, -360, 51, 916, -513, 381, 203, -682, 658, 244, -482, 957, 248, -759, 85, 879, -510, 593, 697, -133, 271, 66]
        let sortArr = [-980, -974, -972, -892, -865, -863, -849, -816, -790, -759, -758, -682, -641, -634, -578, -513, -510, -493, -482, -475, -449, -410, -360, -339, -262, -250, -243, -214, -172, -133, -128, -53, -24, 2, 16, 19, 26, 43, 51, 66, 85, 86, 114, 121, 128, 130, 152, 172, 188, 193, 197, 203, 244, 248, 260, 271, 312, 361, 375, 381, 384, 400, 428, 445, 486, 487, 561, 593, 593, 596, 621, 629, 638, 641, 645, 658, 662, 679, 686, 697, 712, 794, 827, 848, 868, 878, 879, 886, 888, 901, 908, 909, 916, 923, 939, 943, 957, 959, 984]
        expect(isEqArrays(pigeonholeSort(arr), sortArr)).toEqual(true);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(isEqArrays(pigeonholeSort(arr), sortArr)).toEqual(true);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        let sortArr = [2, 2, 2, 2, 2];
        expect(isEqArrays(pigeonholeSort(arr), sortArr)).toEqual(true);
    })
})
