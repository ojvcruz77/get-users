const email = document.querySelector('input[type="email"]');
const newPassword = document.querySelector('#new_password');
const confirmNewPassword = document.querySelector('#confirm_new_password');
const passwordLabel = document.querySelector('#passwordLabel');
const checkbox = document.querySelector('input[type="checkbox"]');
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value;
    const newPasswordValue = newPassword.value;
    const confirmNewPasswordValue = confirmNewPassword.value;

    if (emailValue !== sessionStorage.getItem('email'))
        return alert('Email não registrado.');

    if (
        !emailValue ||
        !newPasswordValue ||
        !confirmNewPasswordValue
    )
        return alert('Preencha todos os campos.');

    if (newPasswordValue !== confirmNewPasswordValue)
        return alert('As senhas não coincidem, tente novamente.');

     if (newPasswordValue === confirmNewPasswordValue)
        sessionStorage.setItem('password', newPasswordValue);
        alert('Senha alterada com sucesso.');

});

checkbox.addEventListener('change', () => {
    const attributeValue = newPassword.getAttribute('type')

    if (attributeValue === 'password'){
        newPassword.setAttribute('type', 'text');
        confirmNewPassword.setAttribute('type', 'text');
        passwordLabel.textContent = 'Ocultar Senha';
        return;
}
    newPassword.setAttribute('type', 'password');
    confirmNewPassword.setAttribute('type', 'password');
    passwordLabel.textContent = 'Mostrar Senha';

});


