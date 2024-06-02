var form = document.getElementById('tipForm');
var resultElement = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    var amount = parseFloat(document.querySelector('.input1').value);
    var tipPercentage = parseFloat(document.querySelector('.input2').value);

    if (isNaN(amount) || isNaN(tipPercentage)) {
        resultElement.innerHTML = 'Please enter valid numbers';
        return;
    }

    var tipAmount = (tipPercentage / 100) * amount;
    var totalAmount = amount + tipAmount;

    resultElement.innerHTML = `Total Amount: $${totalAmount.toFixed(2)}`;
});