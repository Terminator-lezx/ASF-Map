L.mapbox.accessToken = 'pk.eyJ1IjoiYWxvcGV4aWQiLCJhIjoiNGRhOGQ0YWJjYWZiNjMwM2YyYmE1OTA1Nzc5ZWI5ODEifQ.qyNsa7LBqCtnA_wredr2UQ';

var map = L.mapbox.map('map','mapbox.light')
  .setView([61.581, -149.135], 16)
  .featureLayer.setGeoJSON(geojson);

var overlayMaps = {
	"Restrooms": layersCollection.restrooms.layers,
	"Portable Toilets": layersCollection.portables.layers,
	"ATM's": layersCollection.atms.layers,
	"Loading Zones": layersCollection.loadingZones.layers,
	"EMS": layersCollection.ems.layers
 }