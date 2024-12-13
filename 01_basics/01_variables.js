const accountId = 144553
let accountEmail = "harshada@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"

//accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "121221222"
accountCity = "Jaipur"
let accountState;


console.log(accountId);

/*
Prefer not to use var because of issues in block scope and functional scope
*/
console.log(accountEmail);

console.table([accountId, accountPassword, accountEmail, accountCity, accountState])



