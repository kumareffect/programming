function reverseArray(arr) {
    let reversedArr = [];
    for(let i=arr.length-1; i>=0; i--) {
        reversedArr.push(arr[i]);
    }
    for(revArr of reversedArr) {
        console.log(revArr);
    }
}

reverseArray([1, 2, 3, 4, 5, 6, 7]);