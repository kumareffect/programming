/* 
n * facto(n-1)

5 = 5 * 24 = 120  ← Final answer
4 = 4 * 6 = 24    ↑
3 = 3 * 2 = 6     ↑
2 = 2 * 1 = 2     ↑ (Unwinding the recursion)
1 = 1 * 1 = 1     ← Base case

Compute From base to top
*/

function facto(n) {
    if(n===1 || n===0) return 1;   // to break

    return n* facto(n-1);  // to reduce so it can break later
} 

console.log(facto(5));