
function btn(isincrease, x) {


    const numberField = document.getElementById(x)
    const NumberString = numberField.value;
    const Number = parseInt(NumberString)

    let newNumber;
    if (isincrease === true) {

        newNumber = Number + 1;
    }
    else {

        newNumber = Number - 1;
    }

    numberField.value = newNumber;

    return newNumber

}

function updateTotalPrice(newNumber, id) {


    const totalPrice = newNumber * 59


    const caseTotalElement = document.getElementById(id)
    caseTotalElement.innerText = totalPrice






}
function updatePhonePrice(newNumber, id) {


    const totalPrice = newNumber * 1219


    const caseTotalElement = document.getElementById(id)
    caseTotalElement.innerText = totalPrice






}

function getTextElementValueById(ElementById) {

    const phoneTotal = document.getElementById(ElementById)
    const currentPhoneTotalString = phoneTotal.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString)
    return currentPhoneTotal;


}
function setTextElementValueById(elementId, value) {

    const subTotalelement = document.getElementById(elementId);
    subTotalelement.innerText = value;


}

function calculateSubTotal() {


    const currentPhoneTotal = getTextElementValueById('phone-total')
    const currentCaseTotal = getTextElementValueById('case-total')
    const currentsubTotal = currentCaseTotal + currentPhoneTotal;
    setTextElementValueById('sub-total', currentsubTotal);

    const taxAmountString = (currentsubTotal * 0.1).toFixed(2)
    const taxAmount = parseFloat(taxAmountString)
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentsubTotal + taxAmount

    setTextElementValueById('final-total', finalAmount)


}