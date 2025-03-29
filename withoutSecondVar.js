function shift0toRight(arr) {
    let nonZeroIndex = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[nonZeroIndex];
            arr[nonZeroIndex] = temp;
            nonZeroIndex++;
        }
    }
    console.log(arr);
}

shift0toRight([0, 1, 2, 3, 0, 0, 4, 0]);