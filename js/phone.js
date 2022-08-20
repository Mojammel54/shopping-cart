document.getElementById('btn-phone-plus').addEventListener('click', function () {

    const newNumber = btn(true, 'phone-input-field');
    updatePhonePrice(newNumber, "phone-total")
    calculateSubTotal()






})
document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const newNumber = btn(false, 'phone-input-field');
    updatePhonePrice(newNumber, "phone-total")
    calculateSubTotal()


})



