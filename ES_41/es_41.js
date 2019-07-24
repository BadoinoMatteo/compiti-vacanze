function assistenza(){
    var cognome=document.getElementById("cognome").value;
    var nome=document.getElementById("nome").value;
    var email=document.getElementById("email").value;
    var numeroTelefono=document.getElementById("numeroTelefono").value;
    var paeseResidenza=document.getElementById("paeseResidenza").value;
    var indirizzoResidenza=document.getElementById("viaResidenza").value;
    var numeroCivico=document.getElementById("numeroCivico").value;
    var prodotto=document.getElementById("prodotto").value;
    alert(cognome + " " + nome + " residente in " + paeseResidenza + ", " + indirizzoResidenza + "," + numeroCivico + " riceverà una risposta tramite l'indirizzo email: " + email + " o tramite il numero telefonico " + numeroTelefono + " per l'assistenza del prodotto: " + prodotto);
}

function nonAcettaPrivacy(){
    alert("non avendo accettato le condizioni della privacy non possiamo accettare la sua richiesta di assistenza");
}