// ----------------------------------------------------------

// const regex = /cat/;
// console.log(regex.test("cat")); // true
// console.log(regex.test("dog")); // false

// ----------------------------------------------------------

// const text = "cat cat dog cat";
// const regex = /cat/g;
// const matches = text.match(regex); // ["cat", "cat", "cat"]
// console.log(matches);

// ----------------------------------------------------------

// const text = "cat dog cat";
// const newText = text.replace(/cat/g, "pet");
// console.log(newText); // "pet dog pet"

// ----------------------------------------------------------

// const text = "cat,dog,bird";
// const animals = text.split(/,/); // ["cat", "dog", "bird"]
// console.log(animals);

// ----------------------------------------------------------

// const regex = /cat/gm;
// const text = "cat and dog cat";

// let result;
// while ((result = regex.exec(text)) !== null) {
// 	console.log(result); // ["cat"]
// }
