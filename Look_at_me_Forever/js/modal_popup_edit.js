const popup = document.querySelector('.popup');
const nav1 = document.querySelector('.nav_menu1');
const openbtn = document.querySelector('.more_video');
const closebtn = document.querySelector('.popup_close');

modal = false;

nav1.addEventListener('click',function(){
    //display 속성을 block로 변경
    popup.style.display = 'block';
});
//닫기 버튼을 눌렀을 때 모달팝업이 닫힘
closebtn.addEventListener('click',function(){
   //display 속성을 none으로 변경
    popup.style.display = 'none';
});

