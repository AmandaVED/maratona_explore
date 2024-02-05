const respostaElement = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");
const botaoPerguntar = document.querySelector('#botaoPerguntar')

 const respostas = [
    "Certeza!",
    "Não tenho tanta certeza!",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem que não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
 ];



 // Clicar em fazer pergunta
 function fazerPergunta() {

    if(inputPergunta.value == ""){
        alert("É necessário fazer uma pergunta.")
        return

    }

    botaoPerguntar.setAttribute("disabled", true);
     
    const pergunta = "<div>" + inputPergunta.value + "</div>";
    

     // Necessário gerar um número aleatório.

        const totalRespostas = respostas.length;
        const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

        console.log(respostas[numeroAleatorio]);


        // Mostra na tela como um elemento do tipo que for aplicado.
    respostaElement.innerHTML = pergunta + respostas[numeroAleatorio];

    respostaElement.style.opacity = 1;

    // Sumir o texto depois de um tempo
    setTimeout(function() {
        respostaElement.style.opacity = 0;
        botaoPerguntar.removeAttribute("disabled")
    }, 3000);

 };