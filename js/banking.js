// handle deposit

document.getElementById('deposit-button').addEventListener('click',function(){

    // get the amount deposited 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    // update deposit total 

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;




    // update account balanace

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText)
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear the deposit input filed 
    depositInput.value = '';
})

// handle withdraw

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount)

    // clear the withdraw input 
    withdrawInput.value = '';

     // update withdraw total 

     const withdrawTotal = document.getElementById('withdraw-total');
     const previousWithdrawText = withdrawTotal.innerText;
     const previousWithdrawAmount = parseFloat(previousWithdrawText);
     const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
     withdrawTotal.innerText = newWithdrawTotal;


     // update account balanace
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText)
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;


})