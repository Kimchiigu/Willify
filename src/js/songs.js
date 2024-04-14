// Destination Slider
const songsContainers = [...document.querySelectorAll('.songs-card')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

songsContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Parallax
const bg = document.getElementById('bg')

window.addEventListener('scroll', () => {
    let value = window.scrollY

    bg.style.top = value * 0.7 + 'px'
})