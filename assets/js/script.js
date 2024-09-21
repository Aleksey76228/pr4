'use strict';

// Задание 1

function printEvenNumbers() {
    let a = parseInt(prompt("Введите значение a:"));
    let b = parseInt(prompt("Введите значение b:"));
    
    for (let number = a; number <= b; number++) {
        if (number % 2 === 0) {
            alert(number);
        }
    }
}

// Задание 2

let i = 0;

while(i<3){
    alert(`Выводимое число ${i}!`);
    i++;
}

// задание 3

let chislo = Number(prompt("Введите число"));
while (chislo <= 10){
    chislo = Number(prompt("Введите число"));
}
alert("Вы ввели число больше 10");
alert(chislo);

// задание 4

let c = Number(prompt("Введите первое число"));
let d = Number(prompt("Введите второе число"));
function min(c,d){
   let result;
   if(c<d) result = c;
   else result =d;
   return result;
}

alert (`Меньшее число, ${min(c,d)}`);

// задание 5

const ask = (question,yes,no) =>{
    if (confirm(question)) yes()
    else no();
  }

  ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
  );
  
    // задание 6
    let age = Number(prompt("Введите ваш возраст"));
    function checkage(){
        return age > 18 || confirm("Родители разрешили?");
    }

    checkage();
