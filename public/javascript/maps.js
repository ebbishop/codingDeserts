var map;

function initialize_gmaps(){
  var initLatLng = new google.maps.LatLng(40.79093941,-73.90777588);

  //set up map options
  var mapOptions = {
    center: initLatLng,
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    // styles: styleArr
  };

  var map_canvas = document.getElementById('map-canvas');

//create the map
  map = new google.maps.Map(map_canvas, mapOptions);

// get request for all schools
  $.ajax({
    method: 'GET',
    url: '/api/schools',
    success: function(schoolsData){
      schoolsData.forEach(function(school){
        drawLocation(school.location)
      })
    },
    error: console.error
  })

  function drawLocation(location, opts){
    if(typeof opts !== 'object'){
      opts = {};
    }
    opts.position = new google.maps.LatLng(location[0], location[1])
    opts.map = map;
    var marker = new google.maps.Marker(opts);
  }
    // marker.setMap(map);

}
$(document).ready(function(){
  initialize_gmaps();
})
