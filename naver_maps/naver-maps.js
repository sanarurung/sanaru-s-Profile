var mapDiv = document.getElementById('map');

var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.662697, 126.992644),
    zoom: 12,
    scaleControl: false,
    logoControl: false,
    mapDataControl: false,
    zoomControl: true,
    minZoom: 10
});

var marker = new naver.maps.Marker('map', {
    position: map.getCenter(),
    map: map,
    clickable: true,
});



window.navermap_authFailure = function () {
    // 인증 실패 시 처리 코드 작성
    // ...
    console.log('API인증 실패')
}