document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('cash out button clicked')

    const cashOut = document.getElementById('input-cash-out').value;
    
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    console.log(cashOut, pinNumber);

    if(pinNumber === '1234'){
        console.log('Money is reducing');

        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // Add the amount 
        const balanceNumber = parseFloat(balance);
        const addMoneyNumber = parseFloat(cashOut);
        const newBalance = balanceNumber - addMoneyNumber;
        console.log(newBalance)

        // Update the Balance 
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cashout');
    }

});