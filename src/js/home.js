// Smooth href
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

document.getElementById('read-more-button').addEventListener('click', (event) => {
  event.preventDefault();
  scrollToSection('read-more-section');
});

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

if(window.innerWidth >= 1000){
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
} else {
  const songs = document.querySelectorAll('.player-card');

  // Define the mouseover event handler
  const handleMouseOver = (index) => {
      // Calculate the height for the hovered song
      const hoveredHeight = 25 + "%";
      // Calculate the height for the other songs
      const otherHeight = 75/7 + "%";

      // Set the height for each song based on the index
      songs.forEach((song, i) => {
          song.style.height = i === index ? hoveredHeight : otherHeight;
      });
  }

  // Define the mouseleave event handler
  const handleMouseLeave = () => {
      // Reset the height for all songs
      songs.forEach((song) => {
          song.style.height = 12.5 + "%";
      });
  }

  // Attach event listeners to each song
  songs.forEach((song, index) => {
      song.addEventListener('mouseover', () => handleMouseOver(index));
      song.addEventListener('mouseleave', handleMouseLeave);
  });
}



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