// Write your solution in this file!

// 1. Declare a global variable `customerName` and assign it the value 'bob'.
var customerName = 'bob';

// 2. Write a function `upperCaseCustomerName` that uppercases the `customerName` variable.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Write a function `setBestCustomer` that declares a global variable `bestCustomer` and assigns it the value 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// 4. Write a function `overwriteBestCustomer` that changes the `bestCustomer` variable to 'maybe bob'.
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant `leastFavoriteCustomer` and assign it an initial value.
const leastFavoriteCustomer = 'some initial value';

// 6. Write a function `changeLeastFavoriteCustomer` that attempts to change the `leastFavoriteCustomer` constant.
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value';
}
