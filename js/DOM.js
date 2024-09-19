document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const addMoney = getInputValueById('input-add-money');

    const pinNumber = getInputValueById('input-pin-number');

    if(isNaN(addMoney)){
        alert('file the number');
        return;
    }

    //wrong WEA TO build a project do not used it ?
    if (pinNumber === 1122) {
        const balance = getInputInnerTextById('account-balance');
        const updateBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = updateBalance;

        //add to trensection history

        const div = document.createElement('div');
        div.innerText = ` AddMoney : ${addMoney} tk . New Balance : ${updateBalance}`
        document.getElementById('trensection-container').appendChild(div);
    }
    else {
        alert('please try again .🤨')
    }
})

