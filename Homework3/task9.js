let a = 4;
let b = 4;
let c = 4;

let average;

if (a<=b && a>=c || a>=b && a<=c) {
    average = a;
} else if (b<=a && b>=c || b>=a && b<=c) {
    average = b;
} else if (c<=a && c>=b || c>=a && c<=b) {
    average = c;
}

console.log(average);