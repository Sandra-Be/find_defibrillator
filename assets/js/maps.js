// Google Maps
let mapInitial;

// Variable for New Map with Markers
let map;

// Function to load Google Maps
function initMap() {
    mapInitial = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: 53.1424, lng: -7.6921 },
        scrollwheel: true,
    });
}

// Function for few markers, when button clicked
function iconMap(category) {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: 53.1424, lng: -7.6921 },
        scrollwheel: true,
    });

    // Loop through the array looking which button is clicked 
    for (var i = 0; i < category.length; i++) {
        addMarker(category[i], map);
    }

}

//Marker function
function addMarker(properties, map) {
    const marker = new google.maps.Marker({
        position: properties.coords,
        map: map,
    });
    if (properties.content) {
        const infoWindow = new google.maps.InfoWindow({
        content: properties.content
    });

//Open info window when clicked on the marker
google.maps.event.addListener(marker, 'click', function(){
    if (!marker.open) {
        infoWindow.open(map, marker);
        marker.open = true;
    }

//Close info window when clicked on marker
    else {
        infoWindow.close();
        marker.open = false;
    }

//Close info window when clicked anywhere else
    google.maps.event.addListener(map, 'click', function(){
        infoWindow.close();
        marker.open = false;
    });
});

//Zoom into marker
google.maps.event.addListener(marker, 'click', function(){
    map.setZoom(10);
    map.setCenter(marker.getPosition());
});
}}
