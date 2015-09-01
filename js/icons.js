// creating icon class
var FairIcon = L.Icon.extend({
    options: {
        shadowUrl: 'Icons/shadow.png',
        iconSize:     [50, 50],
        shadowSize:   [60, 35],
        iconAnchor:   [25, 50],
        shadowAnchor: [21, 35],
        popupAnchor:  [0, -50]
    }
});

//creating icons from icon class
var bathIconPortable = new FairIcon({iconUrl: 'Icons/portabletoilets.png'}),
    bathIcon = new FairIcon({iconUrl: 'Icons/toiletwgender.png'}),
    atmIcon = new FairIcon({iconUrl: 'Icons/ATM.png'}),
    loadingIcon = new FairIcon({iconUrl: 'Icons/loading.png'}),
    emsIcon = new FairIcon({iconUrl: 'Icons/ems.png'}),
    redIcon = new FairIcon({iconUrl: 'Icons/redParkingEntrance.png'}),
    purpleIcon = new FairIcon({iconUrl: 'Icons/purpleParkingEntrance.png'}),
    yellowIcon = new FairIcon({iconUrl: 'Icons/yellowParkingEntrance.png'}),
    greenIcon = new FairIcon({iconUrl: 'Icons/greenGate.png'});

//creating array with bathrooms coords
var restroomsArr = [
	61.57818, -149.137451,
	61.578624, -149.134203,
	61.580009, -149.133521,
	61.581162, -149.133567,
	61.581611, -149.132108,
	61.580933, -149.125687];

//creating bathrooms array
// instructions for toggling groups of icons here: http://leafletjs.com/examples/layers-control.html
var arrLength = restroomsArr.length;
var a = 0;
var bathrooms = new Array;
	for (i=0; i<arrLength; i++) {
		bathrooms[a] = L.marker([restroomsArr[i], restroomsArr[i+=1]], {icon: bathIcon}).addTo(map).bindPopup("Restroom");
		a++;
	}

//creating array with portable coords
var portablesArr = [
    61.58172, -149.133182,
    61.581867, -149.131786,
    61.584126, -149.12803,
    61.581674, -149.127574,
    61.581345, -149.123359];

//creating portables array
var arrLength = portablesArr.length;
var a = 0;
var portables = new Array;
for (i=0; i<arrLength; i++) {
    portables[a] = L.marker([portablesArr[i], portablesArr[(i+=1)]], {icon: bathIconPortable}).addTo(map).bindPopup("Portable Toilet");
}

//creating array with atm coords
var atmArr = [
    61.577772, -149.13552,
    61.578609, -149.137408,
    61.580071, -149.134323,
    61.581397, -149.133245,
    61.581571, -149.131529,
    61.58435, -149.128302];

//creating atm's array
var arrLength = atmArr.length;
var a = 0;
var atms = new Array;
for (i=0; i<arrLength; i++) {
   atms[a] = L.marker([atmArr[i], atmArr[(i+=1)]], {icon: atmIcon}).addTo(map).bindPopup("ATM");
}

//ems Icon
var ems = L.marker([61.581305, -149.134039], {icon: emsIcon}).addTo(map).bindPopup("I am an EMS Station");

//creating array with loading zone coords
var loadingZoneArr = [
    61.579597, -149.13313,
    61.581317, -149.13467,
    61.583557, -149.131363];

//creating loading zones array
var arrLength = loadingZoneArr.length;
var a = 0;
var loading = new Array;
for (i=0; i<arrLength; i++) {
    loading[a] = L.marker([loadingZoneArr[i], loadingZoneArr[(i+=1)]], {icon: loadingIcon}).addTo(map).bindPopup("ATM");
}

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