

document.getElementById('btn-case-plus').addEventListener('click', function () {

    const newNumber = btn(true, 'case-number-field');
    updateTotalPrice(newNumber, 'case-total')
    calculateSubTotal()



})
document.getElementById('btn-case-minus').addEventListener('click', function () {

    const newNumber = btn(false, 'case-number-field');
    updateTotalPrice(newNumber, 'case-total')
    calculateSubTotal()

})

