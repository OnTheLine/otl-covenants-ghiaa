// Edit the center point and zoom level
var map = L.map('map', {
  center: [41.7671, -72.7266],
  zoom: 13,
  scrollWheelZoom: false
});

// Edit links to your GitHub repo and data source credit
map.attributionControl
.setPrefix('View <a href="http://github.com/jackdougherty/otl-restrictive-covenant" target="_blank">sources and code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');

new L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

L.control.scale().addTo(map);

// town polygons (place first so that covenants on top are clickable)
$.getJSON("src/ct-towns-simple.geojson", function (data) {
  var geoJsonLayer = L.geoJson(data, {
    style: function (feature) {
      return {
        'color': 'red',
        'weight': 2,
        fillOpacity: 0
      }
    }
  }).addTo(map);
});

// restrictive covenants
$.getJSON("map.geojson", function (data) {
  geoJsonLayer = L.geoJson(data, {
    style: style,
    onEachFeature: function( feature, layer) {
      var popupText = "<b>" + feature.properties.longname + "</b><br />"
         + "&quot;" + feature.properties.text + "&quot; -- " + feature.properties.date + "<br />"
         + "<a href='https://jackdougherty.github.io/otl-restrictive-covenant/pdf/'"+ feature.properties.name + "'.pdf' target='_blank'>View the property deed</a>";
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
// * TO DO: test whether placement of this code affects its display order, on top of other icons?
var starIcon = L.icon({
  iconUrl: 'src/star-18.png',
  iconRetinaUrl: 'src/star-18@2x.png',
  iconSize: [18, 18]
});
L.marker([41.7646, -72.6823], {icon: starIcon}).addTo(map);
