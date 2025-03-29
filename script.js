function reverseString(a) {
    let reverseWord = "";
    for(let i = 1; i<=a.length; i++) {
        reverseWord += a.charAt(a.length - i); 
    }
    console.log("Reverse Word = " + reverseWord);
 }

reverseString("rotator");