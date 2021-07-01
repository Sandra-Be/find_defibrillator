// Google Maps
let mapInitial;

// Variable for New Map with Markers
let map;

// Function to load Google Maps
function initMap() {
    mapInitial = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 53.1424, lng: -7.6921 },
        disableDefaultUI: true,
    });
}

// Function for few markers, when button clicked
function iconMap(category) {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 53.1424, lng: -7.6921 },
        disableDefaultUI: true,
    });

    // Loop through the array looking which button is clicked 
    for (var i = 0; i < category.length; i++) {
        addMarker(category[i], map);
    }

}

// Marker Function
function addMarker(properties, map) {
    var marker = new google.maps.Marker({
        position: properties.coords,
        map: map,
    });

    // Marker listener to adjust zoom
    map.addListener("mouseout", () => {
        window.setTimeout(() => {
            map.setZoom(7);
            map.panTo({ lat: 53.1424, lng: -7.6921 });
        }, 1000);
    });

    // Marker listener to adjust zoom on click
    marker.addListener("click", () => {
        map.setZoom(7);
        map.setCenter(marker.getPosition());
    });
/*
    // if statement - check for icon
    if (properties.iconImage) {
        marker.setIcon(properties.iconImage);
    }
*/
    // Checking for content
    if (properties.content) {
        var infoWindow = new google.maps.InfoWindow({
            content: properties.content,
        });

        marker.addListener("click", function () {
            infoWindow.open(map, marker);
        });
    }
}