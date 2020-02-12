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
        Index.reset()
    }

})