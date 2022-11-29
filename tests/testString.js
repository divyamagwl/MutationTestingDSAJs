const { 
    isAnagram,
    reverseString
} 
= require('../Strings/index.js')

describe('Testing for anagrams', () => {
    test('Strings are anagram', () => {
        let s1 = "care";
        let s2 = "race";
        expect(isAnagram(s1, s2)).toEqual(true);
    })

    test('Strings are not anagram', () => {
        let s1 = "care";
        let s2 = "pair";
        expect(isAnagram(s1, s2)).toEqual(false);
    })

    test('Strings are of different length', () => {
        let s1 = "care";
        let s2 = "pairs";
        expect(isAnagram(s1, s2)).toEqual(false);
    })
})

describe('Testing for reverse string', () => {
    test('String is reversed', () => {
        let s1 = "plane";
        let s2 = "enalp";
        expect(reverseString(s1)).toEqual(s2);
    })
})

