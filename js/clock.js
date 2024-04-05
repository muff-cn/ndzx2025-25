let currentImageIndex = 0; // 当前显示的图片索引
images = [
    'https://img2.imgtp.com/2024/04/05/RjR7PPef.jpg',
    'https://img2.imgtp.com/2024/04/05/ok7TcGG6.jpg',
    'https://img2.imgtp.com/2024/04/05/YhtBvirs.jpg',
    'https://img2.imgtp.com/2024/04/05/jVlqq9p9.jpg',
    'https://img2.imgtp.com/2024/04/05/segKawLS.jpg',
    'https://img2.imgtp.com/2024/04/05/k1iPum6P.jpg',
    'https://img2.imgtp.com/2024/04/05/nuBt3KgE.jpg',
]

function updateBackground() {
    document.body.style.backgroundImage = `url('${images[currentImageIndex]}')`;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateBackground();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateBackground();
}

document.getElementById('prevBtn').addEventListener('click', prevImage);
document.getElementById('nextBtn').addEventListener('click', nextImage);

function startSlideshow() {
    nextImage();
    setInterval(nextImage, 20 * 60 * 1000); // 20分钟换一次
}

startSlideshow();
let timeout;

// 获取要全屏显示的元素
let element = document.documentElement; // <html> 元素

// 定义一个变量来跟踪是否已经全屏
let isFullScreen = false;

// 定义双击事件的处理函数
function toggleFullScreen() {
    if (!isFullScreen) {
        // 进入全屏模式
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari 和 Opera
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        }
        isFullScreen = true;
    } else {
        // 退出全屏模式
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari 和 Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
        isFullScreen = false;
    }
}

// 监听双击事件
element.addEventListener('dblclick', toggleFullScreen);
let lunarDate = ''; // 全局变量用于保存农历日期

function updateClock() {
    const now = new Date();

    let year = now.getFullYear();
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let day = now.getDate().toString().padStart(2, '0');

    let hour = now.getHours().toString().padStart(2, '0');
    let minute = now.getMinutes().toString().padStart(2, '0');
    let second = now.getSeconds().toString().padStart(2, '0');

    if (lunarDate === '') {
        // getLunarDate(year, month, day); // 如果农历日期为空，则发送请求获取农历日期
    }

    const dateDisplay = `${year}-${month}-${day}`;
    const timeDisplay = `${hour}:${minute}:${second}`;
    const lunarDisplay = `${lunarDate}`;

    document.getElementById('clock').innerHTML = `${dateDisplay}<br>${timeDisplay}<br>`;
    document.getElementById('lunar-time').innerHTML = `${lunarDisplay}`;
}


updateClock();
setInterval(updateClock, 1000);


// 获取body元素
let body = document.body;

// // 创建计时器
// let timer = setTimeout(function () {
//     let img = new Image();
//     img.src = 'original-url.jpg';
//
//     img.onload = function () {
//         let loadedPercentage = (img.naturalWidth / img.width) * 100;
//
//         // 如果加载百分比小于50%，则更换背景图片URL
//         if (loadedPercentage < 50) {
//             body.style.backgroundImage = "url('https://img520.com/uAiCST.jpg') no-repeat 0";
//         }
//     };
// }, 5000);