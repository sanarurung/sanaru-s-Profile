var mapDiv = document.getElementById('maps');

var map = new naver.maps.Map('maps', {
    center: new naver.maps.LatLng(37.662697, 126.992644),
    zoom: 13,
    scaleControl: false,
    logoControl: false,
    mapDataControl: false,
    zoomControl: true,
    minZoom: 6
});

var marker = new naver.maps.Marker('maps', {
    position: new naver.maps.LatLng(37.662697, 126.992644),
    map: map,
    clickable: false
});



window.navermap_authFailure = function () {
    // 인증 실패 시 처리 코드 작성
    // ...
    console.log('API인증 실패')
}