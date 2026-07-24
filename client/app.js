const recurso = 'users';

async function getUsers(){
const resposta = await fetch(`http://localhost:3000/${recurso}`)

const dados = await resposta.json();
console.log(dados)
};

getUsers();