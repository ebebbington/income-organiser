import Utils from './utils.js'
const IncomeOrganiser = new IncomeOrganiserModel

//
// Methods
//

const Index = {
    displayIncomeForm: function () {
        document.getElementById('income-form').classList.remove('hide')
        document.getElementById('expendatures-table').classList.add('hide')
        document.getElementById('income-organiser').classList.add('hide')
        Utils.selectHeaderItem('show-income')
    },
    normaliseDateInputs: function () {
        const dateInputs = document.querySelectorAll('input[type="date"]')
        dateInputs.forEach(dateInput => {
            dateInput.value = Utils.getCurrentDate()
        })
    },
    displayExpendatures: function () {
        IncomeOrganiser.retrieve()
        if (IncomeOrganiser.user) {
            document.getElementById('income-form').classList.add('hide')
            document.getElementById('expendatures-table').classList.remove('hide')
            document.getElementById('income-organiser').classList.add('hide')
            Utils.selectHeaderItem('income-organiser-title')
            // todo :: display table correctly
        } else {
            alert("You haven\'t created one yet")
            Index.displayIncomeForm()
        }
    },
    handleIncomeSubmit: function () {
        const pension = parseInt(document.getElementById('pension').value)
        const salary = parseInt(document.getElementById('salary').value)
        const currency = document.getElementById('currency').value
        if (pension !== '' && salary !== '' && currency !== '') {
            IncomeOrganiser.retrieve()
            IncomeOrganiser.pension = pension
            IncomeOrganiser.salary = salary
            IncomeOrganiser.currency = currency
            IncomeOrganiser.save()
            alert('Saved the form')
        } else {
            alert('Please fill out all the fields')
        }
    },
    displayExpendatureForm: function () {
        document.getElementById('income-form').classList.add('hide')
        document.getElementById('expendature-form').classList.remove('hide')
        document.getElementById('income-organiser').classList.add('hide')
        Utils.selectHeaderItem('add-expendature')
    },
    handleExpendatureSubmit: function () {
        const paymentTitle = document.getElementById('payment-title').value
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
            alert('Saved the expendature')
        } else {
            alert('Please fill out all the fields')
        }
    },

    fillIncomeForm: function () {
        document.getElementById('pension').value = IncomeOrganiser.pension || ''
        document.getElementById('salary').value = IncomeOrganiser.salary || ''
        document.getElementById('currency').value = IncomeOrganiser.currency || ''
    },

    populateExpendatures: function () {
        const expendaturesTable = document.getElementById('expendatures-table')
        IncomeOrganiser.expendetures.forEach(expendeture => {
            let element = document.createElement('tr')
            const dateCollection = expendeture.dateToRenew.split('-')
            const day = dateCollection[2]
            const month = dateCollection[1]
            const year = dateCollection[0]
            const formattedDate = day + '/' + month + '/' + year
            element.innerHTML =
                '<tr>' +
                    `<td>${expendeture.paymentTitle}</td><td>${expendeture.cost}</td><td>${formattedDate}</td>` +
                '</tr>'
            expendaturesTable.appendChild(element)
        })
    },

    displayIncomeOrganiser: function () {
        if (IncomeOrganiser.user) {
            document.getElementById('income-form').classList.add('hide')
            document.getElementById('expendatures-table').classList.add('hide')
            document.getElementById('income-organiser').classList.remove('hide')
            Utils.selectHeaderItem('income-organiser-title')
        } else {
            alert('Create one please!')
        }
    },

    fillIncomeOrganiserTable: function () {
        const salary = IncomeOrganiser.salary

        const taxYearly = Utils.calculateTaxYearly(salary)
        document.getElementById('tax-monthly').textContent = IncomeOrganiser.currency + Math.ceil( taxYearly / 12)
        document.getElementById('tax-yearly').textContent = IncomeOrganiser.currency +  Math.ceil(taxYearly)

        const pensionCostYearly = Utils.calculatePensionCostYearly(salary, IncomeOrganiser.pension)
        document.getElementById('pension-monthly').textContent = IncomeOrganiser.currency + Math.ceil(pensionCostYearly / 12)
        document.getElementById('pension-yearly').textContent = IncomeOrganiser.currency +  Math.ceil(pensionCostYearly)

        const NICostYearly = Utils.calculateNICostYearly(salary)
        document.getElementById('ni-monthly').textContent = IncomeOrganiser.currency + Math.ceil(NICostYearly / 12)
        document.getElementById('ni-yearly').textContent = IncomeOrganiser.currency +  Math.ceil(NICostYearly)

        let monthlyExpendeture = 0
        IncomeOrganiser.expendetures.forEach(expendeture => {
            monthlyExpendeture += expendeture.cost
        })
        document.getElementById('expendeture-monthly').textContent = IncomeOrganiser.currency +  Math.ceil(monthlyExpendeture)
        document.getElementById('expendeture-yearly').textContent = IncomeOrganiser.currency + Math.ceil(monthlyExpendeture * 12)

        const totalPaidMonthly = monthlyExpendeture + (NICostYearly / 12) + (pensionCostYearly / 12) + (taxYearly / 12)
        document.getElementById('total-paid-monthly').textContent = IncomeOrganiser.currency +  Math.ceil(totalPaidMonthly)
        document.getElementById('total-paid-yearly').textContent = IncomeOrganiser.currency + Math.ceil(totalPaidMonthly / 12)

        const actualYearlyIncome = salary - (monthlyExpendeture * 12) - NICostYearly - pensionCostYearly - taxYearly
        document.getElementById('actual-income-monthly').textContent = IncomeOrganiser.currency + Math.ceil(actualYearlyIncome / 12)
        document.getElementById('actual-income-yearly').textContent = IncomeOrganiser.currency + Math.ceil(actualYearlyIncome)
    }
    
}

//
// Handlers
//

window.addEventListener('DOMContentLoaded', () => {


    // Normalise dates of input fields
    Index.normaliseDateInputs()

    // Retrieve data if any
    IncomeOrganiser.retrieve()

    // Fill the income form
    Index.fillIncomeForm()

    // Display the list of expendatures
    Index.populateExpendatures()

    // Fill the income organiser table
    Index.fillIncomeOrganiserTable()

    // Display income form if no user exists
    if (IncomeOrganiser.user === false) {
        Index.displayIncomeForm()
    }
    
    // Display table if a user does exist
    if (IncomeOrganiser.user) {
        Index.displayIncomeOrganiser()
    }

    document.getElementById('submit-income-form').onclick = function (event) {
        Index.handleIncomeSubmit()
        Index.fillIncomeOrganiserTable()
    }

    // document.getElementById('submit-expendature-form').onclick = function (event) {
    //     Index.handleExpendatureSubmit()
    // }

    document.getElementById('add-new-expendature').onclick = function (event) {
        // todo :: display form
    }
})

export default Index