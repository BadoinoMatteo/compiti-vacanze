function change() {
  document.getElementById("buttonRed").classList.toggle("hide")
  document.getElementById("map").classList.toggle("hide");
  start();
}
function start() {
  // fornisce latitudine e longitudine
  var latlng = new google.maps.LatLng(-3.075833, 37.353333);

  // imposta le opzioni di visualizzazione
  var options = { zoom: 12,
                  center: latlng,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                };

  // crea l'oggetto mappa
  var map = new google.maps.Map(document.getElementById('map'), options);
  var marker = new google.maps.Marker({ position: latlng,
                                      map: map,
                                      title: 'Lat e Long = -3.075833, 37.353333' });
}