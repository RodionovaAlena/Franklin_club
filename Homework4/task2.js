let n = 6;

for (let i = n/2; i <= n; i++) {

  for (let j = 2; j < i; j++) {

    if (i % j == 0) continue;

  }

  console.log(Math.floor(i));
}