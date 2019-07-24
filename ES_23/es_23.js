function play(){
    const video = document.querySelector("#video");
    video.play();
}

function stop(){
    const video = document.querySelector("#video");
    video.pause();
}

function cambiaVolume(evento){
    video.volume = evento.target.value;
}

function avanzaDieciSecondi(){
    var tempo=video.currentTime;
    video.currentTime = tempo+10.0;
}

function avanzaTrentaSecondi(){
    var tempo=video.currentTime;
    video.currentTime = tempo+30.0;
}

function avanzaMinuto(){
    var tempo=video.currentTime;
    video.currentTime = tempo+60.0;
}

