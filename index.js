// Write your solution in this file!
// Write your solution in this file!
var customerName='bob';
console.log(customerName)

const upperCaseCustomerName=()=>
{
    return customerName.toUpperCase()
}
console.log(upperCaseCustomerName())

const setBestCustomer=()=>
{
    bestCustomer=`not ${customerName}`
}
setBestCustomer()
console.log(bestCustomer)

const overwriteBestCustomer=()=>
{
    bestCustomer=`maybe ${customerName}`
}
overwriteBestCustomer()
console.log(bestCustomer)

const leastFavoriteCustomer="Simon"

const changeLeastFavoriteCustomer=()=>
{
    return leastFavoriteCustomer="Samuel"
}
console.log(changeLeastFavoriteCustomer())