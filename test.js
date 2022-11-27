const { bubbleSort } 
= require('./Sorting/index.js')

describe('Unit test for bubble sort', () => {
    test('Empty array', () => {
        let arr = [];
        expect(bubbleSort(arr)).toEqual(arr);
    })
    test('Single Element array', () => {
        let arr = [1];
        expect(bubbleSort(arr)).toEqual(arr);
    })
    test('Sort array', () => {
        let arr = [807, 249, 73, 658, 930, 272, 544, 878, 923, 709];
        let sortArr = [73, 249, 272, 544, 658, 709, 807, 878, 923, 930];
        expect(bubbleSort(arr)).toEqual(sortArr);
    })
})