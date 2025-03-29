function checkPrime(num) {
    let isPrime = true;

    if(num < 2) isPrime = false;

    for(let i = 2; i<Math.sqrt(num); i++) {
        if(num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        console.log("Number is prime");
    } else {
        console.log("Not prime");
    }
}

checkPrime(1)