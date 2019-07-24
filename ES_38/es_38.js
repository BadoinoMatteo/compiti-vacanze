var prezzo=0;
var totale=0;
function aggiungiProdotto(){
    prezzo=document.getElementById("prezzo").value;
    totale=totale+prezzo;
    alert (totale);
    alert  ("inserisci il nuovo prezzo");
}

function calcoloTotale(){
    alert(totale);
    prezzo=document.getElementById("prezzo").value;
    totale = totale + prezzo;
    alert ("il costo totale e': " + totale);
}

