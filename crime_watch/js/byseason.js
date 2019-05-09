$("#seasonnnnnn").on('click', function (e) {
              $(".topbar2").toggle();
              $(".topbar1").hide();
                $(".topbar3").hide();
                $("#buttonseason").html("SELECT SEASON");
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
                map.setView([39.13, -84.52],12)

          });

function setColor3(d) {
                  return d > 40  ? '#7a0177' :
                         d > 30   ? '#c51b8a' :
                         d > 20   ? '#f768a1' :
                         d > 10   ? '#fa9fb5' :
                         d > 3   ? '#fcc5c0' :
                              '#feebe2';}
function setStyle3(feature) {
                      return { fillColor: setColor3(feature.properties.countAssaults),
                               weight: 0.5,
                               opacity: 1,
                                color: 'white',
                                fillOpacity: 0.9
                                       };}
 var springpoly = L.geoJSON(spring_net.features,
               {style: setStyle3,
              onEachFeature: onEachFeature}).addTo(map);
var summerpoly =  L.geoJSON(summer_net.features,
              {style: setStyle3,
             onEachFeature: onEachFeature}).addTo(map);
var fallpoly =  L.geoJSON(fall_net.features,
              {style: setStyle3,
             onEachFeature: onEachFeature}).addTo(map);
var winterpoly =  L.geoJSON(winter_net.features,
              {style: setStyle3,
             onEachFeature: onEachFeature}).addTo(map);

map.removeLayer(summerpoly);
map.removeLayer(fallpoly);
map.removeLayer(springpoly);
map.removeLayer(winterpoly);

$("#dropspr").click(function(){
  resetMap2(winterpoly);
  resetMap2(summerpoly);
  resetMap2(fallpoly);
  springpoly.addTo(map);
});
$("#dropsum").click(function(){
  resetMap2(winterpoly);
  resetMap2(springpoly);
  resetMap2(fallpoly);
  summerpoly.addTo(map);
});
$("#dropfall").click(function(){
  resetMap2(winterpoly);
  resetMap2(springpoly);
  resetMap2(summerpoly);
  fallpoly.addTo(map);
});
$("#dropwin").click(function(){
  resetMap2(fallpoly);
  resetMap2(springpoly);
  resetMap2(summerpoly);
  winterpoly.addTo(map);
});
$("#resetbutton2").click(function() {
  resetMap2(fallpoly);
  resetMap2(springpoly);
  resetMap2(summerpoly);
  resetMap2(winterpoly);
   $("#buttonseason").html("SELECT SEASON");
});

$(".dropdown-menu a").click(function () {
             var selText3 = $(this).text();
             $("#buttonseason").html(selText3);
         });
