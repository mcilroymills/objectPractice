/****************************************************************
* Author: Mills McIlroy
* Date: 1/20/2016
* Description: Experimenting with javascript object creation. This
*   is a bank account constructor that can be used to create
*   different bank accounts modeling what you would find in a bank.
*****************************************************************/

var bankAccount = function (accountNumber, balance, signers, accountType, standing) {
  this.accountNumber = accountNumber;
  this.balance = balance;
  this.signers = signers;
  this.accountType = accountType;
  this.accountInGoodStanding = standing;
};

var account12345 = new bankAccount(12345, 50.00, [ {name: "Goofy", age: 45}, {name: "Mickey", age: 37}], "checking", true);

console.log(account12345);

var account67891 = new bankAccount(67891, -34, [ {name: "Jim Henson", age: 74}, {name: "Big Bird", age: 69}, {name: "Count von Count", age: 1000}], "savings", false);

console.log(account67891);










