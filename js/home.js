// add money
// Add event handler 
// Prevent page reload
// Get money to be added to balance
// Verify the pin number 

document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    if(pinNumberInput === '1234'){
        console.log('Adding money to your account');

        // Get current balance 
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // Add the amount 
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance)

        // Update the Balance 
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to add money');
    }

});