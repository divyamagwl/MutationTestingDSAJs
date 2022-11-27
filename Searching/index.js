// Binary Search
const binarySearch = (arr, itemToSearch) => {
    let first = 0;
    let last = arr.length - 1;
    let mid = parseInt((first + last) / 2);
    while (first <= last) {
        if (itemToSearch < arr[mid]) last = mid - 1;
        else if (itemToSearch > arr[mid]) first = mid + 1;
        else
            return {
                present: true,
                index: parseInt(mid + 1)
            };
        mid = parseInt((first + last) / 2);
    }
    return {
        present: false
    };
}

module.exports = {
    binarySearch,
}