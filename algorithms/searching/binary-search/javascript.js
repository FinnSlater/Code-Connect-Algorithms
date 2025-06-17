// input: { arr: [...], target: int }
function binary_search(input]){
    const { arr, target } = input
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] === target) {
            // found the target
            return middle;
        } else if (arr[middle] < target) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    // target wasn't found
    return -1;
}
