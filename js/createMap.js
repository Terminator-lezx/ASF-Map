L.mapbox.accessToken = 'pk.eyJ1IjoiYWxvcGV4aWQiLCJhIjoiNGRhOGQ0YWJjYWZiNjMwM2YyYmE1OTA1Nzc5ZWI5ODEifQ.qyNsa7LBqCtnA_wredr2UQ';

var map = L.mapbox.map('map','mapbox.light')
  .setView([61.581, -149.135], 16)
  .featureLayer.setGeoJSON(geojson);