// Есть массив чисел
// Найти в нем максимальное и минимальное числа
// Поменять их местами и вывести результирующий массив


let array = [1, 9, 24, 845, 89, 122, 144, 167, 666];
let max = array[0];
let min = array[0];
let max_index = 0;
let min_index = 0;


for(i = 1; i < array.length; i++){
    if(array[i] > max){
        max = array[i];
        max_index = i
    } {
    if(array[i] < min){
        min = array[i];
        min_index = i;
    }
  }
}

array[min_index] = max;
array[max_index] = min;

console.log(array);
