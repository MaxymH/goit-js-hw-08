var _ = require('lodash');


const form = document.querySelector('.feedback-form')
const post = form.email;
const textarea = form.message


const setValueForLocalStorage = e => {
    const nav = e.currentTarget.elements
    
    const allValue = {
        email: nav.email.value,
        message: nav.message.value
    }
    if (allValue) {
        localStorage.setItem("feedback-form-state", JSON.stringify({allValue}))
    }
}  


const throttle = _.throttle(setValueForLocalStorage, 500)

form.addEventListener('input', throttle)

const onFormSubmit = (e) => {
    e.preventDefault()

    const saved_value = localStorage.getItem("feedback-form-state")
    const parseSavedValue = JSON.parse(saved_value)
    const allValue = parseSavedValue.allValue
    
    console.log(allValue);

    localStorage.clear()
    e.currentTarget.reset()
}

form.addEventListener('submit', onFormSubmit)

const populateValueForLocalStorage = () => {
    const saved_value = localStorage.getItem("feedback-form-state")
    const parseSavedValue = JSON.parse(saved_value)


    if (saved_value) {
        const destructuring = parseSavedValue.allValue;
        const { email, message } = destructuring;


        textarea.value = message;
        post.value = email    
    }
}
populateValueForLocalStorage()