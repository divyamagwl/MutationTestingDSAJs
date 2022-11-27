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
    combSort
} 
= require('./Sorting/index.js')

describe('Unit test for bubble sort', () => {
    test('Empty array', () => {
        let arr = [];
        expect(bubbleSort(arr)).toBe(arr);
    })
    test('Single Element array', () => {
        let arr = [1];
        expect(bubbleSort(arr)).toBe(arr);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(bubbleSort(arr)).toEqual(sortArr);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(bubbleSort(arr)).toEqual(sortArr);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(bubbleSort(arr)).toBe(arr);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(bubbleSort(arr)).toEqual(sortArr);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(bubbleSort(arr)).toEqual(sortArr);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(bubbleSort(arr)).toEqual(sortArr);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        expect(bubbleSort(arr)).toBe(arr);
    })
})

describe('Unit test for count sort', () => {
    test('Empty array', () => {
        let arr = [];
        expect(countSort(arr)).toEqual(arr);
    })
    test('Single Element array', () => {
        let arr = [1];
        expect(countSort(arr)).toEqual(arr);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(countSort(arr)).toEqual(sortArr);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(countSort(arr)).toEqual(sortArr);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(countSort(arr)).toEqual(arr);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(countSort(arr)).toEqual(sortArr);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        expect(countSort(arr)).toEqual(arr);
    })
})

describe('Unit test for insertion sort', () => {
    test('Empty array', () => {
        let arr = [];
        expect(insertionSort(arr)).toBe(arr);
    })
    test('Single Element array', () => {
        let arr = [1];
        expect(insertionSort(arr)).toBe(arr);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(insertionSort(arr)).toEqual(sortArr);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(insertionSort(arr)).toEqual(sortArr);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(insertionSort(arr)).toBe(arr);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(insertionSort(arr)).toEqual(sortArr);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(insertionSort(arr)).toEqual(sortArr);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(insertionSort(arr)).toEqual(sortArr);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        expect(insertionSort(arr)).toBe(arr);
    })
})

describe('Unit test for selection sort', () => {
    test('Empty array', () => {
        let arr = [];
        expect(selectionSort(arr)).toBe(arr);
    })
    test('Single Element array', () => {
        let arr = [1];
        expect(selectionSort(arr)).toBe(arr);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(selectionSort(arr)).toEqual(sortArr);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(selectionSort(arr)).toEqual(sortArr);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(selectionSort(arr)).toEqual(arr);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(selectionSort(arr)).toEqual(sortArr);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(selectionSort(arr)).toEqual(sortArr);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(selectionSort(arr)).toEqual(sortArr);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        expect(selectionSort(arr)).toBe(arr);
    })
})

describe('Unit test for quick sort', () => {
    test('Empty array', () => {
        let arr = [];
        expect(quickSort(arr)).toBe(arr);
    })
    test('Single Element array', () => {
        let arr = [1];
        expect(quickSort(arr)).toBe(arr);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(quickSort(arr)).toEqual(sortArr);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(quickSort(arr)).toEqual(sortArr);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(quickSort(arr)).toEqual(arr);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(quickSort(arr)).toEqual(sortArr);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(quickSort(arr)).toEqual(sortArr);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(quickSort(arr)).toEqual(sortArr);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        expect(quickSort(arr)).toBe(arr);
    })
})

describe('Unit test for merge sort', () => {
    test('Empty array', () => {
        let arr = [];
        expect(mergeSort(arr)).toBe(arr);
    })
    test('Single Element array', () => {
        let arr = [1];
        expect(mergeSort(arr)).toBe(arr);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(mergeSort(arr)).toEqual(sortArr);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(mergeSort(arr)).toEqual(sortArr);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(mergeSort(arr)).toEqual(arr);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(mergeSort(arr)).toEqual(sortArr);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(mergeSort(arr)).toEqual(sortArr);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(mergeSort(arr)).toEqual(sortArr);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        expect(mergeSort(arr)).toEqual(arr);
    })
})

describe('Unit test for heap sort', () => {
    test('Empty array', () => {
        let arr = [];
        expect(heapSort(arr)).toBe(arr);
    })
    test('Single Element array', () => {
        let arr = [1];
        expect(heapSort(arr)).toBe(arr);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(heapSort(arr)).toEqual(sortArr);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(heapSort(arr)).toEqual(sortArr);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(heapSort(arr)).toEqual(arr);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(heapSort(arr)).toEqual(sortArr);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(heapSort(arr)).toEqual(sortArr);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(heapSort(arr)).toEqual(sortArr);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        expect(heapSort(arr)).toEqual(arr);
    })
})

describe('Unit test for bucket sort', () => {
    test('Empty array', () => {
        let arr = [];
        expect(bucketSort(arr)).toBe(arr);
    })
    test('Single Element array', () => {
        let arr = [1];
        expect(bucketSort(arr)).toBe(arr);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(bucketSort(arr)).toEqual(sortArr);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(bucketSort(arr)).toEqual(sortArr);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(bucketSort(arr)).toEqual(arr);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(bucketSort(arr)).toEqual(sortArr);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(bucketSort(arr)).toEqual(sortArr);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(bucketSort(arr)).toEqual(sortArr);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        expect(bucketSort(arr)).toEqual(arr);
    })
})

describe('Unit test for odd even sort', () => {
    test('Empty array', () => {
        let arr = [];
        expect(oddEvenSort(arr)).toBe(arr);
    })
    test('Single Element array', () => {
        let arr = [1];
        expect(oddEvenSort(arr)).toBe(arr);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(oddEvenSort(arr)).toEqual(sortArr);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(oddEvenSort(arr)).toEqual(sortArr);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(oddEvenSort(arr)).toEqual(arr);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(oddEvenSort(arr)).toEqual(sortArr);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(oddEvenSort(arr)).toEqual(sortArr);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(oddEvenSort(arr)).toEqual(sortArr);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        expect(oddEvenSort(arr)).toEqual(arr);
    })
})

describe('Unit test for shell sort', () => {
    test('Empty array', () => {
        let arr = [];
        expect(shellSort(arr)).toBe(arr);
    })
    test('Single Element array', () => {
        let arr = [1];
        expect(shellSort(arr)).toBe(arr);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(shellSort(arr)).toEqual(sortArr);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(shellSort(arr)).toEqual(sortArr);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(shellSort(arr)).toEqual(arr);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(shellSort(arr)).toEqual(sortArr);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(shellSort(arr)).toEqual(sortArr);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(shellSort(arr)).toEqual(sortArr);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        expect(shellSort(arr)).toEqual(arr);
    })
})

describe('Unit test for comb sort', () => {
    test('Empty array', () => {
        let arr = [];
        expect(combSort(arr)).toBe(arr);
    })
    test('Single Element array', () => {
        let arr = [1];
        expect(combSort(arr)).toBe(arr);
    })
    test('Sort array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(combSort(arr)).toEqual(sortArr);
    })
    test('Sort array size 100', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709, 440, 165, 492, 42, 987, 503, 327, 729, 840, 612, 303, 169, 709, 157, 560, 933, 99, 278, 816, 335, 97, 826, 512, 267, 810, 633, 979, 149, 579, 821, 967, 672, 393, 336, 485, 745, 228, 91, 194, 357, 1, 153, 708, 944, 668, 490, 124, 196, 530, 903, 722, 666, 549, 24, 801, 853, 977, 408, 228, 933, 298, 981, 635, 13, 865, 814, 63, 536, 425, 669, 115, 94, 629, 501, 517, 195, 105, 404, 451, 298, 188, 123, 505, 882, 752, 566, 716, 337, 438, 144]
        let sortArr = [1, 13, 24, 42, 63, 73, 91, 94, 97, 99, 105, 115, 123, 124, 144, 149, 153, 157, 165, 169, 188, 194, 195, 196, 228, 228, 249, 267, 272, 278, 298, 298, 303, 327, 335, 336, 337, 357, 393, 404, 408, 425, 438, 440, 451, 485, 490, 492, 501, 503, 505, 512, 517, 530, 536, 544, 549, 560, 566, 579, 612, 629, 633, 635, 658, 666, 668, 669, 672, 708, 709, 709, 716, 722, 729, 745, 752, 801, 807, 810, 814, 816, 821, 826, 840, 853, 865, 878, 882, 903, 923, 930, 933, 933, 944, 967, 977, 979, 981, 987]
        expect(combSort(arr)).toEqual(sortArr);
    })
    test('Already sorted array', () => {
        let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(combSort(arr)).toEqual(arr);
    })
    test('Sorted descending array', () => {
        let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        let sortArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        expect(combSort(arr)).toEqual(sortArr);
    })
    test('Sort array with neg elements', () => {
        let arr = [-868, 865, 752, -383, 449, 734, -581, 537, 295, -682, 78, 638, -914, 105, 198]
        let sortArr = [-914, -868, -682, -581, -383, 78, 105, 198, 295, 449, 537, 638, 734, 752, 865]
        expect(combSort(arr)).toEqual(sortArr);
    })
    test('Sort array with all neg elements', () => {
        let arr = [-10, -12, -5, -6, -5, -8]
        let sortArr = [-12, -10, -8, -6, -5, -5]
        expect(combSort(arr)).toEqual(sortArr);
    })
    test('Same Element array', () => {
        let arr = [2, 2, 2, 2, 2];
        expect(combSort(arr)).toEqual(arr);
    })
})
