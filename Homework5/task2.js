// Есть массив символов
// Собрать и вывести строку, состоящую из символов латинского алфавита, пробелов и точек

let array = [1, '/', 45, 'r', 'Y', '*', '.', ' ', 63, 876, 'ы', 'd', ',', '$', 'г', 34, '.'];
let string = '';
let i = 0;

while (i<array.length){
    if(array[i] == ' ' || array[i] == '.' || (array[i] > 'a' && array[i] < 'z') || (array[i] > 'A' && array[i] < 'Z')) {
       string = string + array[i];
    }
    i++;
}

console.log(string);


