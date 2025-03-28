let string = "";

function squareShape(n) {    
    for(let i=0; i<=n; i++){
        for(let j=0; j<=n; j++) {
            string += "* ";
        }
        string += "\n";
    }
    console.log(string);
}

squareShape(6);