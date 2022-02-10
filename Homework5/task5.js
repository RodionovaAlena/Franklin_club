// Дан массив чисел, отсортированный по возрастанию
// Дано число а
// Найти место для a в массиве и вставить туда
// Вывести результирующий массив

let array = [3, 11, 43, 67, 122];
let a = 70;

for (let i = 0; i<array.length; i++){
	
    if(a > array[i]) {
		array.splice((array[i] + 1), 0, a);
		break;
	}

}

console.log(array)