let num = 5;

let b = '' + (parseInt(num / 8) % 2) + (parseInt(num / 4) % 2) + (parseInt(num / 2) % 2) + (num % 2);

console.log(b);