var _ = require('lodash');


const form = document.querySelector('.feedback-form')
const email = form.email;
const textarea = form.message


const setValueForLocalStorage = () => {
    const allValue = {
        email: email.value,
        message: textarea.value
    }
    if (allValue) {
        localStorage.setItem("feedback-form-state", JSON.stringify({allValue}))
    }
    
}  


const throttle = _.throttle(setValueForLocalStorage, 500)
email.addEventListener('input', throttle)
textarea.addEventListener('input', throttle)

const onFormSubmit = (e) => {
    e.preventDefault()


    const allValue = {
        email: email.value,
        message: textarea.value
    }
    console.log(allValue);


    e.currentTarget.reset()
}

form.addEventListener('submit', onFormSubmit)

const populateValueForLocalStorage = () => {
    const saved_value = localStorage.getItem("feedback-form-state")
    const parseSavedValue = JSON.parse(saved_value)
    if (saved_value) {
        email.value = parseSavedValue.allValue.email
        textarea.value = parseSavedValue.allValue.message
    }
    
}
populateValueForLocalStorage()