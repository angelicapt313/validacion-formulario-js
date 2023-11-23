const nombre = document.querySelector('.nombreInput');
const email = document.querySelector('.emailInput');
const textArea = document.querySelector('.textArea');
const btnSend = document.querySelector('.btnSend')


nombre.addEventListener('blur', validations);
email.addEventListener('blur', validations);
textArea.addEventListener('blur', validations)

const saveValuesForm = {
    name: '',
    email: '',
    comments: ''
};


function validations(e) {

    if (e.target.value.trim() === '') {
        showAlert(`The field ${e.target.id} is required.`, e.target.parentElement);
        return
    }

    if (e.target.id === 'email' && !validateEmail(e.target.value)) {
        showAlert('Email incorrect', e.target.parentElement); 
        return
    }

    cleanFields(e.target.parentElement);
    
    saveValuesForm[e.target.id] = e.target.value.trim().toLowerCase();

    validateFieldsForm();
}

function showAlert(string, referenceMessage) {

    cleanFields(referenceMessage);

    let messageError = document.createElement('P');
    messageError.textContent = string;
    messageError.classList.add('nombreInput--error');

    let inputError = referenceMessage.querySelector('.form-control');
    inputError.classList.add('borderError--input')

    referenceMessage.appendChild(messageError);

}

function cleanFields(reference) {
    let deleteMultipleAlerts = reference.querySelector('.nombreInput--error');

    if (deleteMultipleAlerts) {
        deleteMultipleAlerts.remove();
    }
}

function validateEmail(email) {
    let regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let result = regex.test(email);
    return result;
}

function validateFieldsForm(){
    if(Object.values(saveValuesForm).includes('')){
        btnSend.disabled = true;
        return
    }
        btnSend.disabled = false;
    
}