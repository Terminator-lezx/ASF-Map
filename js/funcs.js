function addLayerToMap(layer, message) {
  layer.addTo(map).bindPopup(message);
}

function removeLayerFromMap(layer) {
  if( map.hasLayer(layer)) {
    map.removeLayer(layer);
  }
}