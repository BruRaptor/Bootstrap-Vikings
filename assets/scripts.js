let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

let contador = document.querySelector('#contador')
contador.innerHTML = "0 / 100"


function valorNome() {
  let txtNome = document.querySelector('#txtNome');

  if (nome.value.length >= 4) {
    txtNome.style.color = '#000000';
    txtNome.innerHTML = 'Nome válido!';
    nomeOk = true;
  } else {
    txtNome.style.color = '#ff0000';
    txtNome.innerHTML = 'Nome inválido - Insira pelo menos 4 caracteres!';
    nomeOk = false;
  }
}

function validaEmail(){
  let txtEmail = document.querySelector('#txtEmail')

  if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    txtEmail.innerHTML = 'E-mail Valido!'
    txtEmail.style.color = '#000000'
    emailOk = true;
  } else {
    txtEmail.innerHTML = 'E-mail Invalido!';
    txtEmail.style.color = '#ff0000';
    emailOk = false;
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector('#txtAssunto');

    contador.innerHTML = `${assunto.value.length} / 100`

  if (assunto.value.length >100) {
    txtAssunto.innerHTML =
      'Texto é muito grande, digite no máximo 100 caracteres!';
    txtAssunto.style.color = '#ff0000';
    txtAssunto.style.display = 'block';
    assuntoOk = false;
  } else {
    txtAssunto.style.display = 'none';
    assuntoOk = true;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('Formulário enviado com sucesso!');
  } else {
    alert('Preencha o formulário corretamente antes de enviar...');
  }
}

function count(){
  let contador = document.querySelector('#contador')
  contador.innerHTML = `${assunto.value.length} / 100`
}