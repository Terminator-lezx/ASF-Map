L.mapbox.accessToken = 'pk.eyJ1IjoiYWxvcGV4aWQiLCJhIjoiNGRhOGQ0YWJjYWZiNjMwM2YyYmE1OTA1Nzc5ZWI5ODEifQ.qyNsa7LBqCtnA_wredr2UQ';

var mapboxUrl = "http://api.tiles.mapbox.com/v3/mapbox.mapbox-light.jsonp";
//var grayscale = L.tileLayer(mapboxUrl, {id: "alopexid.n9ih10h9", attribution: mapboxAttribution});
//var mapboxAttribution = L.control.attribution().addTo(map);
//credits.addAttribution("© <a href='https://www.mapbox.com/map-feedback/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap contributors</a>");

//    center: [61.580651994750504, -149.12893295288086],
//    zoom: 15,
//    layers: [grayscale]
//});

var map = L.mapbox.map('map','mapbox.light');
	map.setView([61.580651994750504, -149.12893295288086], 16);
	L.control.locate().addTo(map);
  //map.layers([layersCollection.restrooms.layers, layersCollection.portables.layers, layersCollection.atms.layers,
  	//layersCollection.ems.layers]);
  //.featureLayer.setGeoJSON(geojson);