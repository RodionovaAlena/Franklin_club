// Есть два массива символов
// Вывести третий массив, состоящий из символов, которые есть и в первом, и во втором массивах (каждый из символов упоминается в третьем массиве только один раз)


let array1 = ['o', 'p', 'l', 'z'];
let array2 = ['l', 'a', 'f', 'o'];
let array3 = [];

for(let i = 0; i < array1.length; i++){
    for(let n = 0; n < array2.length; n++){

        if(array1[i] === array2[n]){
            array3.push(array1[i]);
        }
    }
}

console.log(array3);