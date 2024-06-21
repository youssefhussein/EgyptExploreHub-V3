  
   function displayMap() {
    const mapOptions = {
      center: { lat: parseFloat(document.getElementById('lat').innerHTML), lng: parseFloat(document.getElementById('lng').innerHTML) },
      zoom: 18,
    };
    const mapElement = document.getElementById('map');
    const map = new google.maps.Map(mapElement, mapOptions);
    return map
  }
 
 
     function addMarkers(map){
 const location  = {lat: parseFloat(document.getElementById('lat').innerHTML), lng: parseFloat(document.getElementById('lng').innerHTML)};
 const marker = new google.maps.Marker({
   position: location,
   map: map, 
   title: '<%= packs.name %>',
   
 });
 return marker
 }
 function initMap() {
 const map = displayMap();
 const markers = addMarkers(map);
     
 
 }
 
 