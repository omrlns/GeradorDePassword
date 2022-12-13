let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

//base de possibilidade de caracteres, anotar e desenvolver novos vetores que armazenem novas possibilidades
let charset = '0123456789!@#';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
  sizePassword.innerHTML = this.value;
}

//função base, é ela que faz boa parte do programa, responsável por gerar a senha
function generatePassword(){

  let pass = '';
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  //console.log(pass)
  
  //show code, gostei da versão. (versão definida)
  //mostrar e esconder caixa de senha, o refresh da página limpa e o botão revela
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

//função para copiar a senha gerada pela função anterior 
function copyPassword(){
  alert("SENHA COPIADA COM SUCESSO!")
  navigator.clipboard.writeText(novaSenha);
}