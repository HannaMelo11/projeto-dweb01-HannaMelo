var nome;
var sobrenome;
var email;
var assunto;
var mensagem;
var form_campo_vazio;
var form_email_valido;

function ValidaCampoVazio() {
    /* Valida se o campo está vazio */
    if (nome != "" && sobrenome != "" && email != "" && assunto != "" && mensagem != "") {
    form_campo_vazio = 0;
    /* Valida se a funçao validacaoEmail retornou verdadeira */
    if (form_email_valido = 1)
        alert("Mensagem enviada com sucesso!")

        else 
            alert("Digite o e-mail corretamente")
}
    else {
        form_campo_vazio=1;
        alert("Por favor preencha todos os campos do formulário")
    }
}

    function ValidacaoEmail(field) {
        usuario = field.value.substring(0, field.value.indexOf("@"));
        dominio = field.value.substring(0, field.value.indexOf("@")+ 1, field.value.length);

        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search ("@")==-1) &&
            (dominio.search ("@")==-1) &&
            (usuario.search (" ")==-1) &&
            (dominio.search (" ")==-1) &&
            (usuario.search (".")!=1)  &&
            (dominio.search (".") >=1) &&
            (dominio.lastIndexOf('.') < dominio.length - 1)) {
        document.getElementById("msgemail").innerHTML="E-mail válido";
        form_email_valido=1;
    }
        else {
            document.getElementById("msgemail").innerHTML="<font color'red'> Email Inválido </font>";
            alert ("E-mail Inválido");
        }
    }

