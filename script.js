let string = "";

function hollowCross(n) {
    for(let i=0; i<=n; i++) {
        for(let j=0; j<=n; j++) {
            if(i===j  ||  j === n-i){
                string += "*";
            } else {
                string+=" ";
            }
        }
        string+="\n";
    }
    console.log(string);
}

hollowCross(6);