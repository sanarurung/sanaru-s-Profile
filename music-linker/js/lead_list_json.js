fetch('file:///C:/Users/sanaru/Desktop/new-site/json/video_list.json')
    .then(res=>res.json())
    .then(json=> {
        data=json.items;

        data.forEach(element => {
            document.getElementById("thumnali1").src = $(element.thumnail);
        });

        
    })
