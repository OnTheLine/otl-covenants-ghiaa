// Edit the center point and zoom level
var map = L.map('map', {
  center: [41.76, -72.69],
  zoom: 11,
  zoomControl: false, // add later to reposition
  scrollWheelZoom: false
});
// create custom pane for town layer, set below overlay zIndex 400, make non-clickable
map.createPane('towns');
map.getPane('towns').style.zIndex = 350;
map.getPane('towns').style.pointerEvents = 'none';

// Add Carto basemap
new L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

const search = new GeoSearch.GeoSearchControl({
  provider: new GeoSearch.OpenStreetMapProvider({
    params: { // See https://nominatim.org/release-docs/develop/api/Search/#parameters for all options
      'accept-language': 'en',
      'countrycodes': 'us',
      'viewbox': '-73.8,40.5,-71.7,42.1', // roughly CT boundaries
      'bounded': 1
    }
  }),
  style: 'bar', // default: button
  searchLabel: 'Search address',
  position: 'topright',
});
map.addControl(search);

// L.Control.geocoder().addTo(map);

// Reposition zoom control other than default topleft
L.control.zoom({position: "topright"}).addTo(map);

// Add scale control
L.control.scale().addTo(map);

// Prepend attribution (if Powered by Esri is present)
map.attributionControl.setPrefix('View\
  <a href="https://github.com/ontheline/otl-covenants" target="_blank">sources and code on GitHub</a>,\
  created with ' + map.attributionControl.options.prefix);

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


/************** ADD SIDEBAR AS CONTROL ***************/
L.Control.Sidebar = L.Control.extend({
  onAdd: function(map) {
    // Create a main div container and disable clickthrough
    var div = L.DomUtil.create('div', 'sidebar');
    L.DomEvent.disableClickPropagation(div);
    L.DomEvent.disableScrollPropagation(div);
    div.innerHTML = '<div id="toggle-sidebar">&harr;</div>';
    return div;
  },

  options: {
    position: 'topleft'
  },

  onRemove: function(map) {}
});


L.control.sidebar = function(opts) {
  return new L.Control.Sidebar(opts);
}

L.control.sidebar().addTo(map);
/****************************************/



// restrictive covenants layer on top
$.getJSON("map.geojson", function (data) {

  var devs = [];

  geoJsonLayer = L.geoJson(data, {
    style: style,
    onEachFeature: function( feature, layer) {
      var popupText = "<b>" + feature.properties.name + " " + feature.properties.type + ", " + feature.properties.town + " CT" + "</b><br />"
         + "&quot;" + feature.properties.text + "&quot; -- Source: " + feature.properties.source + "; " + feature.properties.date + "<br />"
         + "<a href='https://ontheline.github.io/otl-covenants/pdf/" + feature.properties.id + ".pdf' target='_blank'>View land record (PDF opens new tab)</a>";
      layer.bindPopup(popupText, {offset: {x: 50, y: 0}});

      devs.push([feature, layer]);
    }
  }).addTo(map);


  populateSidebar(devs);

});


function populateSidebar(devs) {

  // add instructions to top of SIDEBAR
  $('.sidebar').append('<b>' + 'Click links or polygons<br>for racial restrictions' + '</b>');

  // Sort developments by town, and by development within town, alphabetically
  // See https://stackoverflow.com/a/46256174/4361039
  devs.sort(function(a, b) {
    return a[0].properties.town.localeCompare(b[0].properties.town)
      || a[0].properties.name.localeCompare(b[0].properties.name)
  });


  townsAdded = []; // Keep track of town names we already added to the sidebar as a title
  layers = {};  // Use this object to retrieve geojson layers by layer ID, ie {id1:layer, id2:layer2}

  for (var i = 0; i < devs.length; i++) {
    var feature = devs[i][0];
    var town = feature.properties.town;

    // Get a leaflet layer for the town
    var layer = devs[i][1];
    layers[feature.properties.id] = layer;

    // Add town to sidebar if needed
    if (townsAdded.indexOf(town) < 0) {
      townsAdded.push(town);
      $('.sidebar').append('<h3>' + town + '</h3>');
    }

    // Add subdivision name with link
    $('.sidebar').append('<h4 id="' + feature.properties.id + '">' + feature.properties.name + '</h4>');

  }

  $('.sidebar h4').click(function() {
    var clickedId = $(this).prop('id');
    map.fitBounds( layers[clickedId].getBounds() );
    layers[clickedId].openPopup();
  })

  $('#toggle-sidebar').click(function() {
    var currentHeight = $('.sidebar').css('height');
    $('.sidebar').css('height', currentHeight === '400px' ? '30px' : '400px');
  })

}

function style(feature) {
  return {
    fillColor: 'purple',
    weight: 1,
    opacity: 1,
    color: 'black',
    fillOpacity: 0.3
  };
}

// manually place selected GHIAA members
L.marker([41.7843541745589,-72.5041961699055]).addTo(map) // EDIT marker coordinates
.bindPopup("Beth Sholom B’nai Israel, Manchester"); // EDIT pop-up text message

L.marker([41.7792260894468,-72.5034937472151]).addTo(map) // EDIT marker coordinates
.bindPopup("Concordia Lutheran Church, Manchester"); // EDIT pop-up text message

L.marker([41.8101182986531,-72.4902992472129]).addTo(map) // EDIT marker coordinates
.bindPopup("Unitarian Universalist Society: East, Manchester"); // EDIT pop-up text message

L.marker([41.697923308062,-72.7238839962957]).addTo(map) // EDIT marker coordinates
.bindPopup("Church of Christ (Congregational), Newington"); // EDIT pop-up text message

L.marker([41.7192694510979,-72.7447478760549]).addTo(map) // EDIT marker coordinates
.bindPopup("Temple Sinai, Newington"); // EDIT pop-up text message

L.marker([41.7877159615536, -72.75721147605022]).addTo(map) // EDIT marker coordinates
.bindPopup("Beth El Temple, West Hartford"); // EDIT pop-up text message

L.marker([41.7652548347616, -72.71913024721607]).addTo(map) // EDIT marker coordinates
.bindPopup("Congregation Beth Israel, West Hartford"); // EDIT pop-up text message

L.marker([41.784, -72.761]).addTo(map) // EDIT marker coordinates
.bindPopup("Congregation P’nai Or, West Hartford"); // EDIT pop-up text message

L.marker([41.7850, -72.760]).addTo(map) // EDIT marker coordinates
.bindPopup("Flagg Road (UCC), West Hartford"); // EDIT pop-up text message

L.marker([41.76168643475847, -72.74154799139485]).addTo(map) // EDIT marker coordinates
.bindPopup("First Church of Christ (UCC), West Hartford"); // EDIT pop-up text message

L.marker([41.76044657606062, -72.7288459757624]).addTo(map) // EDIT marker coordinates
.bindPopup("Hartford Monthly Meeting (Quakers), West Hartford"); // EDIT pop-up text message

L.marker([41.769155071529646, -72.74043484536577]).addTo(map) // EDIT marker coordinates
.bindPopup("Universalist Church of West Hartford, West Hartford"); // EDIT pop-up text message

L.marker([41.732473471300274, -72.75297259420499]).addTo(map) // EDIT marker coordinates
.bindPopup("West Hartford United Methodist Church, West Hartford"); // EDIT pop-up text message

L.marker([41.754279262714476, -72.76300356255969]).addTo(map) // EDIT marker coordinates
.bindPopup("Westminster Presbyterian Church, West Hartford"); // EDIT pop-up text message
