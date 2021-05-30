let first = document.getElementById('first_option');
let second = document.getElementById('second_option');
let sign = document.getElementById('sign');
let button = document.getElementById('submit');
let result = document.getElementById('result');

button.addEventListener('click', function () {
    let first_number = parseInt(first.value);
    let second_number = parseInt(second.value);
    switch (sign.value) {
        case '+':
            return result.innerHTML = first_number + second_number;
        case '-':
            return result.innerHTML = first_number - second_number;
        case '*':
            return result.innerHTML = first_number * second_number;
        case '/':
            return result.innerHTML = first_number / second_number;
        case '%':
            return result.innerHTML = first_number % second_number;
        default:
            return result.innerHTML = "Unknown sign";
    }
})
