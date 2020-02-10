function getCurrentDate () {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    //today = dd + '/' + mm + '/' + yyyy;
    today = yyyy + '-' + mm + '-' + dd
    return today
}

function selectHeaderItem (id) {
    const children = document.querySelector('header > ul').children
    for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains('selected')) {
            children[i].classList.remove('selected')
        }
    }
    const headerToSelect = document.getElementById(id)
    headerToSelect.classList.add('selected')
}

window.addEventListener('DOMContentLoaded', () => {

    const IncomeOrganiser = new IncomeOrganiserModel

    // Normalise dates of input fields
    const dateInputs = document.querySelectorAll('input[type="date"]')
    dateInputs.forEach(dateInput => {
        dateInput.value = getCurrentDate()
    })

    console.log(IncomeOrganiser)

    // Display income form if no user exists
    if (IncomeOrganiser.user === false) {
        IncomeOrganiser.destroy()
        console.log('no user exists')
        document.getElementById('notification-message').innerText = 'You haven\'t filled out the form yet, so here it is!'
        document.getElementById('income-form').classList.remove('hide')
        document.getElementById('expendature-form').classList.add('hide')
        document.getElementById('income-organiser').classList.add('hide')
        selectHeaderItem('update-income')
    }
    
    // Display table if a user does exist
    if (IncomeOrganiser.user) {
        IncomeOrganiser.retrieve()
        document.getElementById('notification-message').innerText = 'Here\'s your income!'
        document.getElementById('income-form').classList.add('hide')
        document.getElementById('expendature-form').classList.add('hide')
        document.getElementById('income-organiser').classList.remove('hide')
        selectHeaderItem('income-organiser-title')
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
            document.getElementById('notification-message').innerText = 'And here is the Expendature form!'
            selectHeaderItem('add-expendature')
        } else {
            document.getElementById('notification-message').innerText = 'Please fill out all the fields.'
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
            document.getElementById('notification-message').innerText = 'Created the expendeture for ' + paymentTitle
        } else {
            document.getElementById('notification-message').innerText = 'Please fill out all the fields.'
        }
    }
})