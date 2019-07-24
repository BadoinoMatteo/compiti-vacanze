function calcola(){
    var chilometri;
    var ore;
    var velocita;
    chilometri=document.getElementById("chilometri").value;
    ore=document.getElementById("ore").value;
    velocita=chilometri/ore;
    alert ("la velocita' e': " + velocita);
}