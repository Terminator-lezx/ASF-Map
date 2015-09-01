var map = L.mapbox.map('map','mapbox.light')
  .setView([61.581, -149.135], 16)
  .featureLayer.setGeoJSON(geojson);