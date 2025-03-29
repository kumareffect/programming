function checkStrong(num) {
    let singleDigitArray = [];
    let duplicateNum = num;
    let factoSumOfAll = 0
    
    // for taking out last digit
    while(duplicateNum !== 0) {
        singleDigitArray.push(duplicateNum % 10);
        duplicateNum = Math.floor(duplicateNum / 10);
    }
    
    // for one by one backdown;
    for(let i = 0; i<singleDigitArray.length; i++) {
        let factoStore = 1;

        while(singleDigitArray[i] !== 0) {
           factoStore *= singleDigitArray[i]--;
        }
        factoSumOfAll += factoStore;
    }

    if(num === factoSumOfAll) {
        console.log("It's a strong number")
    } else {
        console.log("It's not")
    }

}

checkStrong(145);