const nombre = document.querySelector('.nombreInput');
const email = document.querySelector('.emailInput');
const textArea = document.querySelector('.textArea');


nombre.addEventListener('blur', validations);
email.addEventListener('blur', validations);
textArea.addEventListener('blur', validations)


function validations(e){
    if(e.target.value.trim() === ''){
        showAlert(`The field ${e.target.id} is not valide`, e.target.parentNode);
    }
}

function showAlert(string, referenceMessage){
    console.log(string, referenceMessage);

    //Crear html
    let messageError = document.createElement('P');
    messageError.textContent = string;
    
    // Mostrar html creado
    referenceMessage.appendChild(messageError);

}

