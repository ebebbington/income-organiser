/**
 * @example
 * import Utils from './utils.js
 * Utils.selectHeaderItem()
 */
const Utils = {

    selectHeaderItem: function (id) {
        const children = document.querySelector('header > ul').children
        for (let i = 0; i < children.length; i++) {
            if (children[i].classList.contains('selected')) {
                children[i].classList.remove('selected')
            }
        }
        const headerToSelect = document.getElementById(id)
        headerToSelect.classList.add('selected')
    },

    getCurrentDate: function () {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        //today = dd + '/' + mm + '/' + yyyy;
        today = yyyy + '-' + mm + '-' + dd
        return today
    },

    calculateTaxYearly: function (salary) {
        const taxFreeAmount = 12500
        const taxBrackets = [
            {
                min: 12501,
                max: 50000,
                rate: 20
            },
            {
                min: 50001,
                max: 150000,
                rate: 40
            },
            {
                min: 150001,
                rate: 45
            }
        ]
        let totalTax = 0
        if (salary >= taxBrackets[2].min) {
            totalTax = Math.ceil(((salary - taxFreeAmount) / 100) * taxBrackets[2].rate)
            return totalTax
        }
        if (salary >= taxBrackets[1].min) {
            totalTax = Math.ceil(((salary - taxFreeAmount) / 100) * taxBrackets[1].rate)
            return totalTax
        }
        if (salary >= taxBrackets[0].min) {
            totalTax = Math.ceil(((salary - taxFreeAmount) / 100) * taxBrackets[0].rate)
            return totalTax
        }
        console.log('no tax')
        return 0
    },

    calculatePensionCostYearly: function (salary, pensionPercentage) {
        return (salary / 100) * pensionPercentage
    },

    calculateNICostYearly: function (salary) {
        const weeklySalary = (salary / 12) / 4.3333
        let NIBracketOne = 0 // NI on first 730
        if (weeklySalary < 892) {
            NIBracketOne = ((weeklySalary - 162) / 100) * 12
        }
        let NIBracketTwo = 0 // NI on anything > 892
        if (weeklySalary > 892) {
            NIBracketTwo = weeklySalary - 892 / 100 * 2
        }
        const weeklyNI = NIBracketTwo + NIBracketOne
        const monthlyNI = weeklyNI * 4.234
        const yearlyNI = monthlyNI * 12
        return Math.ceil(yearlyNI)
    }
}
export default Utils