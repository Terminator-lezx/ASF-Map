//restrooms
var arrLength = restroomsArr.length;
var a = 0;
var bathroomsTemp = [];
for (i=0; i<arrLength; i++) {
	L.marker([restroomsArr[i], restroomsArr[i+=1]], {icon: bathIcon}).addTo(map).bindPopup("Restroom");
}

//portable toilets
var arrLength = portablesArr.length;
var a = 0;
var portablesTemp = [];
for (i=0; i<arrLength; i++) {
	L.marker([portablesArr[i], portablesArr[i+=1]], {icon: bathIconPortable}).addTo(map).bindPopup("Portable Toilet");
}

//atms
var arrLength = atmArr.length;
var a = 0;
var atmTemp = [];
for (i=0; i<arrLength; i++) {
	L.marker([atmArr[i], atmArr[i+=1]], {icon: atmIcon}).addTo(map).bindPopup("ATM");
}

//loading zones
var arrLength = loadingZoneArr.length;
var a = 0;
var loadingTemp = [];
for (i=0; i<arrLength; i++) {
	L.marker([loadingZoneArr[i], loadingZoneArr[i+=1]], {icon: loadingIcon}).addTo(map).bindPopup("Loading Zone");
}

// ems
var arrLength = emsArr.length;
var a = 0;
var emsTemp = [];
for (i=0; i<arrLength; i++) {
	L.marker([emsArr[i], emsArr[i+=1]], {icon: emsIcon}).addTo(map).bindPopup("EMS");
}

//parking
//red parking entrance 
L.marker([61.577785, -149.140183], {icon: redIcon}).addTo(map).bindPopup("Entrance to Red Parking Lot");

// red gate 
L.marker([61.577741, -149.134951], {icon: redIcon}).addTo(map).bindPopup("Red Gate Entrance into Fair Grounds");

//purple parking entrance 
L.marker([61.583065, -149.118112], {icon: purpleIcon}).addTo(map).bindPopup("Entrance to Purple Parking Lot");

//purple gate 
L.marker([61.584362, -149.1288], {icon: purpleIcon}).addTo(map).bindPopup("Purple Gate Entrance into Fair Grounds");

//yellow parking entrance 
L.marker([61.58119, -149.118144], {icon: yellowIcon}).addTo(map).bindPopup("Entrance to Yellow Parking Lot");

//yellow gate 
L.marker([61.581274, -149.122946], {icon: yellowIcon}).addTo(map).bindPopup("Yellow Gate Entrance into Fair Grounds");

//green gate 
L.marker([61.578405, -149.137709], {icon: greenIcon}).addTo(map).bindPopup("Green Gate Entrance into Fair Grounds");