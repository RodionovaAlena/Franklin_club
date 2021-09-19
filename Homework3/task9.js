let a = promt('Введите 1 число');
let b = promt('Введите 2 число');
let c = promt('Введите 3 число');

if (a<b && a>c || a>b && a<c) {
    let average = a;
    alert(average);
}

    if (b<a && b>c || b>a && b<c) {
        let average = b;
        alert(average);
    }

        if (c<a && c>b || c>a && c<b) {
            let average = c;
            alert(average);
        }