// handle deposite botton event
document.getElementById('deposite-button').addEventListener('click',
function(){
    // get the amount deposite
   const DepositeInput =document.getElementById('deposite-input');
   const depositamounts = DepositeInput.value;
   const depositamount=parseFloat(depositamounts);
   //console.log('depositeamount');
   // update deposite total
   const depositeTotal =document.getElementById('depositeTotal');
   const previousAmount =depositeTotal.innerText
   const depositeTotals =parseFloat( previousAmount);
   
   const newDeposite =depositeTotals + depositamount;
   depositeTotal.innerText=newDeposite;
   // update account balance
   const BalanceInput =document.getElementById('balance');
   const balanceAmount =BalanceInput.innerText;
   const previousBalance =parseFloat(balanceAmount);
   const newBalanceTotal =previousBalance+newDeposite;
   BalanceInput.innerText =newBalanceTotal;

   //clear the deposite input file
   DepositeInput.value = ' ';
})

// handle withdrow event handeler

document.getElementById('withdrow-button').addEventListener('click',
function(){
    const withdrowInput =document.getElementById('withdrow-input');
    const withdrowAmount =withdrowInput.value;
    const newWithdrow =parseFloat(withdrowAmount);

    console.log(newWithdrow);
    withdrowInput.value=' ';
    if(isNaN(newWithdrow)){
        alert('pleace provide a valid number')
        return;
    }
     
    // set withdrow total
    const withdrowTotal =document.getElementById('withdrow');
    const previouswithdrow=withdrowTotal.innerText;
    const previouswithdrowTotal=parseFloat(previouswithdrow);
    const newWithdrowtotal =previouswithdrowTotal + newWithdrow;
    withdrowTotal.innerText=newWithdrowtotal;
  


// update balance
const balanceText =document.getElementById('balance');
const balanceTotal=balanceText.innerText;
const balanceTotals=parseFloat(balanceTotal);
const newBalanceTotals=balanceTotals - newWithdrow;
balanceText.innerText=newBalanceTotals;

    // clear withdrow input
  

    if(newWithdrowtotal > newBalanceTotals){
       alert('current balance is not availavle')
       return;
    } 
    
   


    
})