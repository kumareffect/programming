let arr = [0, 1, 2, 3, 0, 3, 0, 0]
let shiftedArr = [];
let zero = [];

function shift0toRight() {
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] !== 0) {
            shiftedArr.push(arr[i]);
        }
        else {
            zero.push(0);
        }
    }
    
  const ans = shiftedArr.concat(zero);

    console.log(ans);
}

shift0toRight();