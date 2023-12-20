const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Создаем массив чисел без -1
  const numbers = arr.filter(num => num !== -1);

  // Сортируем числа
  numbers.sort((a, b) => a - b);

  // Заменяем числа в исходном массиве
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = numbers[index];
      index++;
    }
  }

  return arr;
}

module.exports = {
  sortByHeight
};
