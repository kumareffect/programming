let string = "";

function hollowSquareShape(n) {
    for(let i = 0; i<=n; i++) {
        for(let j = 0; j<=n; j++) {
            if(j===i && j===n) {
                string+="*";
            }
            else {
                string+=" ";
            }
        }
        string+="\n";


        for(let k=0; k<=n; k++) {
            if(k===i && k===n) {
                string+="*"
            }
            else {
                string +=" ";
            }
        }
        string+="\n";

    }
    console.log(string);
}

hollowSquareShape(6);