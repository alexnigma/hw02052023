// Домашка:

/*
1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

function eat (hamburger, fries) {
    if (hamburger > 2 && fries > 0) {
    console.log(`Ми поїли`)
    } else {
        console.log("Ми йдемо в інше кафе")
    }
}

eat(3, 1);
eat(2,1);
eat(1,1);
eat(1,0);



/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/

function checkPrice0 (price) {
    if (price >= 1000 && price <= 1900) {
        console.log(true)
    } else {
        console.log(false)
    }
};

checkPrice0(900);
checkPrice0(1000);
checkPrice0(1500);
checkPrice0(1900);
checkPrice0(2000);



/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/

function checkPrice1 (price) {
    if (!(price >= 1000 && price <= 1900)) {
        console.log(true)
    } else {
        console.log(false)
    }
};

function checkPrice2 (price) {
    if (price < 1000 || price > 1900) {
        console.log(true)
    } else {
        console.log(false)
    }
};

checkPrice2(900);
checkPrice2(1000);
checkPrice2(1500);
checkPrice2(1900);
checkPrice2(2000);

checkPrice2(900);
checkPrice2(1000);
checkPrice2(1500);
checkPrice2(1900);
checkPrice2(2000);



/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

function checkSeason (season) {
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
    }
};

checkSeason(1);
checkSeason(2);
checkSeason(3);
checkSeason(4);
checkSeason(5);



/*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/

function findAverage (a, b, c) {
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
    }
};


findAverage(1,2,3);
findAverage(6,2,10);
findAverage(10,5,8);



/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

function checkDay (dayOfWeek) {
    if (dayOfWeek === 1) {
        console.log("Понеділок");
    } else if (dayOfWeek === 2) {
        console.log("Вівторок");
    } else if (dayOfWeek === 3) {
        console.log("Середа");
    } else if (dayOfWeek === 4) {
        console.log("Четверг");
    } else if (dayOfWeek === 5) {
        console.log("П'ятниця");
    } else if (dayOfWeek === 6) {
        console.log("Субота");
    } else if (dayOfWeek === 7) {
        console.log("Неділля");
    } else {
        console.log("Немає такого дня тижня")
    }
};

checkDay(1);
checkDay(2);
checkDay(3);
checkDay(4);
checkDay(5);
checkDay(6);
checkDay(7);
checkDay(10);



/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/


function math (firstNumber, mathOperator, secondNumber) {
    if (mathOperator === "+") {
        console.log(firstNumber + secondNumber)
    } else if (mathOperator === "-") {
        console.log(firstNumber - secondNumber)
    } else if (mathOperator === "*") {
        console.log(firstNumber * secondNumber)
    }else if (mathOperator === "/") {
        console.log(firstNumber / secondNumber)
    }
};

math(4, "+", 2);
math(4, "-", 2);
math(4, "*", 2);
math(4, "/", 2);



/*
8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

function deleteFromWord (word) { // use string only
    let regExp = /\а|е|є|і|ї|о|у|ю|я\$/g;
    console.log(word.replace(regExp, ""));
};

deleteFromWord("тетродедекаедр");
deleteFromWord("оукдлеордорв");
deleteFromWord("йцуйцкеаиитрряяяя");
deleteFromWord("джлоцукимлмитіааї");



/*
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка (https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/


function rightEndOfWord (meter) {
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
    }
};

rightEndOfWord(0);
rightEndOfWord(1);
rightEndOfWord(2);
rightEndOfWord(3);
rightEndOfWord(4);
rightEndOfWord(5);
rightEndOfWord(6);
rightEndOfWord(7);
rightEndOfWord(8);
rightEndOfWord(9);
rightEndOfWord(10);
rightEndOfWord(11);
rightEndOfWord(20);
rightEndOfWord(21);
rightEndOfWord(25);
rightEndOfWord(50);
rightEndOfWord(1000);
rightEndOfWord(1050);
rightEndOfWord(10000000);


