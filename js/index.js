document.getElementById('submit-button').addEventListener('click', function(){
    // console.log('clicked calculate button')

    const incomeInput = document.getElementById('income-input');
    const incomeMoney = incomeInput.value;
    const incomeNewAmount = parseFloat(incomeMoney);
        // incomeInput.value = incomeNewAmount - totalNewAmount;

   const foodRent = document.getElementById('food-rent');
   const foodMoney = foodRent.value;
   const foodNewAmount = parseFloat(foodMoney);
//    foodRent.value =foodMoney;

   const houseRent = document.getElementById('house-rent');
   const houseMoney = houseRent.value;
   const houseNewAmount = parseFloat(houseMoney);
//    houseRent.value = houseMoney;

   const clothsRent = document.getElementById('cloths-rent');
   const clothsMoney = clothsRent.value;
   const clothsNewAmount = parseFloat(clothsMoney);
//    clothsRent.value = clothsMoney;

   const totalExpenses = document.getElementById('total-expenses');
   const totalMoney = totalExpenses.innerText;
   const totalNewAmount = parseFloat(totalMoney);
   totalExpenses.innerText = totalNewAmount + clothsNewAmount + houseNewAmount + foodNewAmount;

   const balance = document.getElementById('balance');
   const balanceText = balance.innerText;
   const balanceNewAmount = parseFloat(balanceText);
    balance.innerText = balanceNewAmount + incomeNewAmount;

  
//clear input
    // incomeInput.value = '';
})