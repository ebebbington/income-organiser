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
    }
}
export default Utils