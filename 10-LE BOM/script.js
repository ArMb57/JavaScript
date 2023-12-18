// Faire un partage avec la camera de l'ordinateur
const constraints = {
    audio: false,
    video: true,
  };

  navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {
    const video = document.querySelector("#videoEl");
    video.srcObject = stream;
  })
  .catch((err) => {
    console.log(err);
  });

// Geolocalisation 
window.navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
});

// accèder à la baterie de l'appareil
navigator.getBattery().then(function(battery) {
    console.log("Niveau de batterie : " + battery.level * 100 + "%");


battery.addEventListener('chargingchange', function() {
    console.log("Branché : " + (battery.charging ? "Oui" : "Non"));
});

});