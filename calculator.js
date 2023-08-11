let currentInput = '';

function updateDisplay(value) {
    document.getElementById('result').value = value;
}

function clearDisplay() {
    currentInput = '';
    updateDisplay('');
}

function appendInput(value) {
    currentInput += value;
    updateDisplay(currentInput);
}

function calculate() {
    try {
        const result = eval(currentInput);
        updateDisplay(result);
        currentInput = result.toString();
    } catch (error) {
        updateDisplay('Error');
    }
}

function calculateSquareRoot() {
    const num = parseFloat(currentInput);
    if (num >= 0) {
        const result = Math.sqrt(num);
        updateDisplay(result);
        currentInput = result.toString();
    } else {
        updateDisplay('Error');
    }
}

function calculateExponent() {
    const values = currentInput.split('^');
    if (values.length === 2) {
        const base = parseFloat(values[0]);
        const exponent = parseFloat(values[1]);
        const result = Math.pow(base, exponent);
        updateDisplay(result);
        currentInput = result.toString();
    } else {
        updateDisplay('Error');
    }
}

function calculateTrigFunction(trigFunc) {
    const angle = parseFloat(currentInput);
    if (!isNaN(angle)) {
        const radians = (angle * Math.PI) / 180;
        const result = Math[trigFunc](radians);
        updateDisplay(result);
        currentInput = result.toString();
    } else {
        updateDisplay('Error');
    }
}

function calculateLogarithm() {
    const num = parseFloat(currentInput);
    if (num > 0) {
        const result = Math.log(num);
        updateDisplay(result);
        currentInput = result.toString();
    } else {
        updateDisplay('Error');
    }
}
function calculateLogarithmBase10() {
    const num = parseFloat(currentInput);
    if (num > 0) {
        const result = Math.log10(num);
        updateDisplay(result);
        currentInput = result.toString();
    } else {
        updateDisplay('Error');
    }
}
function calculatePower(exponent) {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        const result = Math.pow(num, exponent);
        updateDisplay(result);
        currentInput = result.toString();
    } else {
        updateDisplay('Error');
    }
}

function calculateReciprocal() {
    const num = parseFloat(currentInput);
    if (num !== 0) {
        const result = 1 / num;
        updateDisplay(result);
        currentInput = result.toString();
    } else {
        updateDisplay('Error');
    }
}

function calculateHyperbolicFunction(func) {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        const result = Math[func + 'h'](num);
        updateDisplay(result);
        currentInput = result.toString();
    } else {
        updateDisplay('Error');
    }
}

function calculateExponential() {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        const result = Math.exp(num);
        updateDisplay(result);
        currentInput = result.toString();
    } else {
        updateDisplay('Error');
    }
}

let isRadianMode = false;

function switchToRadianMode() {
    isRadianMode = !isRadianMode;
}

function calculateFactorial() {
    const num = parseInt(currentInput);
    if (!isNaN(num) && num >= 0) {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        updateDisplay(result);
        currentInput = result.toString();
    } else {
        updateDisplay('Error');
    }
}
function calculatePercentage() {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        const result = num / 100;
        updateDisplay(result);
        currentInput = result.toString();
    } else {
        updateDisplay('Error');
    }
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
}

function calculatePowerOf10() {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        const result = Math.pow(10, num);
        updateDisplay(result);
        currentInput = result.toString();
    } else {
        updateDisplay('Error');
    }
}


document.getElementById('sin').addEventListener('click', () => calculateTrigFunction('sin'));
document.getElementById('cos').addEventListener('click', () => calculateTrigFunction('cos'));
document.getElementById('tan').addEventListener('click', () => calculateTrigFunction('tan'));

// Event listener for logarithm function
document.getElementById('log').addEventListener('click', calculateLogarithm);
