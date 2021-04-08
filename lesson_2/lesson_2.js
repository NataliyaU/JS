// Задание 1. Почему код дает именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 В префиксной форме инкрементирование производится сразу и затем возврат.
d = b++; alert(d);           // 1 В постфиксной форме сначала происходит возврат значения, а потом выполняется инкрементирование.
c = (2+ ++a); alert(c);      // 5 Переменная а уже имеет значение 2. Используется префиксная форма, соответсвенно, с = 2 + 3.
d = (2+ b++); alert(d);      // 4 Переменная b уже имеет значение 2. Используется постфиксная форма, соответсвенно, d = 2 + 2.
alert(b);                    // 3 Выше d строке после присвоения d = 4, было выполнено инкрементирование b.

// Задание 2. Чему будет равен x?

var a = 2;
var x = 1 + (a *= 2);
// Ответ: x = 5. Потому что a*=2 -> a = a * 2 -> a = 4.

/* Задание 3.
Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.
*/

var a, b;
a = -5;
b = 3;

if (a >= 0 && b >= 0){
    console.log(a - b);
}
else if (a < 0 && b < 0){
    console.log(a * b);
}
else {
    console.log(a + b);
}

/* Задание 4. Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15.
*/

var a = 11;

switch (a) {
    case 0:
        console.log(a++);
    case 1:
        console.log(a++);
    case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
    case 15:
        console.log(a++);
        break;
    default:
        console.log("Значение должно быть в промежутке от 0 до 15");
}

/* Задание 5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
*/

function addition(arg1, arg2){
    return arg1 + arg2;
}
function subtraction(arg1, arg2){
    return arg1 - arg2;
}
function multiplication(arg1, arg2){
    return arg1 * arg2;
}
function division(arg1, arg2){
    if (arg2){
        return arg1 / arg2;
    }
    else {
        return "делить на 0 нельзя";
    }
}

var x = 10;
var y = 5;

console.log(addition(x, y));
console.log(subtraction(x, y));
console.log(multiplication(x, y));
console.log(division(x, y));

/* Задание 6. Реализовать функцию с тремя параметрами:
function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов,
operation — строка с названием операции. В зависимости от переданного значения выполнить
одну из арифметических операций (использовать функции из пункта 5)
и вернуть полученное значение (применить switch).
*/

function mathOperation(arg1, arg2, operation){
    let result;
    switch(operation){
        case "+":
            result = addition(arg1, arg2);
            break;
        case "-":
            result = subtraction(arg1, arg2);
            break;
        case "*":
            result = multiplication(arg1, arg2);
            break;
        case "/":
            result = division(arg1, arg2);
            break;
        default:
            result = "Неизвестный оператор";
    }
    return result;
}

var a = 10;
var b = 0;

console.log(mathOperation(a, b, "+"));
console.log(mathOperation(a, b, "-"));
console.log(mathOperation(a, b, "*"));
console.log(mathOperation(a, b, "/"));
console.log(mathOperation(a, b, "."));

/* Задание 7. Сравнить null и 0. Объяснить результат.
*/

alert(null > 0);    // false
alert(null == 0);   // false
alert(null >= 0);   // true

/* Выводы: Сравнения преобразуют null в число, рассматривая его как 0, поэтому выражение null >= 0 истинно, а null > 0 ложно.
   Для равенства == значений undefined и null действует особое правило: эти значения ни к чему не приводятся,
   они равны друг другу и не равны ничему другому. Поэтому null == 0 ложно.
*/

/* Задание 8. С помощью рекурсии организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val — заданное число, pow –— степень.
*/

function power(val, pow){
    if (pow == 0){
        return 1;
    }
    else {
        return val * power(val, pow - 1);
    }
}

console.log(power(2, 3));