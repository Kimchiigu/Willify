window.addEventListener("DOMContentLoaded", () => {
    const rnb = document.getElementById('rnb')
    const pop = document.getElementById('pop')
    const kpop = document.getElementById('kpop')

    const rnbCollection = document.getElementById('rnb-collection')
    const popCollection = document.getElementById('pop-collection')
    const kpopCollection = document.getElementById('kpop-collection')

    const songsImage = document.querySelector('.songs-image img');
    const title = document.getElementById('title')
    const description = document.querySelector('.left-detail h3');
    const biography = document.querySelector('.left-detail p')
    const lyrics = document.querySelector('.right-detail p');

    rnbCollection.style.display = 'flex';

    pop.addEventListener('click', () => {
        hideAllCollections();
        popCollection.style.display = 'flex';
    });

    rnb.addEventListener('click', () => {
        hideAllCollections();
        rnbCollection.style.display = 'flex';
    });

    kpop.addEventListener('click', () => {
        hideAllCollections();
        kpopCollection.style.display = 'flex';
    });

    function hideAllCollections() {
        rnbCollection.style.display = 'none';
        popCollection.style.display = 'none';
        kpopCollection.style.display = 'none';
    }

    rnbCollection.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const clickedImg = e.target;
            const imgSrc = clickedImg.getAttribute('src');
            const imgTitle = clickedImg.getAttribute('data-title');
            const imgDescription = clickedImg.getAttribute('data-description');
            const imgBiography = clickedImg.getAttribute('data-biography')
            let imgLyrics = clickedImg.getAttribute('data-lyrics');

            // Update songs image, title, description, and lyrics
            songsImage.src = imgSrc;
            title.textContent = imgTitle;
            description.textContent = imgDescription;
            biography.innerHTML = imgBiography;
            lyrics.innerHTML = imgLyrics;
        }
    });

    popCollection.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const clickedImg = e.target;
            const imgSrc = clickedImg.getAttribute('src');
            const imgTitle = clickedImg.getAttribute('data-title');
            const imgDescription = clickedImg.getAttribute('data-description');
            const imgBiography = clickedImg.getAttribute('data-biography')
            let imgLyrics = clickedImg.getAttribute('data-lyrics');
            
            // Update songs image, title, description, and lyrics
            songsImage.src = imgSrc;
            title.textContent = imgTitle;
            description.textContent = imgDescription;
            biography.innerHTML = imgBiography;
            lyrics.innerHTML = imgLyrics;
        }
    });

    kpopCollection.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const clickedImg = e.target;
            const imgSrc = clickedImg.getAttribute('src');
            const imgTitle = clickedImg.getAttribute('data-title');
            const imgDescription = clickedImg.getAttribute('data-description');
            const imgBiography = clickedImg.getAttribute('data-biography')
            let imgLyrics = clickedImg.getAttribute('data-lyrics');
            
            // Update songs image, title, description, and lyrics
            songsImage.src = imgSrc;
            title.textContent = imgTitle;
            description.textContent = imgDescription;
            biography.innerHTML = imgBiography;
            lyrics.innerHTML = imgLyrics;
        }
    });
})

// Parallax
// const bg = document.getElementById('bg')

// window.addEventListener('scroll', () => {
//     let value = window.scrollY

//     bg.style.top = value * 0.7 + 'px'
// })