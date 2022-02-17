document.getElementById('deposit-button').addEventListener('click', function(){

    const depositInput = document.getElementById('deposit-input');

    const depositAmount = parseFloat(depositInput.value);

            //get current deposite
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositTotal = parseFloat(depositTotal.innerText);

    depositTotal.innerText = previousDepositTotal + depositAmount;
        

            //update balance
    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceTotal = parseFloat(balanceTotal.innerText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    //clear input field
    depositInput.value = '';
});


        //handle withdraw button
    document.getElementById('withdraw-button').addEventListener('click', function(){

        const withdrawInput = document.getElementById('withdraw-input');

        const withdrawAmount = parseFloat(withdrawInput.value);

        const withdrawTotal = document.getElementById('withdraw-total');

        const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);

        withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;


            //update balance after withdraw
        const balanceTotal = document.getElementById('balance-total');

        const previousBalanceTotal = parseFloat(balanceTotal.innerText);

       balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


        //clear witdraw field
        withdrawInput.value = '';

    });


