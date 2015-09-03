/* ----------------------------- Layers ------------------------*/

var overlayMaps = {
  "Restrooms": layersCollection.restrooms.layers,
  "Portable Toilets": layersCollection.portables.layers,
  "ATM's": layersCollection.atms.layers,
  "Loading Zones": layersCollection.loadingZones.layers,
  "EMS": layersCollection.ems.layers
};

/* ----------------------------- Layers Control ------------------------*/

//L.control.layers(null, overlayMaps).addTo(map);