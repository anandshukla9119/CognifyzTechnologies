const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const addButton = document.getElementById('addButton');
const result = document.getElementById('result');

addButton.addEventListener('click', function () {
    const num1Value = parseFloat(num1.value);
    const num2Value = parseFloat(num2.value);

    if (isNaN(num1Value) || isNaN(num2Value)) {
        alert('Please enter valid numbers.');
        return;
    }

    const sum = num1Value + num2Value;
    result.textContent = `The sum is: ${sum}`;
});