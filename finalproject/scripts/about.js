function sample() {
    var m1 = {
        center: new google.maps.LatLng(33.1549009, -117.3585981),
        zoom: 13,
        mapss: google.maps.MapTypeId.HYBRID,
    }
    var m2 = new google.maps.Map(document.getElementById("m"), m1)
}
