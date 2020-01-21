let myAccount = {
    name: 'Tomislav Lukanic',
    expenses: 0,
    income: 0
};


let otherAccount = myAccount; //otherAccount je reference na myAccount i kad njega promijenim propertije OtherAccount onda promijenim i propertije myAccount
otherAccount.income = 1000;
otherAccount.dodatak = 150; //dodat ce ga na myAccount jer svaki property koji dodam referencira se na myAccount
otherAccount = {}; //u ovom slucaju otherAccount ce bit prazan dok ce myAccount ostat isti kao prije jer zapravo napravi novi object

let addExpense = function (account, amount) {
    account = {

    };
    //account.expenses = account.expenses + amount;
    console.log(account);
}

addExpense(myAccount, 2.50);
console.log(myAccount)