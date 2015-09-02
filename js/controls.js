/* ----------------------------- Layers ------------------------*/

var overlayMaps = {
	"Restrooms": layersCollection.restrooms.layers,
	"Portable Toilets": layersCollection.portables.layers,
	"ATM's": layersCollection.atms.layers,
	"Loading Zones": layersCollection.loadingZones.layers,
	"EMS": layersCollection.ems.layers
 };
 
var grayscale = L.mapbox.tileLayer("alopexid.n9ih10h9");

var baseLayers = {
	"Greyscale": grayscale
};

/* ----------------------------- Layers Control ------------------------*/

L.control.layers(baseLayers, overlayMaps).addTo(map);