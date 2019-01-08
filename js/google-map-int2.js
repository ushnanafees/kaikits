$(document).ready(function () {
    'use strict';

    //===== Map =====//
    function initialize() {
        var myLatlng = new google.maps.LatLng(19.411952826651998,-99.16319960447692);
        var mapOptions = {
            zoom: 14,
            disableDefaultUI: true,
            scrollwheel: false,
            center: myLatlng,
            styles: [
            ]
        }

        var map = new google.maps.Map(document.getElementById('map-canvas2'), mapOptions);

    }
    google.maps.event.addDomListener(window, 'load', initialize);
});