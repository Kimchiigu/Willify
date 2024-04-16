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

// Changing the h1 without <br>
const rnbtxt = document.getElementById('rnb-text')
const poptxt = document.getElementById('pop-text')
const kpoptxt = document.getElementById('kpop-text')

const changeText = () => {
    if (window.innerWidth < 1200) {
        rnbtxt.innerHTML = "R&B Genre";
        // Assuming you have 'pop-text' and 'kpop-text' elements in your HTML
        poptxt.innerHTML = "Pop Genre";
        kpoptxt.innerHTML = "K-Pop Genre";
    } else {
        // Reset the text to their default values if window width is not less than 1200
        rnbtxt.innerHTML = "R&B<br>Genre";
        poptxt.innerHTML = "Pop<br>Genre";
        kpoptxt.innerHTML = "K-Pop<br>Genre";
    }
}

// Initial call to set the text according to window width
changeText();

// Event listener to update the text if window is resized
window.addEventListener('resize', changeText);

// Parallax
// const bg = document.getElementById('bg')

// window.addEventListener('scroll', () => {
//     let value = window.scrollY

//     bg.style.top = value * 0.7 + 'px'
// })