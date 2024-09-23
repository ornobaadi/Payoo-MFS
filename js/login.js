// console.log('Button clickin file added')
// document.getElementById('ID').addEventListener

// Step 1: Set event handler
document.getElementById('button-login')
    .addEventListener('click', function (event) {
        // Step 2: Reloading Browser
        event.preventDefault();

        // Step3: Get the phone number
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        console.log(phoneNumber, pinNumber)

        // Step 4: Validate phone and pin
        // Not perfect way
        if (phoneNumber === '5' && pinNumber === '1234') {
            console.log('You are logged in')
            window.location.href = '/home.html'
        }
        else {
            alert('Wrong Phone number or PIN');
        }
    })