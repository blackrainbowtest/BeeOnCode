/**
 * g - GLOBAL
 */

// const text = "cat, catfish, dog, cat";
// const regex = /cat/g;
// console.log(text.match(regex)); // ["cat", "cat", "cat"]

/**
 * i - INSENSITIVE
 */

// const texti = "Cat, cAt, CAT";
// const regexi = /cat/i;
// console.log(texti.match(regexi)); // [ 'Cat', index: 0, input: 'Cat, cAt, CAT', groups: undefined ]

/**
 * m - MULTI LINE ^ and $
 */

// const text = `Hello World
// Hello Universe`;
// const regex = /^Hello/mg;
// console.log(text.match(regex)); // ["Hello", "Hello"]

/**
 * u - UNICODE
 */

const text = "😊";
const regex = /\u{1F60A}/u;
console.log(regex.test(text)); // true

console.log(`u{${"😊".codePointAt(0).toString(16).toUpperCase()}}`);

