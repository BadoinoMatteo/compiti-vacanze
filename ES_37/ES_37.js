function controlloPeso(){
    var peso;
    peso=document.getElementById("peso").value;
    if (peso < 10 || peso > 100){
        alert ("peso non valido");
    }
}

function controllaAltezza(){
    var altezza;
    altezza=document.getElementById("altezza").value;
    if (altezza < 0,50 || altezza > 2){
        alert ("altezza non valida");
    }
}

function calcolo(){
    var peso;
    var altezza;
    var  ibm;
    peso = document.getElementById("peso").value;
    altezza = document.getElementById("altezza").value;
    ibm=peso/altezza;
    if(ibm<18){
        alert("BASSO");
    }else{
        if (ibm > 25){
            alert("ALTO");
        }else{
            alert("CORRETTO");
        }
    }
}