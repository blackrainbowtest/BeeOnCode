// let isBalanced = function (x) {
//     let balance = 0; // Счетчик для отслеживания сбалансированности

//     for (let char of x) {
//         if (char === '(') {
//             balance++; // Увеличиваем счетчик для открывающей скобки
//         } else if (char === ')') {
//             balance--; // Уменьшаем счетчик для закрывающей скобки
//         }

//         // Если в любой момент счетчик меньше 0, это значит, что закрывающая скобка появилась раньше открывающей
//         if (balance < 0) {
//             return false;
//         }
//     }

//     // В конце проверяем, что все открывающие скобки закрыты
//     return balance === 0;
// }

// console.log(isBalanced("((((A))")); // false
// console.log(isBalanced("((A)(B))")); // true
// console.log(isBalanced("()")); // true
// console.log(isBalanced(")(")); // false

let isBalanced = function (x) {
  // Стек для хранения открывающихся скобок
  let stack = [];
  // Объект для соответствия открывающих и закрывающих скобок
  let brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of x) {
    // Если встречаем открывающую скобку, добавляем ее в стек
    if (brackets[char]) {
      stack.push(char);
    }
    // Если встречаем закрывающую скобку
    else if (Object.values(brackets).includes(char)) {
      // Проверяем, соответствует ли она последней открывающей скобке
      if (stack.length === 0 || brackets[stack.pop()] !== char) {
        return false; // Если нет соответствия, скобки не сбалансированы
      }
    }
  }

  // Если стек пуст, значит, все скобки сбалансированы
  return stack.length === 0;
};

// Примеры использования
// console.log(isBalanced("((((A))")); // false
// console.log(isBalanced("((A)(B))")); // true
// console.log(isBalanced("([])")); // true
// console.log(isBalanced("{[()]}")); // true
// console.log(isBalanced("{[(])}")); // false
// console.log(isBalanced("({[A]})")); // true
// console.log(isBalanced(")(")); // false


console.log("Բարև աշխարհ");
