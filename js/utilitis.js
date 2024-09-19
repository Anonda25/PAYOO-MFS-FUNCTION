/**
 * THE FUNCTION MATHOTD IS A ALL COLED 
 */


function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    document.getElementById(id).value='';
    const inputNumber = parseFloat(inputValue);

    console.log(id , inputNumber, inputValue);
    return inputNumber;
}

function getInputInnerTextById(id){
    const innerText = document.getElementById('account-balance').innerText;
    const innerTextNumber= parseFloat(innerText);
    return innerTextNumber;
}

// commund function 

function getRemovedById(id){
    //heid the all section
    document.getElementById('from-add-money').classList.add('hidden');
    document.getElementById('from-cash-out').classList.add('hidden');
    document.getElementById('trensetion-history').classList.add('hidden');

    //add an show the clicked btn
    document.getElementById(id).classList.remove('hidden')

}