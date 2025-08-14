var mapDiv = document.getElementById('maps');

var map = new naver.maps.Map('maps', {
    center: new naver.maps.LatLng(37.660842, 126.993322),
    zoom: 10,
    scaleControl: false,
    logoControl: false,
    mapDataControl: false,
    zoomControl: true,
    minZoom: 6
});

var marker = new naver.maps.Map('maps', {
    position: map.getCenter(),
    map: map,
    clickable: false
});



window.navermap_authFailure = function () {
    // 인증 실패 시 처리 코드 작성
    // ...
    console.log('API인증 실패')
}