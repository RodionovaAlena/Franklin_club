let n = 52;

for (i = 65; i < 65+n; i++) {

    if (i <= 90) {
        console.log(String.fromCharCode(i));
    } else {
        console.log(String.fromCharCode(i+6));
    }

}


