// Զանգվածի հայտարարման եղանակները

var arr1 = [1, 2, 3];
var arr2 = new Array(1, 2, 3);

console.log(arr1, arr2);

// Առանձնահատկությունները
arr1 = [5];
arr2 = new Array(5);

console.log(arr1, arr2);

// Լռելայն արշեքով զանգվածի օբյեկտային ստեղծում
arr2 = Array.of(5);

console.log(arr1, arr2);

// Մեկ այլ զանգվածից զանգվածի ստեղծում
arr1 = ["hello world"];
arr2 = Array.from("hello world");

console.log(arr1, arr2);

// Դատարկ միջակայքեր
arr1 = new Array();
arr1[0] = 0;
arr1[2] = 2;
arr1[5] = 5;

console.log(arr1, arr1[1]);

// տվյալի ջնջում
arr1 = [0, 1, 2, 3, 4, 5];
delete arr1[1];

console.log(arr1);

// դաժան հարցեր

function f1(arr) {
  arr[1] = 5;
}

f1(arr1);
console.log(arr1);

function f2(arr) {
  arr = arr.filter((el) => el > 3);
}

f2(arr1);
console.log(arr1);

arr1 = [0, 1, 2, 3, 4, 5];
arr2 = arr1.slice(1, 3);
console.log("script.js - 57", arr1, arr2);

function f5(arr) {
  const tmp = [...arr];
  tmp[0] = 99;
  return tmp;
}

arr2 = f5(arr1);
console.log(arr1, arr2);

var arr = [];
arr[0.0] = "zero";
arr["test"] = "testValue";
console.log(arr[0.0]);
console.log(arr["test"]);
console.log(arr);

arr = [1, , 3, , 5];
console.log(arr.length);

arr.forEach(function (el, index) {
  console.log(`Element at index ${index}:`, el);
});

arr = [1, 2, 3];
arr.forEach((el, index, array) => {
  if (index === 1) {
    array[1] = el * 10;  // Умножаем второй элемент на 10
  }
});
console.log(arr); 

arr = [1, 2, 3, 4, 5];
arr.forEach((el, index, array) => {
  if (el % 2 === 0) {
    delete array[index];
  }
});
console.log(arr);

arr = [1, 2, 4, 3, 5];
arr.forEach((el, index, array) => {
  if (el % 2 === 0) {
    array.splice(index, 1);
  }
});
console.log(arr);

arr = [1, 2, 4, 3, 5];
arr.forEach((el, index, array) => {
  if (el % 2 === 0) {
    array.push(el * 2);
  }
});
console.log(arr);