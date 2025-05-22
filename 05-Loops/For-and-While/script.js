

function countOneToX(x) {
    for (i = 1; i <= x; i++) {
        console.log(i);
        for (j = i; j <= x; j++) {
            console.log(j);
        }
    }
}


countOneToX(25)