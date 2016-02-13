var map;

function initialize_gmaps(){
  // console.log("I am in google maps maps.js")
  var initLatLng = new google.maps.LatLng(40.79093941,-73.90777588);

  //set up map options
  var mapOptions = {
    center: initLatLng,
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    // styles: styleArr
  };

  var map_canvas = document.getElementById('map');

//create the map
  map = new google.maps.Map(map_canvas, mapOptions);

    // marker.setMap(map);

}
  function drawLocation(location, opts){
    // console.log("drawing location!",location)
    if(typeof opts !== 'object'){
      opts = {};
    }
    opts.position = new google.maps.LatLng(location[0], location[1])
    opts.map = map;
    var marker = new google.maps.Marker(opts);
  }


$(document).ready(function(){
  // get request for all schools
  initialize_gmaps();
  getAllSchools();
})

function getAllSchools (){
  $.ajax({
    method: 'GET',
    url: '/api/schools',
    success: function(schoolsData){
      // console.log("i got the school data",schoolsData) 
      schoolsData.forEach(function(school){
        // console.log("school location",school.location)
        drawLocation(school.location)
      })
    },
    error: console.error
  })
}

function getSchoolsByBorough(borough){
  $.ajax({
    method: 'GET',
    url: '/api/schools/borough',
    success: function(schoolsData){
      schoolsData.forEach(function(school){
        drawLocation(school.location)
      })
    },
    error: console.error
  })
}
