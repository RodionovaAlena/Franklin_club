let a = 4;
let b = 4;
let c = 6;

if (a<=b && a>=c || a>=b && a<=c) {
    let average = a;
    console.log(average);
}

if (b<=a && b>=c || b>=a && b<=c) {
    let average = b;
    console.log(average);
}

if (c<=a && c>=b || c>=a && c<=b) {
    let average = c;
    console.log(average);
}