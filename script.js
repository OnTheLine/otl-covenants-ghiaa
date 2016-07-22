// Edit the center point and zoom level
var map = L.map('map', {
  center: [41.7671, -72.7266],
  zoom: 13,
  scrollWheelZoom: false
});
// create custom pane for town layer, set below overlay zIndex 400, make non-clickable
map.createPane('towns');
map.getPane('towns').style.zIndex = 350;
map.getPane('towns').style.pointerEvents = 'none';

// Edit links to your GitHub repo and data source credit
map.attributionControl
.setPrefix('View <a href="http://github.com/jackdougherty/otl-covenants" target="_blank">sources and code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');

new L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

L.control.scale().addTo(map);

// town outline layer, with custom pane set to lower non-clickable layer
$.getJSON("src/ct-towns-simple.geojson", function (data) {
  var geoJsonLayer = L.geoJson(data, {
    style: function (feature) {
      return {
        'color': 'red',
        'weight': 2,
        fillOpacity: 0
      }
    },
    pane: 'towns'
  }).addTo(map);
});

// restrictive covenants layer on top
$.getJSON("map.geojson", function (data) {
  geoJsonLayer = L.geoJson(data, {
    style: style,
    onEachFeature: function( feature, layer) {
      var popupText = "<b>" + feature.properties.longname + "</b><br />"
         + "&quot;" + feature.properties.text + "&quot; -- " + feature.properties.date + "<br />"
         + "<a href='https://jackdougherty.github.io/otl-covenants/pdf/" + feature.properties.name + ".pdf' target='_blank'>View property deed (PDF opens new tab)</a>";
      layer.bindPopup(popupText);
    }
  }).addTo(map);
});

function style(feature) {
  return {
    fillColor: 'purple',
    weight: 1,
    opacity: 1,
    color: 'black',
    fillOpacity: 0.7
  };
}

// places a star on state capital of Hartford, CT
var starIcon = L.icon({
  iconUrl: 'src/star-18.png',
  iconRetinaUrl: 'src/star-18@2x.png',
  iconSize: [18, 18]
});
L.marker([41.7646, -72.6823], {icon: starIcon}).addTo(map);
