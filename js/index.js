import Utils from './utils.js'

window.addEventListener('DOMContentLoaded', () => {

    const IncomeOrganiser = new IncomeOrganiserModel

    // Normalise dates of input fields
    const dateInputs = document.querySelectorAll('input[type="date"]')
    dateInputs.forEach(dateInput => {
        dateInput.value = Utils.getCurrentDate()
    })

    console.log(IncomeOrganiser)

    // Display income form if no user exists
    if (IncomeOrganiser.user === false) {
        IncomeOrganiser.destroy()
        console.log('no user exists')
        document.getElementById('income-form').classList.remove('hide')
        document.getElementById('expendature-form').classList.add('hide')
        document.getElementById('income-organiser').classList.add('hide')
        Utils.selectHeaderItem('update-income')
    }
    
    // Display table if a user does exist
    if (IncomeOrganiser.user) {
        IncomeOrganiser.retrieve()
        document.getElementById('income-form').classList.add('hide')
        document.getElementById('expendature-form').classList.add('hide')
        document.getElementById('income-organiser').classList.remove('hide')
        Utils.selectHeaderItem('income-organiser-title')
        IncomeOrganiser.expendetures.forEach(expendeture => {
            console.log(expendeture)
        })
    }

    document.getElementById('submit-income-form').onclick = function (event) {
        const pension = parseInt(document.getElementById('pension').value)
        const salary = parseInt(document.getElementById('salary').value)
        if (pension && salary) {
            IncomeOrganiser.pension = pension
            IncomeOrganiser.salary = salary
            document.getElementById('income-form').classList.add('hide')
            document.getElementById('expendature-form').classList.remove('hide')
            Utils.selectHeaderItem('add-expendature')
        } else {

        }
    }

    document.getElementById('submit-expendature-form').onclick = function (event) {
        const paymentTitle = document.getElementById('payment-title').value
        const currency = document.getElementById('currency').value
        const cost = document.getElementById('cost').value
        const dateToRenew = document.getElementById('date-to-renew').value
        if (paymentTitle && currency && cost && dateToRenew) {
            const objData = {
                paymentTitle: paymentTitle,
                dateToRenew: dateToRenew,
                cost: parseInt(cost)
            }
            IncomeOrganiser.currency = currency
            IncomeOrganiser.expendetures.push(objData)
            IncomeOrganiser.save()
            IncomeOrganiser.retrieve()
        } else {

        }
    }
})