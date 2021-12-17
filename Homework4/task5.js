var math = require('mathjs');

let cycle = 0;
let a = 0;
let b = 10000;

while (cycle < b) {
    
    let i = Math.floor(Math.random()*6 + 1);
    if (i == 3 || i == 4) {
        a = a + 1;
    }
    cycle = cycle + 1;
}

    console.log('Процент победы равен:', ((a/b)*100), '%')