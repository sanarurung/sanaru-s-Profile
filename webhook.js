function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1255148943231287437/smAhc88FvfgYYR_YofobhGUO5f2Dh2ryZiKsJZEGniwGFalfdjduKtBaXxhDEJ7EawRO");
    //request.open("POST", "https://discord.com/api/webhooks/1255185057803407480/E1WZSedN91hdzBa1_l0kRIEiLe1XJ7eClKzGhJr3sXGNdK7SJWi2yyETp6MeAMBIAI78");
    request.setRequestHeader('Content-type', 'application/json');

    /*const embed = {
        title: "알림!",
        type: "rich",
        description: "",
    }*/

        const email = document.getElementById('user-email').value;
        const nikname = document.getElementById('user-nikname').value;
        const discord = document.getElementById('discord-id').value;
       /* const description = document.getElementById('descripton').value;*/
        const option = document.getElementById('option').value;
        const plusoption = document.getElementById('plus-option').value;
        const magam = document.getElementById('magam-option').value;
        const cover = document.getElementById('cover-song-name').value
        var a = false;

        const params = {
            username: "sanaru.me webhook",
            avatar_url: "",
            embeds: [
                {
                title: "믹싱 커미션!",
                description: `이메일: ${email}\n닉네임: ${nikname}\n디스코드 아이디: ${discord}\n노래 이름: ${cover}\n믹싱 옵션: ${option}\n추가 옵션: ${plusoption}\n마감 옵션: ${magam}`,
            }
            ]
          }
          
    request.send(JSON.stringify(params));
    alert('입력하신 정보가 전송되었습니다.\n신청해주셔서 감사합니다.\nsanaru@mxcreate.kr로 연락드리겠습니다.')
    
}

