//variables created as inputs for calcuation
let annualRateReturn = 8;
let rule = 72
let accountBalance = 840.70

//do our calculations for the variables above
let doubledAccountBalance = accountBalance.toFixed(2) * 2
let yearsToDouble = rule / annualRateReturn

//output the results to the console
console.log("your current account balance is at "+"$"+accountBalance+" and with a "+ annualRateReturn+'% interest rate, your savings account will be worth $'+ doubledAccountBalance+ ' in ' + yearsToDouble+' years')