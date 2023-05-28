function mergeSort(array) {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

function merge(leftArray, rightArray) {
    let mergeArray = [];

    while (leftArray.length > 0 && rightArray.length > 0) {
        let arrayMin = leftArray[0] < rightArray[0] ? leftArray : rightArray;
        let mergeElement = arrayMin.shift();

        mergeArray.push(mergeElement);
    }

    return mergeArray.concat(leftArray, rightArray);
}

console.log(mergeSort([])) // []
console.log([10, 7, 8, 9, 1, 5]);
console.log(mergeSort([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
console.log([30, 20, 10, 50, 22, 33, 55]);
console.log(mergeSort([30, 20, 10, 50, 22, 33, 55])); //[10, 20, 22, 30, 33, 50, 55]