
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if target is present at mid

        if (arr[mid] === target) {
            return mid;
        }

        // If target greater, ignore left half

        if (arr[mid] < target) {
            left = mid + 1;
        } else {        // If target is smaller, ignore right half
            right = mid - 1;
        }
    }

    // If target is not present in array

    return -1;
}

module.exports = binarySearch;
