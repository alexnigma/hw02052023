/*


Типы данных:


Примитивы:
- Строка
- Число
- Булевый
- Биг Инт
- Символ
- Нулл
- Undefined

Объекты:
- Простые объекты {}
- Массивы
- Объекты даты
- Регулярные выражения
- Ошибки

*/

// NaN, Infinity:

console.log(4/0);



// Object:
let obj = {};


let person = {
    name: "Alex",
    lastName: "Savin",
    age: 31,
    status: {
        status1: 1
    }
};
console.log(person.status.status1);


let person1 = new Object();
person1.name = "Alex"
person1.age = 31
console.log(person1);


console.log(`Name: ${person1.name}`);


let endpoint = "help";
console.log(`https://someurl/${endpoint}`);



// Arrays:
let arr = ["text", "some text", {name: 123, age: 22}];
console.log(arr);
console.log(arr[0]);


let numArray = [1, 2, 3];
let numObject = {a:1, b:2, c:3};
console.log(numArray[0]);
console.log(numObject.a);


let salary = {
    "Anna": 100,
    "Vlada": 1200,
};
let salaryArr = ["Anna", 1000, "Vlada", 1200];

salary.Anna = 200;
console.log(salary);


let someText = "Hello";
console.log(someText.substring(0, 3));
console.log(someText.toUpperCase());
console.log(someText.indexOf("H"));
console.log(someText.trim()); // удаляет проблемы, табы....
