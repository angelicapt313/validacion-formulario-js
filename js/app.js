const nombre = document.querySelector('.nombreInput');
const email = document.querySelector('.emailInput');
const textArea = document.querySelector('.textArea');


nombre.addEventListener('blur', validations);
email.addEventListener('blur', validations);
textArea.addEventListener('blur', validations)


function validations(e){
    if(e.target.value.trim() === ''){
        showAlert(`The field ${e.target.id} is required.`, e.target.parentElement);
    }
}

function showAlert(string, referenceMessage){

    const deleteMultipleAlerts = referenceMessage.querySelector('.nombreInput--error', '.borderError--input')

    if(deleteMultipleAlerts){
        deleteMultipleAlerts.remove();
    }

  
    let messageError = document.createElement('P');
    messageError.textContent = string;
    messageError.classList.add('nombreInput--error');
    let borderInputError = referenceMessage.lastElementChild;
    borderInputError.classList.add('borderError--input');
  
    referenceMessage.appendChild(messageError);

}

