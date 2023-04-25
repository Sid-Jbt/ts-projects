const form = document.querySelector("form")!;
declare var ol: any;
 
function searchAddressHandler(event: Event) {
  event.preventDefault();
  
  const coordinates = {lat: 23.0681586, lng: 72.5759465};
 
  document.getElementById('map')!.innerHTML = '';
  new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 16
    })
  });
}

form.addEventListener("submit", searchAddressHandler);