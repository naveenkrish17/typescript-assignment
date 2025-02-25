// Exercise 1: Define Typed Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["apple", "banana", "cherry"];
let booleans: boolean[] = [true, false, true];
let mixed: (number | string)[] = [1, "two", 3, "four"];

// Exercise 2: Array Manipulation
let fruits: string[] = ["apple", "banana", "mango"];
fruits.push("grapes");
fruits.shift();
fruits.splice(2, 0, "pineapple");
fruits.reverse();
console.log(fruits);

// Exercise 3: Map, Filter, and Reduce
let numbersArray: number[] = [10, 20, 30, 40, 50, 60];
let doubled = numbersArray.map(num => num * 2);
let filtered = numbersArray.filter(num => num <= 50);
let sum = numbersArray.reduce((acc, num) => acc + num, 0);
console.log("Doubled numbers:", doubled);
console.log("Filtered numbers:", filtered);
console.log("Sum:", sum);

// Exercise 4: Find and FindIndex
let values: number[] = [10, 20, 30, 40, 50];
let result = values.find(num => num > 25);
let index = values.findIndex(num => num === 40);
console.log("First number > 25:", result);
console.log("Index of 40:", index);

// Exercise 5: Sorting an Array
let scores: number[] = [55, 23, 87, 12, 99, 38];
let ascending = [...scores].sort((a, b) => a - b);
let descending = [...scores].sort((a, b) => b - a);
console.log("Ascending order:", ascending);
console.log("Descending order:", descending);

// Exercise 6: Tuple Types
let student: [string, number, boolean] = ["John", 21, true];
student[1] = 22;
console.log(student);

// Exercise 7: Working with includes() and some()
let roles: string[] = ["User", "Editor", "Admin", "Moderator"];
let hasAdmin = roles.includes("Admin");
let hasSuper = roles.some(role => role.startsWith("Super"));
console.log("Contains Admin:", hasAdmin);
console.log("Has Super role:", hasSuper);

// Exercise 8: Flattening an Array
let nestedArray: (number | number[])[] = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArray.flat(2);
console.log(flattenedArray);

// Exercise 9: Merging and Removing Duplicates
let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5, 6];
let uniqueArray = Array.from(new Set([...arr1, ...arr2]));
console.log(uniqueArray);

// Exercise 10: Interface with Arrays
interface Employee {
    name: string;
    age: number;
    position: string;
}
let employees: Employee[] = [
    { name: "Alice", age: 25, position: "Developer" },
    { name: "Bob", age: 35, position: "Manager" },
    { name: "Charlie", age: 40, position: "Director" }
];
let filteredEmployees = employees.filter(emp => emp.age > 30);
console.log(filteredEmployees);
