// Custom Cursor
const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".link");

window.addEventListener("mousemove", (e) => {

  let x = e.pageX;
  let y = e.pageY;

  cursor.forEach(el => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        el.classList.add("hover");
      })
      link.addEventListener("mouseleave", () => {
        el.classList.remove("hover");
      })
    })
  })
})

// Marquee
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// Parallax
const bg = document.getElementById('bg')

window.addEventListener('scroll', () => {
    let value = window.scrollY

    bg.style.top = value * 0.7 + 'px'
})

// Songs Card Hover
const songOne = document.getElementById('songs-card-one')
const songTwo = document.getElementById('songs-card-two')
const songThree = document.getElementById('songs-card-three')
const songFour = document.getElementById('songs-card-four')
const songFive = document.getElementById('songs-card-five')
const songSix = document.getElementById('songs-card-six')
const songSeven = document.getElementById('songs-card-seven')
const songEight = document.getElementById('songs-card-eight')

songOne.addEventListener('mouseover', () => {
  songOne.style.height = 50 + "%"
  songTwo.style.height = 50/3 + "%"
  songThree.style.height = 50/3 + "%"
  songFour.style.height = 50/3 + "%"
})

songOne.addEventListener('mouseleave', () => {
  songOne.style.height = 25 + "%"
  songTwo.style.height = 25 + "%"
  songThree.style.height = 25 + "%"
  songFour.style.height = 25 + "%"
})

songTwo.addEventListener('mouseover', (e) => {
  songOne.style.height = 50/3 + "%"
  songTwo.style.height = 50 + "%"
  songThree.style.height = 50/3 + "%"
  songFour.style.height = 50/3 + "%"
})

songTwo.addEventListener('mouseleave', () => {
  songOne.style.height = 25 + "%"
  songTwo.style.height = 25 + "%"
  songThree.style.height = 25 + "%"
  songFour.style.height = 25 + "%"
})

songThree.addEventListener('mouseover', (e) => {
  songOne.style.height = 50/3 + "%"
  songTwo.style.height = 50/3 + "%"
  songThree.style.height = 50 + "%"
  songFour.style.height = 50/3 + "%"
})

songThree.addEventListener('mouseleave', () => {
  songOne.style.height = 25 + "%"
  songTwo.style.height = 25 + "%"
  songThree.style.height = 25 + "%"
  songFour.style.height = 25 + "%"
})

songFour.addEventListener('mouseover', (e) => {
  songOne.style.height = 50/3 + "%"
  songTwo.style.height = 50/3 + "%"
  songThree.style.height = 50/3 + "%"
  songFour.style.height = 50 + "%"
})

songFour.addEventListener('mouseleave', () => {
  songOne.style.height = 25 + "%"
  songTwo.style.height = 25 + "%"
  songThree.style.height = 25 + "%"
  songFour.style.height = 25 + "%"
})

songFive.addEventListener('mouseover', () => {
  songFive.style.height = 50 + "%"
  songSix.style.height = 50/3 + "%"
  songSeven.style.height = 50/3 + "%"
  songEight.style.height = 50/3 + "%"
})

songFive.addEventListener('mouseleave', () => {
  songFive.style.height = 25 + "%"
  songSix.style.height = 25 + "%"
  songSeven.style.height = 25 + "%"
  songEight.style.height = 25 + "%"
})

songSix.addEventListener('mouseover', () => {
  songFive.style.height = 50/3 + "%"
  songSix.style.height = 50 + "%"
  songSeven.style.height = 50/3 + "%"
  songEight.style.height = 50/3 + "%"
})

songSix.addEventListener('mouseleave', () => {
  songFive.style.height = 25 + "%"
  songSix.style.height = 25 + "%"
  songSeven.style.height = 25 + "%"
  songEight.style.height = 25 + "%"
})

songSeven.addEventListener('mouseover', () => {
  songFive.style.height = 50/3 + "%"
  songSix.style.height = 50/3 + "%"
  songSeven.style.height = 50 + "%"
  songEight.style.height = 50/3 + "%"
})

songSeven.addEventListener('mouseleave', () => {
  songFive.style.height = 25 + "%"
  songSix.style.height = 25 + "%"
  songSeven.style.height = 25 + "%"
  songEight.style.height = 25 + "%"
})

songEight.addEventListener('mouseover', () => {
  songFive.style.height = 50/3 + "%"
  songSix.style.height = 50/3 + "%"
  songSeven.style.height = 50/3 + "%"
  songEight.style.height = 50 + "%"
})

songEight.addEventListener('mouseleave', () => {
  songFive.style.height = 25 + "%"
  songSix.style.height = 25 + "%"
  songSeven.style.height = 25 + "%"
  songEight.style.height = 25 + "%"
})

// Overlay
const overlay = document.querySelector('.overlay')
const review = document.querySelector('.review-card')

overlay.style.height = review.style.height
overlay.style.width = review.style.width

// Typewriter Animation
// const text = document.querySelector(".sec-text");
// const textLoad = () => {
//   setTimeout(() => {
//     text.textContent = "Freelancer";
//   }, 0);
//   setTimeout(() => {
//     text.textContent = "Blogger";
//   }, 4000);
//   setTimeout(() => {
//     text.textContent = "YouTuber";
//   }, 8000); //1s = 1000 milliseconds
// }
// textLoad();
// setInterval(textLoad, 12000);