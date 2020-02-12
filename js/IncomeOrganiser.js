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
     * @type {Array<{paymentTitle: string, dateToRenew: string, cost: int}>} expendetures List of expendetures
     */
    expendetures = []

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
        const html = '<ul><li>Pension: ' + this.pension + '%</li><li>Salary: ' + this.currency + this.salary + '</li><li>Expendetures: ' + JSON.stringify(this.expendetures) + '</li></ul>'
        return html
    }

    save () {
        this.user = true
        localStorage.setItem('IncomeOrganiser', JSON.stringify(this))
        localStorage.setItem('user', true)
    }

    retrieve () {
        const data = JSON.parse(localStorage.getItem('IncomeOrganiser'))
        if (data && data.salary && data.currency && data.expendetures && data.pension) {
            this.salary = data.salary
            this.user = true
            this.currency = data.currency
            this.expendetures = data.expendetures
            this.pension = data.pension
        } else {
            this.user = false
        }
    }

    destroy () {
        localStorage.removeItem('user')
        localStorage.removeItem('IncomeOrganiser')
        this.user = false
        this.currency = ''
        this.pension = 0
        this.salary = 0
        this.expendetures = []
    }
}