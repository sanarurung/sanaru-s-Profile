var mapDiv = document.getElementById('maps');

var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
};

var map = new naver.maps.Map('maps', {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
});



window.navermap_authFailure = function () {
    // 인증 실패 시 처리 코드 작성
    // ...
    console.log('API인증 실패')
}