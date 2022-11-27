const { 
    binarySearch,  
    linearSearch
} 
= require('../Searching/index.js')

describe('Testing for binary search', () => {
    test('Sorted array size 10', () => {
        let arr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];

        let res = binarySearch(arr, 0);
        expect(res.present).toEqual(true);
        expect(res.index).toEqual(0);

        res = binarySearch(arr, 930);
        expect(res.present).toEqual(true);
        expect(res.index).toEqual(9);

        res = binarySearch(arr, 658);
        expect(res.present).toEqual(true);
        expect(res.index).toEqual(4);

        res = binarySearch(arr, 709);
        expect(res.present).toEqual(true);
        expect(res.index).toEqual(5);

        res = binarySearch(arr, 1000);
        expect(res.present).toEqual(false);
    })
})

describe('Testing for linear search', () => {
    test('Unsorted array size 10', () => {
        let arr = [807, 249, 0, 658, 930, 272, 544, 878, 923, 709];

        let res = linearSearch(arr, 0);
        expect(res.present).toEqual(true);
        expect(res.index).toEqual(2);

        res = linearSearch(arr, 930);
        expect(res.present).toEqual(true);
        expect(res.index).toEqual(4);

        res = linearSearch(arr, 807);
        expect(res.present).toEqual(true);
        expect(res.index).toEqual(0);

        res = linearSearch(arr, 709);
        expect(res.present).toEqual(true);
        expect(res.index).toEqual(9);

        res = linearSearch(arr, 1000);
        expect(res.present).toEqual(false);
    })
})
