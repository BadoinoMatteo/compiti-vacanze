var initialize = function() {

  // fornisce latitudine e longitudine
  var latlng = new google.maps.LatLng(48.858093, 2.294694);

  // imposta le opzioni di visualizzazione
  var options = { zoom: 12,
                  center: latlng,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                };

  // crea l'oggetto mappa
  var map = new google.maps.Map(document.getElementById('map'), options);
  var marker = new google.maps.Marker({ position: latlng,
                                      map: map,
                                      title: 'Lat e Long = 48.858093, 2.294694' });
}

window.onload = initialize;