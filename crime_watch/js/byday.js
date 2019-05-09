function setColor(d) {
        return d > 35  ? '#bd0026' :
               d > 25   ? '#f03b20' :
               d > 18   ? '#fd8d3c' :
               d > 10   ? '#feb24c' :
               d > 4   ? '#fed976' :
                  '#ffffb2';
        }
function setStyle(feature) {
  return {
     fillColor: setColor(feature.properties.countAssaults),
     weight: 0.5,
     opacity: 1,
     color: 'white',
     fillOpacity: 0.9
         };
        }

function onEachFeature(feature, layer) {
    let content = `<div>Total crime incidents: ${feature.properties.countAssaults}</div>`
    layer.bindPopup(content);
  }

var monpoly = L.geoJSON(mon_net.features, {
      style: setStyle,
     onEachFeature: onEachFeature}
  ).addTo(map);

var wedpoly = L.geoJSON(wed_net.features, {
    style: setStyle,
   onEachFeature: onEachFeature}
).addTo(map);
var tuepoly = L.geoJSON(tue_net.features, {
    style: setStyle,
   onEachFeature: onEachFeature}
).addTo(map);

var thupoly = L.geoJSON(thu_net.features, {
    style: setStyle,
   onEachFeature: onEachFeature}
).addTo(map);
var fripoly = L.geoJSON(fri_net.features, {
    style: setStyle,
   onEachFeature: onEachFeature}
).addTo(map);
var satpoly = L.geoJSON(sat_net.features, {
    style: setStyle,
   onEachFeature: onEachFeature}
).addTo(map);
var sunpoly = L.geoJSON(sun_net.features, {
    style: setStyle,
   onEachFeature: onEachFeature}
).addTo(map);
map.removeLayer(monpoly);
map.removeLayer(wedpoly);
map.removeLayer(tuepoly);
map.removeLayer(thupoly);
map.removeLayer(fripoly);
map.removeLayer(satpoly);
map.removeLayer(sunpoly);
var resetMap2 = function(layer) {
      if (typeof layer !== 'undefined'){
    map.removeLayer(layer)
        };
      };

$("#dayyyyy").on('click', function (e) {
              $(".topbar1").toggle();
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
               $("#buttonweekday").html("SELECT DAY");
              $(".topbar2").hide();
                $(".topbar3").hide();
                map.setView([39.13, -84.52],12)
          });
$("#dropmon").click(function() {
            resetMap2(tuepoly);
            resetMap2(wedpoly);
            resetMap2(thupoly);
            resetMap2(fripoly);
            resetMap2(satpoly);
            resetMap2(sunpoly);
                monpoly.addTo(map);
                    });
$("#droptue").click(function() {
  resetMap2(wedpoly);
  resetMap2(monpoly);
  resetMap2(thupoly);
  resetMap2(fripoly);
  resetMap2(satpoly);
  resetMap2(sunpoly);
        tuepoly.addTo(map);
          });
$("#dropwed").click(function() {
    resetMap2(monpoly);
  resetMap2(tuepoly);
  resetMap2(thupoly);
  resetMap2(fripoly);
  resetMap2(satpoly);
  resetMap2(sunpoly);
  wedpoly.addTo(map);
                    });

$("#dropthu").click(function() {
    resetMap2(monpoly);
  resetMap2(tuepoly);
  resetMap2(wedpoly);
  resetMap2(fripoly);
  resetMap2(satpoly);
  resetMap2(sunpoly);
    thupoly.addTo(map);  })
$("#dropfri").click(function() {
    resetMap2(monpoly);
  resetMap2(tuepoly);
  resetMap2(wedpoly);
  resetMap2(thupoly);
  resetMap2(satpoly);
  resetMap2(sunpoly);
  fripoly.addTo(map);  });

$("#dropsat").click(function() {
    resetMap2(monpoly);
  resetMap2(tuepoly);
  resetMap2(wedpoly);
  resetMap2(thupoly);
  resetMap2(fripoly);
  resetMap2(sunpoly);
  satpoly.addTo(map);  });

$("#dropsun").click(function() {
    resetMap2(monpoly);
  resetMap2(wedpoly);
  resetMap2(thupoly);
  resetMap2(fripoly);
  resetMap2(satpoly);
    sunpoly.addTo(map);  });

$("#resetbutton").click(function() {
  resetMap2(monpoly);
  resetMap2(tuepoly);
  resetMap2(wedpoly);
  resetMap2(thupoly);
  resetMap2(fripoly);
  resetMap2(satpoly);
  resetMap2(sunpoly);
   $("#buttonweekday").html("SELECT DAY");
});

$(".dropdown-menu li a").click(function () {
             var selText = $(this).text();
             $("#buttonweekday").html(selText);
         });
