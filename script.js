const arr = [1, 2, 3, 3, 4, 5, 6, 4, 3];
const filteredArray = [];

function removeDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                isDuplicate = true;
                break; // Exit inner loop once duplicate is found
            }
        }
        if (!isDuplicate) {
            filteredArray.push(arr[i]); // Add only non-duplicates
        }
    }
    for (let i = 0; i < filteredArray.length; i++) {
        console.log(filteredArray[i]);
    }
}

removeDuplicate(arr); // Pass arr as argument