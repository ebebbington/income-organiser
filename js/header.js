// todo :: create a redirect file? to handle showing all the different 'tabs' e.g. selects header and displays elemtns all within a single function for reusability


// todo :: turn this function into a utils func and address it here and in index.js
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

    document.getElementById('update-income').onclick = function (event) {
        document.getElementById('notification-message').innerText = 'You haven\'t filled out the form yet, so here it is!'
        document.getElementById('income-form').classList.remove('hide')
        document.getElementById('expendature-form').classList.add('hide')
        document.getElementById('income-organiser').classList.add('hide')
        selectHeaderItem('update-income')
    }

    document.getElementById('add-expendature').onclick = function (event) {
        
    }

    document.getElementById('income-organiser-title').onclick = function (event) {
        
    }

    document.getElementById('remove-expendature').onclick = function (event) {
        
    }

    document.getElementById('reset').onclick = function (event) {
        const confirmation = confirm('Are you sure you want to do this? This will remove all your data')
        if (confirmation) {
            const IncomeOrganiser = new IncomeOrganiserModel
            IncomeOrganiser.destroy()
            document.getElementById('notification-message').innerText = 'Successfully removed all data.'
            document.getElementById('notification-message').innerText = 'You haven\'t filled out the form yet, so here it is!'
            document.getElementById('income-form').classList.remove('hide')
            document.getElementById('expendature-form').classList.add('hide')
            document.getElementById('income-organiser').classList.add('hide')
            selectHeaderItem('update-income')
        } else {

        }
    }

})