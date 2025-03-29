function checkArmStrong(num) {
    let count = 0;
    let singleDigitArray = [];
    let sumValue = 0;
    let duplicateNum = num;

    // Count and Single Digit Separator
    while(duplicateNum !== 0) {
        count++;
        singleDigitArray.push(duplicateNum % 10);
        duplicateNum = Math.floor(duplicateNum / 10);
    }

    // Nested loop with Single Digit and How many times Count
    for(i=0; i<singleDigitArray.length; i++) {
        let multValue = 1;                // **Always keep in mind to reset
        for(j=0; j<count; j++) {
            multValue *= singleDigitArray[i];
        }
        sumValue += multValue;
    }

    console.log(sumValue);

}

checkArmStrong(153);