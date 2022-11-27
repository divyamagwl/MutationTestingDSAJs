const { 
    binarySearch,  
} 
= require('../Searching/index.js')

describe('Testing for binary search', () => {
    test('Sorted array size 10', () => {
        let arr = [0, 249, 272, 544, 658, 709, 807, 878, 923, 930];

        let res = binarySearch(arr, 0);
        expect(res.present).toEqual(true);
        expect(res.index).toEqual(1);

        res = binarySearch(arr, 930);
        expect(res.present).toEqual(true);
        expect(res.index).toEqual(10);

        res = binarySearch(arr, 658);
        expect(res.present).toEqual(true);
        expect(res.index).toEqual(5);

        res = binarySearch(arr, 709);
        expect(res.present).toEqual(true);
        expect(res.index).toEqual(6);

        res = binarySearch(arr, 1000);
        expect(res.present).toEqual(false);
    })
})
