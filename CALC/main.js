const numbers = document.querySelectorAll('.calc-btn.numeric');
const result = document.querySelector('.calc-result');
const operatorsRegex = /[+\-*/]/;

function itemToDisplay(value) {
    result.value += value;
}

function delItemFromDisplay() {
    result.value = '';
}

function mathematicalExpression(value) {

    const lastCharacter = result.value.slice(-1);

    if (!operatorsRegex.test(lastCharacter)) {

        result.value += value;
    }
}