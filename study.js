'use strict';

/*function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage(5);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(4, 13));
console.log(calc(4, 5));


отдельный разбор строчных функций

const a = 'text';

console.log(a.toLowerCase());
console.log(a.toUpperCase());

let fruit = 'Some fruit';

console.log(fruit.indexOf('r'));

let logg = 'Hello World';

console.log(logg.slice(5, 10)); //вырезание от и до индкса

console.log(logg.substring(2, 5));

console.log(logg.substr(6, 5)); //вырезание по количеству символов


const num = 12.2;
console.log(Math.round(num)); //округлние

const test = '12.2px';
console.log(parseInt(test)); //конвертация в инт
console.log(parseFloat(test)); //возвращает флоат (с плавающей точкой)



function first() {     //callback function
    //do somthing
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
} */

//Objects
//const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {  //declaration function in objects
        console.log("Test");
    }
};

options.makeTest(); //вызов функии объекта/ call functions from objects

const {border, bg} = options.colors;
console.log(border);

/*console.log(Object.keys(options).length); //вывод количества либо перечня содержимого объекта


console.log(options);

delete options.name;   //delete statement of object

console.log(options);*/ 



//переборка объекта
/*
let counter;

for (let key in options) {
   
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
  
}
console.log(counter);*/