/**
 * Kieu du lieu trong Javascript
 * 
 * 
 * 1. Du lieu nguyen thuy - Primitive Data
 * - Number
 * - String
 * - Boolearn
 * - Undefined
 * - Null
 * - Symbol
 * 
 * 2. Du lieu phuc tap - Complex Data
 * - Function
 * - Object
 * 
*/

// Number type
var a = 1.5;
var b = 2.7;


// String type
var fullName = 'Minh Quang';

// Bolearn
var isOld = true;

// Undefined type
var age;

// Null
var isNull = null; // Khong co gi

// Symbol
var id = Symbol('id'); // unique
var id2 = Symbol('id');

console.log(id === id2);

// Function

var myFunction = function () {
    alert('Hi. Xin chao cac ban!');
}

myFunction();

// Object types
var myObject = {
    name: 'Minh Quang',
    age: 22,
    address: 'Ha Noi'
};

var myArray = [
    'Javascript',
    'Java',
    'Ruby'
];
