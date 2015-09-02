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