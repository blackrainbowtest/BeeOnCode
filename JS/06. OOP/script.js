// create
const animal = { eats: true };
const dog = Object.create(animal); // ստեղծում ենք dog օբյելտ օգտագործելով որպես նմուշ animal
dog.barks = true;

console.log(dog.eats);  // true (ժառանգվել է animal ից)
console.log(dog.barks); // true (սեփական հատկությունը)

// assign
const target = { name: "Alice" };
const source1 = { age: 25, name: "Alice2" };
const source2 = { profession: "Engineer" };

Object.assign(target, source1, source2);
console.log(target);  // { name: "Alice2", age: 25, profession: "Engineer" }


const user = {};

// Սահմանում է օբյեկտի բանալիների համար հատկություններ
Object.defineProperty(user, "id", {
    value: 123,
    writable: false,  // Չի կարելի արժեքը փոխել
    enumerable: true, // Տեսանելի է լինելու ցիկլներում
    configurable: false // Չի կարելի ջնջել
});

console.log(user.id); // 123
user.id = 456; // Չի փոփոխվի
console.log(user.id); // 123

const car = { brand: "Toyota", model: "Camry" };
delete car.model; // ջնջում է "model"-ը
console.log(car);
// { brand: "Toyota" }

const book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008
};

// Ստանում ենք օբյեկտի բանալիները զանգվածում
console.log(Object.keys(book));
// ["title", "author", "year"]

// Ստանում ենք արժեքները
console.log(Object.values(book));
// ["JavaScript: The Good Parts", "Douglas Crockford", 2008]

//ստանում ենք զանգված [բանալի, արժեք] զույգերով
console.log(Object.entries(book));
// [["title", "JavaScript: The Good Parts"], ["author", "Douglas Crockford"], ["year", 2008]]

const original = { a: 1, b: 2 };
const copy = { ...original };
console.log(copy); // { a: 1, b: 2 }

const user = { name: "John", age: 30 };

console.log("name" in user); // true
console.log("height" in user); // false

const person = { name: "Alice", age: 25 };
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("gender")); // false


const proto = { greeting: "Hello" };
const obj = Object.create(proto);

console.log(Object.getPrototypeOf(obj) === proto); // true
console.log(obj.greeting);

const config = { server: "localhost", port: 8080 };
Object.freeze(config);

config.port = 3000; // չի փոփոխվի
console.log(config); 
// { server: "localhost", port: 8080 }
