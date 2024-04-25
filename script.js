var roundInput = document.getElementById('round') 
var round_result = document.getElementById('round_result')

function roundoff(){
    var roundoff = Math.round(roundInput.value);
    round_result.innerHTML= '>== '+ roundoff;

}

var randomResult = document.getElementById('Generate_No')

function generate(){
    var randomNumber = Math.random()
    var randomOnlytwo = Math.ceil(randomNumber*100) 
    randomResult.innerHTML="The random number is >=="+ randomOnlytwo;
}

function convertToNumber(str) {
    let number = parseInt(str);
    if (isNaN(number)) {
        number = parseFloat(str);
    }
    if (isNaN(number)) {
        return NaN;
    }
    return number;
}

function convertAndDisplay() {
    const inputString = document.getElementById('inputString').value;
    const resultDiv = document.getElementById('result');
    const convertedNumber = convertToNumber(inputString);
    if (isNaN(convertedNumber)) {
        resultDiv.textContent = "Invalid input. Please enter a valid number.";
    } else {
        resultDiv.textContent = "Converted number: " + convertedNumber;
    }
}

function truncateDecimal(num, decimals) {
    const multiplier = Math.pow(10, decimals);
    const truncatedNum = Math.trunc(num * multiplier);
    return truncatedNum / multiplier;
}

function truncateAndDisplay() {
    const inputNumber = parseFloat(document.getElementById('inputNumber').value);
    const inputDecimals = parseInt(document.getElementById('inputDecimals').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(inputNumber) || isNaN(inputDecimals)) {
        resultDiv.textContent = "Please enter valid numbers.";
        return;
    }

    const truncatedNumber = truncateDecimal(inputNumber, inputDecimals);
    resultDiv.textContent = "Truncated number: " + truncatedNumber;
}

function formatNumber(num, decimalPlaces) {
    if (isNaN(num)) {
        return "Invalid input";
    }
    return num.toFixed(decimalPlaces);
}

function formatAndDisplay() {
    const inputNumber = parseFloat(document.getElementById('inputNumber').value);
    const inputDecimalPlaces = parseInt(document.getElementById('inputDecimalPlaces').value);
    const resultDiv = document.getElementById('result');

    const formattedNumber = formatNumber(inputNumber, inputDecimalPlaces);
    resultDiv.textContent = "Formatted number: " + formattedNumber;
}