// todo :: create a redirect file? to handle showing all the different 'tabs' e.g. selects header and displays elemtns all within a single function for reusability
import Utils from './utils.js'
import Index from './index.js'

window.addEventListener('DOMContentLoaded', () => {

    document.getElementById('show-income').onclick = function (event) {
        Index.displayIncomeForm()
    }

    document.getElementById('show-expendatures').onclick = function (event) {
        Index.displayExpendatures()
    }

    document.getElementById('income-organiser-title').onclick = function (event) {
        Index.displayIncomeOrganiser()
    }

    document.getElementById('reset').onclick = function (event) {
        const confirmation = confirm('Are you sure you want to do this? This will remove all your data')
        if (confirmation) {
            const IncomeOrganiser = new IncomeOrganiserModel
            IncomeOrganiser.destroy()
            document.getElementById('income-form').classList.remove('hide')
            document.getElementById('expendatures-table').classList.add('hide')
            document.getElementById('income-organiser').classList.add('hide')
            Utils.selectHeaderItem('show-income')
            Index.fillIncomeForm()
            Index.populateExpendatures()
            Index.fillIncomeOrganiserTable()
        } else {

        }
    }

})