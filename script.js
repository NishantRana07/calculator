document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.op');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.textContent;

            if (!isNaN(value) || value === '.') {
                currentInput += value;
                display.textContent = currentInput;
            } else if (value === '+' || value === '-' || value === '*' || value === '/' || value === '(' || value === ')') {
                currentInput += value;
                display.textContent = currentInput;
            } else if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                    display.textContent = currentInput;
                } catch {
                    display.textContent = "Error";
                    currentInput = '';
                }
            } else if (value === 'C') {
                currentInput = '';
                display.textContent = currentInput;
            } else if (value === '←') {
                currentInput = currentInput.slice(0, -1);
                display.textContent = currentInput;
            }
        });
    });
});
