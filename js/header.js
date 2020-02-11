// todo :: create a redirect file? to handle showing all the different 'tabs' e.g. selects header and displays elemtns all within a single function for reusability
import Utils from './utils.js'

window.addEventListener('DOMContentLoaded', () => {

    document.getElementById('update-income').onclick = function (event) {
        document.getElementById('income-form').classList.remove('hide')
        document.getElementById('expendature-form').classList.add('hide')
        document.getElementById('income-organiser').classList.add('hide')
        Utils.selectHeaderItem('update-income')
    }

    document.getElementById('add-expendature').onclick = function (event) {
        document.getElementById('income-form').classList.add('hide')
        document.getElementById('expendature-form').classList.remove('hide')
        Utils.selectHeaderItem('add-expendature')
    }

    document.getElementById('income-organiser-title').onclick = function (event) {
        document.getElementById('income-form').classList.add('hide')
        document.getElementById('expendature-form').classList.add('hide')
        document.getElementById('income-organiser').classList.remove('hide')
        Utils.selectHeaderItem('income-organiser-title')
    }

    document.getElementById('remove-expendature').onclick = function (event) {
        
    }

    document.getElementById('reset').onclick = function (event) {
        const confirmation = confirm('Are you sure you want to do this? This will remove all your data')
        if (confirmation) {
            const IncomeOrganiser = new IncomeOrganiserModel
            IncomeOrganiser.destroy()
            document.getElementById('income-form').classList.remove('hide')
            document.getElementById('expendature-form').classList.add('hide')
            document.getElementById('income-organiser').classList.add('hide')
            Utils.selectHeaderItem('update-income')
        } else {

        }
    }

})