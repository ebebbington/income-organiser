class IncomeOrganiserModel {

    /**
     * @type {string} pension Represents the percentage
     */
    pension = 0

    /**
     * @type {int} salary Salary after tax
     */
    salary = 0

    /**
     * @type {string} currency The currecy used to be used alongside the numbers
     */
    currency = ''

    /**
     * @type {Array<{paymentTitle: string, dateToRenew: string, cost: int}>} expenditures List of expenditures
     */
    expenditures = []

    /**
     * @type {boolean} user If the user has data in the LS
     */
    user = false

    constructor () {
        this.checkLocalStorage()
    }

    checkLocalStorage () {
        const exists = localStorage.getItem('user') ? true : false
        this.user = exists
    }

    HTMLiseData () {
        const html = '<ul><li>Pension: ' + this.pension + '%</li><li>Salary: ' + this.currency + this.salary + '</li><li>expenditures: ' + JSON.stringify(this.expenditures) + '</li></ul>'
        return html
    }

    save () {
        this.user = true
        localStorage.setItem('IncomeOrganiser', JSON.stringify(this))
        localStorage.setItem('user', true)
    }

    retrieve () {
        const data = JSON.parse(localStorage.getItem('IncomeOrganiser'))
        if (data) {
            this.salary = data.salary
            this.user = true
            this.currency = data.currency
            this.expenditures = data.expenditures
            this.pension = data.pension
        } else {
            this.user = false
        }
    }

    deleteExpendature (paymentTitle) {
        this.expenditures.forEach((expenditure, index) => {
            if (expenditure.paymentTitle === paymentTitle) {
                this.expenditures.splice(index, 1)
            }
        })
        this.save()
        this.retrieve()
    }

    destroy () {
        localStorage.removeItem('user')
        localStorage.removeItem('IncomeOrganiser')
        this.user = false
        this.currency = ''
        this.pension = 0
        this.salary = 0
        this.expenditures = []
    }
}