function initialize(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var acc = position.coords.accuracy;

  // Debugging
  console.log(position.coords);
  console.log("Accuracy: " + acc + "\nLatitude: " + lat + "\nLongitude: " + lon);

  // Google Maps API
  var myLatlng = new google.maps.LatLng(lat, lon);
  var mapOptions = {
    center: new google.maps.LatLng(lat, lon),
    zoom: 20,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "Hello World!"
  });
  map.setCenter(location);
}

function showError() {
  alert("Non Ã¨ possibile rilevare la posizione");
}

function initCoords() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(initialize, showError);
  } else {
    alert("Il tuo browser non supporta la Geolocalizzazione.");
  }
}