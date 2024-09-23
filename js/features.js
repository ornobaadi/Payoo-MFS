// Show cashout form 

document.getElementById('btn-show-cash-out')
.addEventListener('click', function(){

    console.log('Show cashout clicked')
    document.getElementById('cash-out-form').classList.remove('hidden');

    // Hide add Money 
    document.getElementById('add-money-form').classList.add('hidden');
});

document.getElementById('btn-show-add-money')
.addEventListener('click', function(){

    console.log('Show add money clicked')
    document.getElementById('add-money-form').classList.remove('hidden');

    // Hide add Money 
    document.getElementById('cash-out-form').classList.add('hidden');
});