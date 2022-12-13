const frm = document.querySelector("form")

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
//frm.addEventListener("submit", (e) => {
    //e.preventDefault() //evita o refresh da página
//}
//)

function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "marlon" && senha == "123456") {
        alert('LOGIN EFETUADO COM SUCESSO!');
        location.href = "home.html";
    } else {
        alert('ERRO! LOGIN NÃO ENCONTRADO!');
    }

}

//atribuir mais funções, para melhor o desempenho da validação e cadastro de logins


