
// idea inspired by https://www.crimemapping.com
// data from cincinnati open data portal
// and re-engineered in Rstudio
//Individual work by ZIXUAN_WANG
var map = L.map('map', {
  center: [39.14, -84.52],
  zoom: 12
});
// Try some differnet basemaps:
//basemapURL = "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";
//basemapURL = "http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
//basemapURL = "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png" //openstreetmap
//basemapURL = "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}"
//basemapURL = "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
//basemapURL = "https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png"
basemapURL =	"https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
//basemapURL ="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
var Stamen_TonerLite = L.tileLayer(basemapURL, {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
$(".sidebar2").hide();
$(".sidebar3").hide();

$(document).ready(function(){
    $("#whaaaaat").click(function(){
        $(".sidebar2").toggle();
          $(".sidebar3").hide();
              $(".sidebar4").hide();
              resetMap2(assLayer);
              resetMap2(break2018Layer);
              resetMap2(homicideLayer);
              resetMap2(part2Layer);
              resetMap2(robb2018Layer);
              resetMap2(theft2018Layer);
              resetMap2(unau2018Layer);
              resetMap();
    });
});
$(document).ready(function(){
    $("#whereeeee").click(function(){
        $(".sidebar3").toggle();
        $(".sidebar2").hide();
        $(".sidebar4").hide();
        resetMap();
    });
});
$(document).ready(function(){
    $("#wheeeeen").click(function(){
        $(".sidebar4").toggle();
        $(".sidebar3").hide();
        $(".sidebar2").hide();
        resetMap();
        resetMap2(assLayer);
        resetMap2(break2018Layer);
        resetMap2(homicideLayer);
        resetMap2(part2Layer);
        resetMap2(robb2018Layer);
        resetMap2(theft2018Layer);
        resetMap2(unau2018Layer);
        map.setView([39.13, -84.52],13)

    });
});
// select police beat/ zipcode

$("#dropwhole").click(function() {
  map.setView([39.13, -84.52],13)
});
$("#drop1").click(function() {
  map.setView([39.1095, -84.5214],15)
});
$("#drop2").click(function() {
  map.setView([39.1409, -84.4247],15)
});
$("#drop3").click(function() {
  map.setView([39.1275 ,-84.6047],14)
});
$("#drop4").click(function() {
  map.setView([39.1587 ,-84.4735],14)
});
$("#drop5").click(function() {
  map.setView([39.1984,-84.5473],14)
});
$("#drop6").click(function() {
  map.setView([39.0975,-84.5096],15)
});
//select by offense type(UCR_GROUP)
// pop up a window to see each incident information

//AGGRAVATED ASSAULTS
var assault2018 = [];
for (i = 0; i < crimeinfo.features.length; i++) {
    if (crimeinfo.features[i]['properties']['UCR_GROUP'] == "AGGRAVATED ASSAULTS")  {
      assault2018.push(crimeinfo.features[i]);
    }};
//robb2018 ROBBERY
var robb2018 = [];
  for (i = 0; i < crimeinfo.features.length; i++) {
      if (crimeinfo.features[i]['properties']['UCR_GROUP'] == "ROBBERY" )  {
        robb2018.push(crimeinfo.features[i]);
      }};
//theft2018
var theft2018 = [];
      for (i = 0; i < crimeinfo.features.length; i++) {
          if (crimeinfo.features[i]['properties']['UCR_GROUP'] == "THEFT")   {
            theft2018.push(crimeinfo.features[i]);
          }};
//BURGLARY/BREAKING ENTERING
var break2018 = [];
      for (i = 0; i < crimeinfo.features.length; i++) {
          if (crimeinfo.features[i]['properties']['UCR_GROUP'] == "BURGLARY/BREAKING ENTERING")   {
            break2018.push(crimeinfo.features[i]);
          }};
//UNAUTHORIZED USE
var unau2018 = [];
      for (i = 0; i < crimeinfo.features.length; i++) {
          if (crimeinfo.features[i]['properties']['UCR_GROUP'] == "UNAUTHORIZED USE")   {
            unau2018.push(crimeinfo.features[i]);
              }};

//PART 2 MINOR
var part22018 = [];
        for (i = 0; i < crimeinfo.features.length; i++) {
          if (crimeinfo.features[i]['properties']['UCR_GROUP'] == "PART 2 MINOR")   {
            part22018.push(crimeinfo.features[i]);
                }};
//HOMICIDE
var homicide2018 = [];
        for (i = 0; i < crimeinfo.features.length; i++) {
          if (crimeinfo.features[i]['properties']['UCR_GROUP'] == "HOMICIDE")   {
            homicide2018.push(crimeinfo.features[i]);
                }};


//layers
var assLayer = L.geoJson(assault2018, {
            pointToLayer: function(feature, latlng) {
              var assIcon = new L.Icon({
                   iconSize: [22, 22],
                   iconAnchor: [13, 27],
                   popupAnchor:  [1, -24],
                   iconUrl: 'https://ocpd-content.azureedge.net/cdn/images/IncidentType/WhatPanel/2.svg'
               });
                return L.marker(latlng, {icon: assIcon});
            }

         }).addTo(map);
map.removeLayer(assLayer);
function doalert1(customCheck1) {
      if (customCheck1.checked) {
        assLayer.addTo(map);
      } else {
       map.removeLayer(assLayer);
       }};

var break2018Layer = L.geoJson(break2018, {
            pointToLayer: function(feature, latlng) {
              var breakIcon = new L.Icon({
                   iconSize: [20, 20],
                   iconAnchor: [13, 27],
                   popupAnchor:  [1, -24],
                   iconUrl: 'https://ocpd-content.azureedge.net/cdn/images/IncidentType/WhatPanel/4.svg'
               });
                return L.marker(latlng, {icon: breakIcon});
            }
         }).addTo(map);
map.removeLayer(break2018Layer);
function doalert2(customCheck2) {
      if (customCheck2.checked) {
        break2018Layer.addTo(map);
      } else {
       map.removeLayer(break2018Layer);
       }};

var homicideLayer = L.geoJson(homicide2018, {
            pointToLayer: function(feature, latlng) {
              var homIcon = new L.Icon({
                   iconSize: [30, 30],
                   iconAnchor: [13, 27],
                   popupAnchor:  [1, -24],
                   iconUrl: 'https://ocpd-content.azureedge.net/cdn/images/IncidentType/WhatPanel/8.svg'
               });
                return L.marker(latlng, {icon: homIcon});
            }
         }).addTo(map);
map.removeLayer(homicideLayer);
function doalert3(customCheck3) {
      if (customCheck3.checked) {
        homicideLayer.addTo(map);
      } else {
       map.removeLayer(homicideLayer);
       }};

var part2Layer = L.geoJson(part22018, {
            pointToLayer: function(feature, latlng) {
              var part2Icon = new L.Icon({
                   iconSize: [18, 18],
                   iconAnchor: [13, 27],
                   popupAnchor:  [1, -24],
                   iconUrl: 'https://ocpd-content.azureedge.net/cdn/images/IncidentType/WhatPanel/13.svg'
               });
                return L.marker(latlng, {icon: part2Icon});
            }
         }).addTo(map);
map.removeLayer(part2Layer);
function doalert4(customCheck4) {
      if (customCheck4.checked) {
        part2Layer.addTo(map);
      } else {
       map.removeLayer(part2Layer);
       }};

var robb2018Layer = L.geoJson(robb2018, {
            pointToLayer: function(feature, latlng) {
            var robIcon = new L.Icon({
                iconSize: [18, 18],
               iconAnchor: [13, 27],
                popupAnchor:  [1, -24],
                iconUrl: 'https://ocpd-content.azureedge.net/cdn/images/IncidentType/WhatPanel/10.svg'
                      });
             return L.marker(latlng, {icon: robIcon});
           }
      }).addTo(map);
map.removeLayer(robb2018Layer);
function doalert5(customCheck5) {
     if (customCheck5.checked) {
         robb2018Layer.addTo(map);
            } else {
        map.removeLayer(robb2018Layer);
             }};


var theft2018Layer = L.geoJson(theft2018, {
                           pointToLayer: function(feature, latlng) {
                            var theftIcon = new L.Icon({
                             iconSize: [18, 18],
                           iconAnchor: [13, 27],
                             popupAnchor:  [1, -24],
                             iconUrl: 'https://ocpd-content.azureedge.net/cdn/images/IncidentType/WhatPanel/12.svg'
                                   });
                          return L.marker(latlng, {icon: theftIcon});
                        }
                   }).addTo(map);
map.removeLayer(theft2018Layer);
function doalert6(customCheck6) {
  if (customCheck6.checked) {
      theft2018Layer.addTo(map);
     } else {map.removeLayer(theft2018Layer);  }};

var unau2018Layer = L.geoJson(unau2018, {
                              pointToLayer: function(feature, latlng) {
                              var unIcon = new L.Icon({
                              iconSize: [20, 20],
                              iconAnchor: [13, 27],
                              popupAnchor:  [1, -24],
                              iconUrl: 'https://ocpd-content.azureedge.net/cdn/images/IncidentType/WhatPanel/3.svg'
                                        });
            return L.marker(latlng, {icon: unIcon});
                             }
                        }).addTo(map);

map.removeLayer(unau2018Layer);
function doalert7(customCheck7) {
  if (customCheck7.checked) {
      unau2018Layer.addTo(map);
    } else {map.removeLayer(unau2018Layer);  }};


for (i = 0; i < crimeinfo.features.length; i++) {
        crimeinfo.features[i].properties.hour =+ crimeinfo.features[i].properties.hour;
        crimeinfo.features[i].properties.month =+ crimeinfo.features[i].properties.month;}


for (i = 0; i < crimeinfo.features.length; i++) {
                crimeinfo.features[i].properties.hour =+ crimeinfo.features[i].properties.hour;
                crimeinfo.features[i].properties.month =+ crimeinfo.features[i].properties.month;}

var monthslider = document.getElementById("myRange1");
var monthoutput = document.getElementById("demo1");
monthoutput.innerHTML = monthslider.value;
monthslider.oninput = function() {
monthoutput.innerHTML = this.value;}

var hourslider = document.getElementById("myRange2");
var houroutput = document.getElementById("demo2");
houroutput.innerHTML = hourslider.value;
hourslider.oninput = function() {
houroutput.innerHTML = this.value;}

var dayslider = document.getElementById("myRange3");
var dayoutput = document.getElementById("demo3");
dayoutput.innerHTML = dayslider.value;
dayslider.oninput = function() {
dayoutput.innerHTML = this.value;}

var featureGroup;
var myFilter = function(feature, layer) {
  if (feature.properties.hour == hourslider.value && feature.properties.month == monthslider.value && feature.properties.day == dayslider.value)
  return true;
};
var redIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
function getIcon(d) {
  return d == "99 - NONE"  ? greenIcon :
                      redIcon;
}


  function onEachFeature2(feature, layer) {
                        let content2 = `<div><strong>Type:</strong> ${feature.properties.OFFENSE}</div>
                                      <div><strong>ID:</strong> ${feature.properties.INCIDENT_NO}</div>
                                      <div><strong>Weapon:</strong> ${feature.properties.WEAPONS}</div>
                                       <div><strong>Date: </strong>${feature.properties.DATE_REPORTED}</div>`
                        layer.bindPopup(content2);
                        layer.setIcon(getIcon(feature.properties.WEAPONS));
                      }

var plotslider = function() {
       featureGroup =  L.geoJSON(crimeinfo,{
           filter : myFilter,
           onEachFeature: onEachFeature2}).addTo(map);
     };

var featurenumber = document.getElementById("demo4");
var getnumber = function() {
      if (typeof featureGroup !== 'undefined'){
 featurenumber.innerHTML = `${featureGroup.getLayers().length}`
        };
      };


var resetMap = function() {
      if (typeof featureGroup !== 'undefined'){
    map.removeLayer(featureGroup)
        };
      };

var sidebar = L.control.sidebar('sidebar', {
                  closeButton: true,
                  position: 'right'
              });
map.addControl(sidebar);
map.on('click', function () {
    sidebar.hide();
});
function doalert8(myRange1) {
            resetMap();
            plotslider();
            getnumber();}

function doalert9(myRange2) {
          resetMap();
          getnumber();}

function doalert10(myRange3) {
                    resetMap();
                    plotslider();
                  getnumber();}

homicideLayer.on('click', function (e) {
        sidebar.toggle();
        sidebar.setContent('<div><h4><strong> INCIDENT INFO: </strong></h4></div><div><strong>Type:'+e.layer.feature.properties.OFFENSE +  '</strong></div>'+
                            + '<div><strong> Weapon:</strong> '+ e.layer.feature.properties.WEAPONS + '</div>'
                            + '<div><strong> Number of Victims:</strong> '+ e.layer.feature.properties.TOTALNUMBERVICTIMS + '</div>'
                            + '<div><strong> Number of Suspects:</strong> '+ e.layer.feature.properties.TOTALSUSPECTS + '</div>'
                            + '<div> Date: '+ e.layer.feature.properties.DATE_REPORTED + '</div>'+
                             '<div> Day of the Week: '+ e.layer.feature.properties.DAYOFWEEK + '</div>'+
                            '<div>Zipcode: '+ e.layer.feature.properties.ZIP + '</div>'+
                            '<div>Neighborhood: '+ e.layer.feature.properties.CPD_NEIGHBORHOOD + '</div>'+'<br>'+
                            '<div><h4><strong>  SUSPECT INFO: </strong></h4></div>Age:'+e.layer.feature.properties.SUSPECT_AGE +  '</h12></div>'
                            +'<div>Race:'+e.layer.feature.properties.SUSPECT_RACE +  '</div>'
                            +'<div>Gender:'+e.layer.feature.properties.SUSPECT_GENDER +  '</div>'+
                            '<div><h4><strong>  VICTIM INFO: </strong></h4></div>Age:'+e.layer.feature.properties.VICTIM_AGE +  '</h12></div>'
                            +'<div>Race:'+e.layer.feature.properties.VICTIM_RACE +  '</div>'
                            +'<div>Gender:'+e.layer.feature.properties.VICTIM_GENDER +  '</div>')
    });

part2Layer.on('click', function (e) {
            sidebar.toggle();
            sidebar.setContent('<div><h4><strong> INCIDENT INFO: </strong></h4></div><div><strong>Type:'+e.layer.feature.properties.OFFENSE +  '</strong></div>'+
                                + '<div><strong> Weapon:</strong> '+ e.layer.feature.properties.WEAPONS + '</div>'
                                + '<div><strong> Number of Victims:</strong> '+ e.layer.feature.properties.TOTALNUMBERVICTIMS + '</div>'
                                + '<div><strong> Number of Suspects:</strong> '+ e.layer.feature.properties.TOTALSUSPECTS + '</div>'
                                + '<div> Date: '+ e.layer.feature.properties.DATE_REPORTED + '</div>'+
                                 '<div> Day of the Week: '+ e.layer.feature.properties.DAYOFWEEK + '</div>'+
                                '<div>Zipcode: '+ e.layer.feature.properties.ZIP + '</div>'+
                                '<div>Neighborhood: '+ e.layer.feature.properties.CPD_NEIGHBORHOOD + '</div>'+'<br>'+
                                '<div><h4><strong>  SUSPECT INFO: </strong></h4></div>Age:'+e.layer.feature.properties.SUSPECT_AGE +  '</h12></div>'
                                +'<div>Race:'+e.layer.feature.properties.SUSPECT_RACE +  '</div>'
                                +'<div>Gender:'+e.layer.feature.properties.SUSPECT_GENDER +  '</div>'+
                                '<div><h4><strong>  VICTIM INFO: </strong></h4></div>Age:'+e.layer.feature.properties.VICTIM_AGE +  '</h12></div>'
                                +'<div>Race:'+e.layer.feature.properties.VICTIM_RACE +  '</div>'
                                +'<div>Gender:'+e.layer.feature.properties.VICTIM_GENDER +  '</div>')
        });
theft2018Layer.on('click', function (e) {
              sidebar.toggle();
              sidebar.setContent('<div><h4><strong> INCIDENT INFO: </strong></h4></div><div><strong>Type:'+e.layer.feature.properties.OFFENSE +  '</strong></div>'+
                                  + '<div><strong> Weapon:</strong> '+ e.layer.feature.properties.WEAPONS + '</div>'
                                  + '<div><strong> Number of Victims:</strong> '+ e.layer.feature.properties.TOTALNUMBERVICTIMS + '</div>'
                                  + '<div><strong> Number of Suspects:</strong> '+ e.layer.feature.properties.TOTALSUSPECTS + '</div>'
                                  + '<div> Date: '+ e.layer.feature.properties.DATE_REPORTED + '</div>'+
                                   '<div> Day of the Week: '+ e.layer.feature.properties.DAYOFWEEK + '</div>'+
                                  '<div>Zipcode: '+ e.layer.feature.properties.ZIP + '</div>'+
                                  '<div>Neighborhood: '+ e.layer.feature.properties.CPD_NEIGHBORHOOD + '</div>'+'<br>'+
                                  '<div><h4><strong>  SUSPECT INFO: </strong></h4></div>Age:'+e.layer.feature.properties.SUSPECT_AGE +  '</h12></div>'
                                  +'<div>Race:'+e.layer.feature.properties.SUSPECT_RACE +  '</div>'
                                  +'<div>Gender:'+e.layer.feature.properties.SUSPECT_GENDER +  '</div>'+
                                  '<div><h4><strong>  VICTIM INFO: </strong></h4></div>Age:'+e.layer.feature.properties.VICTIM_AGE +  '</h12></div>'
                                  +'<div>Race:'+e.layer.feature.properties.VICTIM_RACE +  '</div>'
                                  +'<div>Gender:'+e.layer.feature.properties.VICTIM_GENDER +  '</div>')
          });
break2018Layer.on('click', function (e) {
            sidebar.toggle();
            sidebar.setContent('<div><h4><strong> INCIDENT INFO: </strong></h4></div><div><strong>Type:'+e.layer.feature.properties.OFFENSE +  '</strong></div>'+
                                + '<div><strong> Weapon:</strong> '+ e.layer.feature.properties.WEAPONS + '</div>'
                                + '<div><strong> Number of Victims:</strong> '+ e.layer.feature.properties.TOTALNUMBERVICTIMS + '</div>'
                                + '<div><strong> Number of Suspects:</strong> '+ e.layer.feature.properties.TOTALSUSPECTS + '</div>'
                                + '<div> Date: '+ e.layer.feature.properties.DATE_REPORTED + '</div>'+
                                 '<div> Day of the Week: '+ e.layer.feature.properties.DAYOFWEEK + '</div>'+
                                '<div>Zipcode: '+ e.layer.feature.properties.ZIP + '</div>'+
                                '<div>Neighborhood: '+ e.layer.feature.properties.CPD_NEIGHBORHOOD + '</div>'+'<br>'+
                                '<div><h4><strong>  SUSPECT INFO: </strong></h4></div>Age:'+e.layer.feature.properties.SUSPECT_AGE +  '</h12></div>'
                                +'<div>Race:'+e.layer.feature.properties.SUSPECT_RACE +  '</div>'
                                +'<div>Gender:'+e.layer.feature.properties.SUSPECT_GENDER +  '</div>'+
                                '<div><h4><strong>  VICTIM INFO: </strong></h4></div>Age:'+e.layer.feature.properties.VICTIM_AGE +  '</h12></div>'
                                +'<div>Race:'+e.layer.feature.properties.VICTIM_RACE +  '</div>'
                                +'<div>Gender:'+e.layer.feature.properties.VICTIM_GENDER +  '</div>')
        });
assLayer.on('click', function (e) {
            sidebar.toggle();
            sidebar.setContent('<div><h4><strong> INCIDENT INFO: </strong></h4></div><div><strong>Type:'+e.layer.feature.properties.OFFENSE +  '</strong></div>'+
                                + '<div><strong> Weapon:</strong> '+ e.layer.feature.properties.WEAPONS + '</div>'
                                + '<div><strong> Number of Victims:</strong> '+ e.layer.feature.properties.TOTALNUMBERVICTIMS + '</div>'
                                + '<div><strong> Number of Suspects:</strong> '+ e.layer.feature.properties.TOTALSUSPECTS + '</div>'
                                + '<div> Date: '+ e.layer.feature.properties.DATE_REPORTED + '</div>'+
                                 '<div> Day of the Week: '+ e.layer.feature.properties.DAYOFWEEK + '</div>'+
                                '<div>Zipcode: '+ e.layer.feature.properties.ZIP + '</div>'+
                                '<div>Neighborhood: '+ e.layer.feature.properties.CPD_NEIGHBORHOOD + '</div>'+'<br>'+
                                '<div><h4><strong>  SUSPECT INFO: </strong></h4></div>Age:'+e.layer.feature.properties.SUSPECT_AGE +  '</h12></div>'
                                +'<div>Race:'+e.layer.feature.properties.SUSPECT_RACE +  '</div>'
                                +'<div>Gender:'+e.layer.feature.properties.SUSPECT_GENDER +  '</div>'+
                                '<div><h4><strong>  VICTIM INFO: </strong></h4></div>Age:'+e.layer.feature.properties.VICTIM_AGE +  '</h12></div>'
                                +'<div>Race:'+e.layer.feature.properties.VICTIM_RACE +  '</div>'
                                +'<div>Gender:'+e.layer.feature.properties.VICTIM_GENDER +  '</div>')
        });
unau2018Layer.on('click', function (e) {
            sidebar.toggle();
            sidebar.setContent('<div><h4><strong> INCIDENT INFO: </strong></h4></div><div><strong>Type:'+e.layer.feature.properties.OFFENSE +  '</strong></div>'+
                                + '<div><strong> Weapon:</strong> '+ e.layer.feature.properties.WEAPONS + '</div>'
                                + '<div><strong> Number of Victims:</strong> '+ e.layer.feature.properties.TOTALNUMBERVICTIMS + '</div>'
                                + '<div><strong> Number of Suspects:</strong> '+ e.layer.feature.properties.TOTALSUSPECTS + '</div>'
                                + '<div> Date: '+ e.layer.feature.properties.DATE_REPORTED + '</div>'+
                                 '<div> Day of the Week: '+ e.layer.feature.properties.DAYOFWEEK + '</div>'+
                                '<div>Zipcode: '+ e.layer.feature.properties.ZIP + '</div>'+
                                '<div>Neighborhood: '+ e.layer.feature.properties.CPD_NEIGHBORHOOD + '</div>'+'<br>'+
                                '<div><h4><strong>  SUSPECT INFO: </strong></h4></div>Age:'+e.layer.feature.properties.SUSPECT_AGE +  '</h12></div>'
                                +'<div>Race:'+e.layer.feature.properties.SUSPECT_RACE +  '</div>'
                                +'<div>Gender:'+e.layer.feature.properties.SUSPECT_GENDER +  '</div>'+
                                '<div><h4><strong>  VICTIM INFO: </strong></h4></div>Age:'+e.layer.feature.properties.VICTIM_AGE +  '</h12></div>'
                                +'<div>Race:'+e.layer.feature.properties.VICTIM_RACE +  '</div>'
                                +'<div>Gender:'+e.layer.feature.properties.VICTIM_GENDER +  '</div>')
        });
robb2018Layer.on('click', function (e) {
            sidebar.toggle();
            sidebar.setContent('<div><h4><strong> INCIDENT INFO: </strong></h4></div><div><strong>Type:'+e.layer.feature.properties.OFFENSE +  '</strong></div>'+
                                + '<div><strong> Weapon:</strong> '+ e.layer.feature.properties.WEAPONS + '</div>'
                                + '<div><strong> Number of Victims:</strong> '+ e.layer.feature.properties.TOTALNUMBERVICTIMS + '</div>'
                                + '<div><strong> Number of Suspects:</strong> '+ e.layer.feature.properties.TOTALSUSPECTS + '</div>'
                                + '<div> Date: '+ e.layer.feature.properties.DATE_REPORTED + '</div>'+
                                 '<div> Day of the Week: '+ e.layer.feature.properties.DAYOFWEEK + '</div>'+
                                '<div>Zipcode: '+ e.layer.feature.properties.ZIP + '</div>'+
                                '<div>Neighborhood: '+ e.layer.feature.properties.CPD_NEIGHBORHOOD + '</div>'+'<br>'+
                                '<div><h4><strong>  SUSPECT INFO: </strong></h4></div>Age:'+e.layer.feature.properties.SUSPECT_AGE +  '</h12></div>'
                                +'<div>Race:'+e.layer.feature.properties.SUSPECT_RACE +  '</div>'
                                +'<div>Gender:'+e.layer.feature.properties.SUSPECT_GENDER +  '</div>'+
                                '<div><h4><strong>  VICTIM INFO: </strong></h4></div>Age:'+e.layer.feature.properties.VICTIM_AGE +  '</h12></div>'
                                +'<div>Race:'+e.layer.feature.properties.VICTIM_RACE +  '</div>'
                                +'<div>Gender:'+e.layer.feature.properties.VICTIM_GENDER +  '</div>')
        });
