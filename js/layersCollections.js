var layersCollection = {
	restrooms: {
		name: "Restroom",
		layers: []
	},
	portables: {
		name: "Portable Restroom",
		layers: []
	},
	atms: {
		name: "ATM",
		layers: []
	},
	loadingZones: {
		name: "Loading Zone",
		layers: []
	},
	ems: {
		name: "EMS",
		layers: []
	}
}

//restrooms
var arrLength = restroomsArr.length;
var a = 0;
var BATHROOMS = [];
for (i=0; i<arrLength; i++) {
	var layer = L.marker([restroomsArr[i], restroomsArr[i+=1]], {icon: bathIcon});
	BATHROOMS.push(layer);//pushing the bathroms array item to the variable layer every iteration
}
layersCollection.restrooms.layers = BATHROOMS;

//portable toilets
var arrLength = portablesArr.length;
var a = 0;
var PORTABLES = [];
for (i=0; i<arrLength; i++) {
	var layer = L.marker([portablesArr[i], portablesArr[i+=1]], {icon: bathIconPortable});
	PORTABLES.push(layer);//pushing the bathroms array item to the variable layer every iteration
}
layersCollection.portables.layers = PORTABLES;

//atms
var arrLength = atmArr.length;
var a = 0;
var ATM = [];
for (i=0; i<arrLength; i++) {
	var layer = L.marker([atmArr[i], atmArr[i+=1]], {icon: atmIcon});
	ATM.push(layer);//pushing the bathroms array item to the variable layer every iteration
}
layersCollection.atms.layers = ATM;

//loading zones
var arrLength = loadingZoneArr.length;
var a = 0;
var LOADING = [];
for (i=0; i<arrLength; i++) {
	var layer = L.marker([loadingZoneArr[i], loadingZoneArr[i+=1]], {icon: loadingIcon});
	LOADING.push(layer);//pushing the bathroms array item to the variable layer every iteration
}
layersCollection.loadingZones.layers = LOADING;

// ems
var arrLength = emsArr.length;
var a = 0;
var EMS = [];
for (i=0; i<arrLength; i++) {
	var layer = L.marker([emsArr[i], emsArr[i+=1]], {icon: emsIcon});
	EMS.push(layer);//pushing the bathroms array item to the variable layer every iteration
}
layersCollection.ems.layers = EMS;




