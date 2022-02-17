            //common function
function getInputValue(inputId){

        const inputField = document.getElementById(inputId);
        
        const inputAmountText = inputField.value;
        const amountValue = parseFloat(inputAmountText);

                 //clear input field
        inputField.value = '';

    return amountValue;
}

            //get current deposite  
function updateTotalField(totalFieldId, depositAmount){

//   debugger;
    const totalElement = document.getElementById(totalFieldId);

    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + depositAmount;
}

function getCurrentBalance(){

    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    return previousBalanceTotal;
}
            //update balance
function updateBalance(amount, isAdd){

    const balanceTotal = document.getElementById('balance-total');
        const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){

        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
    
}

document.getElementById('deposit-button').addEventListener('click', function(){

                //common function
    const depositAmount = getInputValue('deposit-input');

        if(depositAmount > 0){
            
            //get current deposite  
    updateTotalField('deposit-total' ,depositAmount);   
    
            //update balance
    updateBalance(depositAmount, true);
        }
});

        //handle withdraw button
    document.getElementById('withdraw-button').addEventListener('click', function(){

                    //common function
        const withdrawAmount= getInputValue('withdraw-input');
        const currentBalance = getCurrentBalance();

            if(withdrawAmount > 0 && withdrawAmount < currentBalance){ 

                //get and update withdraw total
        updateTotalField('withdraw-total', withdrawAmount);

            //update balance after withdraw    
        updateBalance(withdrawAmount, false);
            }
            
            if(withdrawAmount > currentBalance){

                alert('You can not withdraw more than what you have in your account');
   
           }
    
    });


