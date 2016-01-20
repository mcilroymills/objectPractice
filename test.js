/****************************************************************
* Author: Mills McIlroy
* Date: 1/20/2016
* Description: Experimenting with javascript object creation. This
*   is a bank account constructor that can be used to create
*   different bank accounts modeling what you would find in a bank.
*****************************************************************/

var bankAccount = function (accountNumber, balance, signers, accountType) {
  this.accountNumber = accountNumber;
  this.balance = balance;
  this.signers = signers;
  this.accountType = accountType;
};

var account12345 = new bankAccount(12345, 50.00, [ {name: "Goofy", age: 45}, {name: "Mickey", age: 37}], "checking");

console.log(account1);

var account67891 = new bankAccount(67891, -34, [ {name: "Jim Henson", age: 74}, {name: "Big Bird", age: 69}], "savings");

console.log(account2);










