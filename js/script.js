'use strict';

//alert(1); //модальное окно, не подлежащее стилизации

//const result = confirm('are you here?'); // модальное окно, для ответа да/нет

//const answer = +prompt("Вам есть 18?", '18');
//console.log(typeof(answer) );

const answers = [];

answers[0] = prompt('Как ваше имя?', 'Алексей');
answers[1] = prompt('Какая ваша фамилия?','Неу');
answers[2] = prompt('сколько вам лет?');

document.write(answers);

