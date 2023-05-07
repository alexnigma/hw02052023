// Домашка:

/*
1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

let hamburger = 2;
let fries = 1;

if (hamburger > 2 && fries > 0) {
    console.log("Ми поїли")
} else {
    console.log("Ми йдемо в інше кафе")
};



/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/


let price = 1120;

if (price >= 1000 && price <= 1900) {
    console.log(true)
};



/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/

let price = 1050;

if (!(price >= 1000 && price <= 1900)) {
    console.log(true)
} else {
    console.log(false)
};


let price1 = 1200;

if (price1 <= 1000 || price1 >= 1900) {
    console.log(true)
} else {
    console.log(false)
};



/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

let season = 2;

if (season === 1) {
    console.log("Winter")
} else if (season === 2) {
    console.log("Spring")
} else if (season === 3) {
    console.log("Summer")
} else if (season === 4) {
    console.log("Fall")
} else {
    console.log("No season with such number")
};



/*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/

let a = 10;
let b = 2;
let c = 60;

if (a > b && a < c) {
    console.log(a)
} else if (a > c && a < b) {
    console.log(a)
} else if (b > a && b < c) {
    console.log(b)
} else if (b > c && b < a) {
    console.log(b)
} else if (c > a && c < b) {
    console.log(c)
} else if (c > b && c < a) {
    console.log(c)
};



/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

    let dayOfWeek = 8;

switch (dayOfWeek) {
    case 1:
        console.log("Понеділок");
        break;
    case 2:
        console.log("Вівторок");
        break;
    case 3:
        console.log("Середа");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("П'ятниця");
        break;
    case 6:
        console.log("Субота");
        break;
    case 7:
        console.log("Неділля");
        break;
    default:
        console.log("Немає такого дня тижня")
};



/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

let mathOperator = "/";
let firstNumber = 1;
let secondNumber = 3;

switch (mathOperator) {
    case "+":
        console.log(firstNumber + secondNumber);
        break;
    case "-":
        console.log(firstNumber - secondNumber);
        break;
    case "*":
        console.log(firstNumber * secondNumber);
        break;
    case "/":
        console.log(firstNumber / secondNumber);
        break;
};



/*
8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

let word = "Тетрокубододекаєдр";
let regExp = /\а|е|є|і|ї|о|у|ю|я\$/g;

console.log(word.replace(regExp, ""));



/*
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка (https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/

let meter = 3000;
let kMeter = meter / 1000;

let meterEnd = ["метр", "метра", "метрів"];
let kMeterEnd = ["кілометр", "кілометра", "кілометрів"];

let MeterNum = meter % 10;
let kMeterNum = kMeter % 10;


if (meter === 0) {
    console.log(meter + " " + meterEnd[2] + " це " + kMeter + " " + kMeterEnd[2])

} else if (kMeter == 1){
    console.log(meter + " " + meterEnd[2] + " це " + kMeter + " " + kMeterEnd[0])

} else if ((meter > 10 && meter < 20) && (kMeter > 0.01 && kMeter < 0.02)  && kMeter < 1) {
    console.log(meter + " " + meterEnd[2] + " це " + kMeter + " " + kMeterEnd[1])

} else if ((meter > 10 && meter < 20) && (kMeter > 0.01 && kMeter < 0.02)) {
    console.log(meter + " " + meterEnd[2] + " це " + kMeter + " " + kMeterEnd[2])

} else if ((MeterNum > 1 && MeterNum < 5) && (kMeterNum > 0.001 && kMeterNum < 0.005)) {
    console.log(meter + " " + meterEnd[1] + " це " + kMeter + " " + kMeterEnd[1])

} else if ((MeterNum == 1) && (kMeterNum == 0.001) && kMeter < 1) {
    console.log(meter + " " + meterEnd[0] + " це " + kMeter + " " + kMeterEnd[1])

} else if ((MeterNum == 1) && (kMeterNum == 0.001)) {
    console.log(meter + " " + meterEnd[0] + " це " + kMeter + " " + kMeterEnd[0])

} else if ((meter > 4 && meter < 21) || (String(meter).endsWith(5)) || (String(meter).endsWith(6)) || (String(meter).endsWith(7)) || (String(meter).endsWith(8)) || (String(meter).endsWith(9)) || (String(meter).endsWith(0)) && kMeter < 1)  {
    console.log(meter + " " + meterEnd[2] + " це " + kMeter + " " + kMeterEnd[1])

} else if ((meter > 4 && meter < 21) || (String(meter).endsWith(5)) || (String(meter).endsWith(6)) || (String(meter).endsWith(7)) || (String(meter).endsWith(8)) || (String(meter).endsWith(9)) || (String(meter).endsWith(0)))  {
    console.log(meter + " " + meterEnd[2] + " це " + kMeter + " " + kMeterEnd[2])

} else if ((String(meter).endsWith(2)) || (String(meter).endsWith(3)) || (String(meter).endsWith(4))) {
    console.log(meter + " " + meterEnd[1] + " це " + kMeter + " " + kMeterEnd[1])

} else {
    console.log(meter + " " + meterEnd[0] + " це " + kMeter + " " + kMeterEnd[1])

};

