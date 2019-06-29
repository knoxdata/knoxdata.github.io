// function call 
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

var mymap = L.map('mapid').setView([35.96969, -83.91998], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 19,
    minZoom: 13,
    id: 'alexpawlowski/cix5gj3hm002t2qp4fjx5stib',
    accessToken: 'pk.eyJ1IjoiYWxleHBhd2xvd3NraSIsImEiOiJjaXR3dnV4ZjEwMGJoMm9vOGI5bTM0Zm9tIn0.7uVinZIV7codZNT18VD-4w'
}).addTo(mymap);

var geojsonMarkerOptions = {radius: 8,
    fillColor: "#673AB7",
    color: "#673AB7",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
var geojsonLayer = new L.GeoJSON.AJAX('assets/js/geojson/location.json', {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    },
    onEachFeature: onEachFeature
}).addTo(mymap);

