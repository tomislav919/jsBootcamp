let myAccount = {
    name: 'Tomislav Lukanic',
    expenses: 0,
    income: 0
};


let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
}

// addIncome
let addIncome = function(account, amount) {
    account.income = account.income + amount;
};

// resetAccount
let resetAccount = function(account) {
    account.income = 0;
    account.expenses = 0;
};

// getAccountSummary
// Account for Andrew has 900$. 1000$ in income. 100$ in expenses.
let getAccountSummary = function (account){
    account.sum = account.income - account.expenses;
    console.log(`Account for ${account.name} has ${account.sum}$. ${account.income}$ in income. ${account.expenses}$ in expenses.`);
}



addIncome(myAccount, 1500);
addExpense(myAccount, 600);
addExpense(myAccount, 800);
getAccountSummary(myAccount);
resetAccount(myAccount);
getAccountSummary(myAccount);
