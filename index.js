const $form = document.querySelector('#signup-form');
const PASSWORD = document.querySelector('#password');
const VERIFICATION = document.querySelector('#confirmation-password');
const PASSWORD_VERIFICATION = [PASSWORD, VERIFICATION];
const FIRST_NAME = document.querySelector('#first-name');
const LAST_NAME = document.querySelector('#last-name');
const EMAIL = document.querySelector('#email');
const PHONE_NUMBER = document.querySelector('#phone-number');

const validatePasswordMatch = () => {
    if (PASSWORD.checkValidity() && PASSWORD.value === VERIFICATION.value) {
        VERIFICATION.setCustomValidity('');
        document.querySelector('#alert-confirmation-password').innerText = '';
    } else {
        VERIFICATION.setCustomValidity('Passwords do not match.');
        document.querySelector('#alert-confirmation-password').innerText = '* Password do not match.';
    }
}

const passwordValidation = () => {
    if (!PASSWORD.checkValidity()) {
        document.querySelector('#alert-password').innerText = '* Password is not valid.';
    } else {
        document.querySelector('#alert-password').innerText = '';
    }
}

const nameValidation = () => {
    if (!FIRST_NAME.checkValidity()) {
        document.querySelector('#alert-first-name').innerText = '* Name is not valid.';
    } else {
        document.querySelector('#alert-first-name').innerText = '';
    }
}

const lastNameValidation = () => {
    if (!LAST_NAME.checkValidity()) {
        document.querySelector('#alert-last-name').innerText = '* Last name is not valid.';
    } else {
        document.querySelector('#alert-last-name').innerText = '';
    }
}

const emailValidation = () => {
    if (!EMAIL.checkValidity()) {
        document.querySelector('#alert-email').innerText = '* Email is not valid.';
    } else {
        document.querySelector('#alert-email').innerText = '';
    }
}

const PhoneValidation = () => {
    if (!PHONE_NUMBER.checkValidity()) {
        document.querySelector('#alert-phone-number').innerText = '* Phone number is not valid.';
    } else {
        document.querySelector('#alert-phone-number').innerText = '';
    }
}

$form.addEventListener('submit', (event) => {
    $form.classList.add('is-validated');
    event.preventDefault();
    event.stopPropagation();

    nameValidation();
    lastNameValidation();
    emailValidation();
    PhoneValidation();
    passwordValidation();
    validatePasswordMatch();

    FIRST_NAME.addEventListener('input', nameValidation);
    LAST_NAME.addEventListener('input', lastNameValidation);
    EMAIL.addEventListener('input', emailValidation);
    PHONE_NUMBER.addEventListener('input', PhoneValidation);
    PASSWORD.addEventListener('input', passwordValidation);
    PASSWORD_VERIFICATION.forEach(e => e.addEventListener('input', validatePasswordMatch));
});
