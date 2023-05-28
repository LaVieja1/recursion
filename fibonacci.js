function fibs(n) {
    if (n <= 0) {
        return 'Debe ser mas grande que 0';
    }
    const arr = [0, 1];
    for (let i = 2; i <= n - 1; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }

    return arr;
}

function fibsReC(n) {
    if (n <= 0) {
        return 'Debe ser mas grande que 0';
    } else if (n <= 1) {
        return [0];
    } else if (n <= 2) {
        return [0, 1];
    } else {
        return [...fibsReC(n - 1), fibsReC(n - 1)[n-2] + fibsReC(n - 1)[n-3]];
    };
}

console.log('Iterativo');
console.log(fibs(0));
console.log(fibs(5));
console.log(fibs(8));

console.log('Recursion');
console.log(fibsReC(0));
console.log(fibsReC(5));
console.log(fibsReC(8));