// // CONST & LET
// const namess = "brad";
// let names = "john";

// name = "brad";

// console.log(name);

// const candybar = {
//   flavor: "chocolate",
//   length: 6
// };

// const nums = [1, 2, 3, 5];
// console.log(nums);

// // ARROW FUNCTIONS
// function sayHello() {
//   console.log("Hello");
// }

// sayHello(); // hey

// const whatShouldISay = name => console.log(`my name is ${name}`);

// whatShouldISay("babcock");

// const sayHey = () => console.log("hey");

// // FOREACH
// const fruits = ["Apples", "Oranges", "Bananas"];

// fruits.forEach((fruit, index) => {
//   console.log(index + 1 + " " + fruit);
// });

// // MAP
// const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

// console.log(singleFruit);

// // FILTER

// const people = [
//   { id: 1, name: "karen" },
//   { id: 2, name: "bob" },
//   { id: 3, name: "corey" }
// ];

// const filterPeople = people.filter(people => people.id !== 2);
// console.log(filterPeople);

// const filterName = people.filter(people => people.name == "corey");
// console.log(filterName);

// // SPREAD

// let arr = [1, 2, 3];

// let arr2 = [...arr, 4];
// console.log(arr);

// const arr3 = [...arr2.filter(num => num !== 2)];
// console.log(arr3);

// const newPerson = {
//   name: "Brad",
//   age: 36
// };

// const newPerson2 = {
//   ...newPerson,
//   email: "brad@gmail.com"
// };

// console.log(newPerson2);
// DESTRUCTURING

// NEED TO SET DESTRUCTURE EQUAL TO ONE LEVEL ABOVE WHAT YOUR TRYING TO GET TO.

// const profile = {
//   name: "John Doe",
//   address: {
//     street: "40 Main St.",
//     city: "Boston"
//   },
//   hobbies: ["movies", "running"]
// };

// console.log(profile.hobbies.length);

// const { hobbies, address, name } = profile;

// console.log(hobbies, address, name);

// const { street } = profile.address;
// console.log(street);

// // CLASSES
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hello, my name is ${this.name} and my age is ${this.age}`;
//   }
// }

// const person1 = new Person("bob", 25);
// console.log(person1.greet());

// // SUBCLASSES
// class Customer extends Person {
//   //super is what properties you want to bring with you from your super class.
//   constructor(name, age, balance) {
//     super(name, age);
//     this.balance = balance;
//   }

//   info() {
//     return `${this.name} owes $${300}.00`;
//   }
// }

// customer1 = new Customer("Kevin", 32, 300);

// console.log(customer1.info());
// MODULES

//file 1 (file1.js)
export const name = 'Jeff';

//file 2 (file2.js)
import { name } from './file1';

console.log(name);
