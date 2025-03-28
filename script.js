let string = "";

function hollowSquareShape(n) {
    for(let i = 0; i<=n; i++) {
        for(let j = 0; j<=n; j++) {
            if (i === 0 || i === n || j === 0 || j === n) {
            string += "*";
          } else {
            string += " ";
          }
        }
        string += '\n';
    }
    console.log(string);
}

hollowSquareShape(6);
