function accettaPrivacy(){
    var cognome=document.getElementById("cognome").value;
    var nome=document.getElementById("nome").value;
    var email=document.getElementById("email").value;
    alert(cognome + " " + nome + " sei ufficialmente iscritto alla nostra newsletter");
}

function nonAcettaPrivacy(){
    alert("non avendo accettato le condizioni della privacy non possiamo accettare la tua iscrizione alla nostra newsletter");
}