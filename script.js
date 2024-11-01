let num1 = parseFloat(prompt("Введите первое число:"))
let num2 = parseFloat(prompt("Введите второе число:"))
let num3 = parseFloat(prompt("Введите третье число:"))

let answer

if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
    answer = num1;
} else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
    answer = num2;
} else {
    answer = num3;
}

alert("Среднее число это: " + answer);
