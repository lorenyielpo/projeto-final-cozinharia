console.log("amor")
let btnEnvio = document.getElementById("btn-Envio");
console.log("amore")
$('btn-Envio').click(function (e) {
    e.preventDefault()
})
console.log("mor")
btnEnvio.addEventListener("click", cliqueBtn)
console.log("all")
function cliqueBtn (){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let assunto = document.getElementById("assunto").value
    let mensagem = document.getElementById("mensagem").value

    return false
}
console.log("amor")