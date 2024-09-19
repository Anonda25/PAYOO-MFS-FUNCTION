document.getElementById('cash-out-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const cashOut = getInputValueById('input-cash-out');
        const pinNumber = getInputValueById('input-cash-out-pin');
        console.log('clicked btn', cashOut, pinNumber);

        if (isNaN(cashOut)) {
            alert("please Enter a number");
            return;
        }

        //wrong wyyoooo---------
        if (pinNumber === 1122) {
            const balance = getInputInnerTextById('account-balance');

            if (cashOut > balance) {
                alert('you have not money');
                return;
            }

            const updateBalance = balance - cashOut;
            document.getElementById('account-balance').innerText = updateBalance;

            const p = document.createElement('div');
            p.classList.add('bg-yellow-300');
            p.innerHTML = ` 
            <h1 class="text-3xl font-bold space-y-3">Cash Out</h1>
            <p>
            AddMoney : ${cashOut} tk . New Balance : ${updateBalance}
            </p>
            
            `
            document.getElementById('trensection-container').appendChild(p);
        } else {
            alert('please Enter right pin..')
        }
    })