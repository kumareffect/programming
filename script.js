function diamondShape(n) {
    let string = "";

    // Triangle 1 (up to down)
    for(let i=0; i<=n; i++) {
        for(j = 0; j<n-i; j++) {
            string += " ";
        }

        for(k=0; k<(i * 2) -1; k++) {
            string += "*";
        }

        string += "\n";
    }

    // Triangle 2 (down to up)
    for(let i=0; i<=n; i++) {
        for(j = 0; j<i; j++) {
            string += " ";
        }

        for(k=0; k<(n - i) * 2 -1; k++) {
            string += "*";
        }

        string += "\n";
    }

    console.log(string);
}

diamondShape(6);