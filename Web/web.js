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

const scrollers = document.querySelectorAll('.suitableFor')
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach((suitableFor) => {
        suitableFor.setAttribute("data-animated",true);

         const scrollerInner = suitableFor.querySelector('.top-inner');
         const scrollerContent = Array.from(scrollerInner.children);

         scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
         })

         const scrollerInner1 = suitableFor.querySelector('.bottom-inner');
         const scrollerContent1 = Array.from(scrollerInner1.children);

         scrollerContent1.forEach(item => {
            const duplicatedItem1 = item.cloneNode(true);
            duplicatedItem1.setAttribute('aria-hidden1', true);
            scrollerInner1.appendChild(duplicatedItem1);
         })
    })
}