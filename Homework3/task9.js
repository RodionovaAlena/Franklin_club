let a = 6;
let b = 6;
let c = 0;

if (a<=b && a>=c || a>=b && a<=c) {
    let average = a;
    console.log(average);
} else if (b<=a && b>=c || b>=a && b<=c) {
    let average = b;
    console.log(average);
} else if (c<=a && c>=b || c>=a && c<=b) {
    let average = c;
    console.log(average);
} else if (a==b && a==c && b==c) {
    let average = a;
    console.log(average);
}    