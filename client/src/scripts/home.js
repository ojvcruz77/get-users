const button = document.querySelector('button');
const tittle = document.querySelector('h1');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const value = confirm("Deseja Realmente sair?");

    if (!value) return

    button.style.display = 'none';
    tittle.textContent = 'Saindo.';


    setTimeout(() => {
        tittle.textContent = 'Saindo..';

    }, 1000);
    setTimeout(() => {
        tittle.textContent = 'Saindo...';

    }, 2000);
    setTimeout(() => {
        window.location.href = '../pages/login.html';
    }, 3000);

});