function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        },
    });

    const infoWindow = new google.maps.InfoWindow({
        content: "",
        disableAutoPan: true,
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 },
    ];

    var markers = locations.map((position, i) => {
        const label = labels[i % labels.length]
        const marker = new google.maps.Marker({
            position, label,
        });
    
    marker.addListener("click", () => {
        infoWindow.setContent(label);
        infoWindow.open(map, marker);
    });
    return marker;
    });
    new MarkerClusterer ({ markers, map});
}