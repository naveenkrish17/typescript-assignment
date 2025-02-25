
//Day2 exercise

// 1. concat() Exercises
// Q1: Given the following arrays:
{

    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    // Use the concat() method to create a new array that combines both arr1 and arr2.
    
    let q1Arr = arr1.concat(arr2);
    console.log(q1Arr)
}
 
// Q2:
// Given:
 
 
let names1 = ["Alice", "Bob"];
let names2 = ["Charlie", "David"];
let names3 = ["Eve", "Frank"];
// Write a TypeScript statement that merges all three arrays into a single array.
let q2Arr = [...names1, ...names2, ...names3];
 
// Q3:
// What will be the output of the following code?
 {

     let arr1 = [true, false];
     let arr2 = ["Yes", "No"];
     let arr3 = arr1.concat(arr2, [1, 2, 3]);
     console.log(arr3);//[ true, false, "Yes", "No", 1, 2, 3 ]
 }
// 2. copyWithin() Exercises
// Q4: Given the following array:
{
    let numbers = [10, 20, 30, 40, 50];
    numbers.copyWithin(0, 3)
    numbers.copyWithin(1, 4)
}
// Use the copyWithin() method to replace the first two elements with the last two elements of the array.
 
// Q5: What will be the output of the following code?
 
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.copyWithin(1, 3, 5);
console.log(fruits);//["apple", "date", "elderberry", "apple", "cherry"]

// Q6:
// Given:
 
let arr = [1, 2, 3, 4, 5, 6];
arr.copyWithin(0,2);
// Use copyWithin() to copy elements starting from index 2 and place them at index 0.
 
// 3. every() Exercises
// Q7:
// Given the following array:
 
let numbers = [2, 4, 6, 8, 10];
numbers.every(n=>n%2 ===0);
// Use the every() method to check if all elements in the array are even numbers.
 
// Q8:
// What will be the output of the following code?
 
let words = ["apple", "banana", "avocado"];
let result = words.every(word => word.startsWith("a"));
console.log(result);//false
// Q9:
// Write a TypeScript function that takes an array of numbers as input and returns true if all numbers in the array are positive. Use the every() method inside the function.
const positiveCheck = (num: [number]): boolean => num.every(n => n>0);
// 4. fill() Exercises
 
// Q10: Given the array:
// Use the fill() method to replace all elements with 0.
{
    let arr = [1, 2, 3, 4, 5];
    arr.fill(0)
}

// Q11:
// What will be the output of the following code?
{
    let arr = ["A", "B", "C", "D", "E"];
    arr.fill("X", 1, 4);
    console.log(arr);//["A", "X", "X", "X", "X"]
}
 
// Q12:
// Use the fill() method to update only the last three elements of the following array with "done".
 
{
    let status = ["pending", "pending", "pending", "pending", "pending"];
    status.fill("done",2)

}
