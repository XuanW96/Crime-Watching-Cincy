$("#hourrrr").on('click', function (e) {
              $(".topbar3").toggle();
              resetMap2(fallpoly);
              resetMap2(springpoly);
              resetMap2(summerpoly);
              resetMap2(winterpoly);
               resetMap2(nightpoly);
               resetMap2(morningpoly);
               resetMap2(afterpoly);
               resetMap2(midpoly);
               resetMap2(monpoly);
               resetMap2(wedpoly);
               resetMap2(tuepoly);
               resetMap2(thupoly);
               resetMap2(fripoly);
               resetMap2(satpoly);
               resetMap2(sunpoly);
               resetMap2(assLayer);
               resetMap2(break2018Layer);
               resetMap2(homicideLayer);
               resetMap2(part2Layer);
               resetMap2(robb2018Layer);
               resetMap2(theft2018Layer);
               resetMap2(unau2018Layer);
               resetMap();
               $("#buttontime").html("SELECT TIME");
                $(".topbar1").hide();
                  $(".topbar2").hide();
                  map.setView([39.13, -84.52],12)
          });

function setColor2(d) {
        return d > 20  ? '#253494' :
               d > 16   ? '#2c7fb8' :
               d > 11   ? '#41b6c4' :
               d > 7   ? '#7fcdbb' :
               d > 2   ? '#c7e9b4' :
                    '#ffffcc';}

function setStyle2(feature) {
            return { fillColor: setColor2(feature.properties.countAssaults),
                     weight: 0.5,
                     opacity: 1,
                      color: 'white',
                      fillOpacity: 0.9
                             };}

var morningpoly = L.geoJSON(morning_net.features, {
                                   style: setStyle2,
                                  onEachFeature: onEachFeature}
                               ).addTo(map);
var afterpoly =  L.geoJSON(afternoon_net.features, {
                                   style: setStyle2,
                                  onEachFeature: onEachFeature}
                               ).addTo(map);
var nightpoly =   L.geoJSON(night_net.features, {
                                   style: setStyle2,
                                  onEachFeature: onEachFeature}
                               ).addTo(map);
var midpoly =  L.geoJSON(midnight_net.features, {
                                   style: setStyle2,
                                  onEachFeature: onEachFeature}
                               ).addTo(map);

map.removeLayer(morningpoly);
map.removeLayer(afterpoly);
map.removeLayer(nightpoly);
map.removeLayer(midpoly);

$("#dropmor").click(function(){
  resetMap2(afterpoly);
  resetMap2(nightpoly);
  resetMap2(midpoly);
  morningpoly.addTo(map);
});
$("#dropaft").click(function(){
  resetMap2(morningpoly);
  resetMap2(nightpoly);
  resetMap2(midpoly);
  afterpoly.addTo(map);
});
$("#dropnig").click(function(){
  resetMap2(afterpoly);
  resetMap2(midpoly);
  resetMap2(morningpoly);
  nightpoly.addTo(map);
});
$("#dropmid").click(function(){
  resetMap2(nightpoly);
  resetMap2(afterpoly);
  resetMap2(morningpoly);
  midpoly.addTo(map);
});
$("#resetbutton3").click(function() {
  resetMap2(morningpoly);
  resetMap2(nightpoly);
  resetMap2(afterpoly);
  resetMap2(midpoly);
   $("#buttontime").html("SELECT TIME");
});
$(".dropdown-menu span a").click(function () {
             var selText2 = $(this).text();
             $("#buttontime").html(selText2);
         });
