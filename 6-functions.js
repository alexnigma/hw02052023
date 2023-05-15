// Functions:
/*
let a = 5;
let b = 3;
let c;
c = a + b;

console.log(c);


a = 8;
b = 12;
c = a + b;
console.log(c);

function sum (a, b) {
    let c = a + b;
    console.log(c)
};

sum(8, 12)
sum(3, 12)
sum(12234, 3455)


const anonimFunc = function (a, b){
    let c = a +b;
    console.log(c);
};



(a, b) => {
    let c = a + b;
    console.log(c);
};


const funcWithDefaultParam = (a, b =2) => {
    return (a * b)
};
console.log(funcWithDefaultParam(3,5));
console.log(funcWithDefaultParam(3));


console.log(Date());

const myRequestWithDate = (field1, timestamp = Date()) => {
    let requestBody = {
        someData1: 1,
        someData2: 2,
        timestamp: "",
    }
    requestBody.someData1 = field1;
    requestBody.timestamp = timestamp;

    return requestBody;
};

console.log(myRequestWithDate('weqrwer', "dfgdfgdfgdfg"));



function first() {
    setTimeout(function (){
        console.log("First")
    }, 5000)
}

function second () {
    console.log("Second")
}

first();
second();


function someFunctionCallback (param1, callbackFunction) {
    console.log(`Here is my parametr: ${param1}`);
    callbackFunction();
}

someFunctionCallback("paramasd", function () {
    console.log("text from callback")
})


function it (testDescriptions, testActions) {
    console.log(`Test description: ${testDescriptions}`);
    testActions();
}

it(`Auth Test`, () => {
    console.log(`some test actions....`)
})

*/



let name = `Petja`;
function showMessage() {
    let message = `Privet`;
    name = `Vasja`;
    console.log(message + `, ` + name);
}

console.log(name);
showMessage();
console.log(name);


function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
console.log( result );














