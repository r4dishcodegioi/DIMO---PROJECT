let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(() => {next.click()},5000)

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()},5000)
}

dots.forEach((li,key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector('.header');

    if (!header) {
        console.error("❌ Không tìm thấy .header! Kiểm tra lại class trong HTML.");
        return;
    }

    console.log("✅ Script đã tải xong. Đang theo dõi sự kiện scroll...");

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        console.log("📌 Scroll Position:", scrollY); // Kiểm tra giá trị cuộn

        if (scrollY > 50) {
            if (!header.classList.contains("fixed")) {
                console.log("🔵 Thêm class .fixed vào header");
                header.classList.add("fixed");
            }
        } else {
            if (header.classList.contains("fixed")) {
                console.log("🔴 Xóa class .fixed khỏi header");
                header.classList.remove("fixed");
            }
        }
    });
});

