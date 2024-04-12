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