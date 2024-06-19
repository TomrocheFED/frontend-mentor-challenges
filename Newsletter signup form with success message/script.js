function showSuccesMessage(email) {
    container.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="success-message">
                <img class="icon-success" src="assets/images/icon-success.svg" />
                <h2>Thanks for subscribing!</h2>
                <p>A confirmation email has been sent to <strong>${email.value}</strong>. Please open it and click the button inside to confirm your subscription.</p>
                <button onclick="location.reload();">Dismiss message</button>
            </div>
        </div>
    `;
}

function showErrorMessage() {
    errMessage.classList.add('js-show');
    input.classList.add("js-input-invalid");
}

function checkValidity(email) {
    if (!email.value.includes('@')) return false;
    return true;
}

function handleSubmit(e) {
    e.preventDefault();

    let email = document.getElementById("email");
    checkValidity(email) ? showSuccesMessage(email) : showErrorMessage();
}

const container = document.querySelector('.container');
const form = document.querySelector('form');
const input = document.getElementById("email");
const errMessage = document.getElementById("error-message");

form.addEventListener('submit', handleSubmit);

showSuccesMessage()