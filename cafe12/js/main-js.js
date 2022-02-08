// 배경 이미지 show
let picture = ["./images/header1.jpg", "./images/header2.jpg"]
let idx = 0;

showPicture();

function showPicture(){
    let img = document.querySelector("#pic")
    img.src = picture[idx];
    idx = idx + 1;
    if(idx == picture.length)
        idx = 0;

    setTimeout(showPicture, 2000);  // 2초 간격 콜백함수
}


// 디지털 시계
setInterval(myWatch, 1000);

function myWatch(){
    const date = new Date();
    let now = date.toLocaleTimeString();
    document.getElementById("demo").innerHTML = now;
}

