const sidemenu = document.querySelector(".side-menu ");
const imagereflect = document.querySelector(".image-reflect ");
const scroll = document.querySelector(".scroll ");
const navicon = document.querySelector(".humb");

navicon.addEventListener("click", () => {
  sidemenu.classList.toggle("show");
  navicon.classList.toggle("change");
});

window.onload = () => {
  imagereflect.classList.add("show");
};

// Sticky Header 
const HeaderAppear = () => {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

// Card Appear

const AppearFunction = () => {
  const card1 = document.querySelector(".card1");
  const card2 = document.querySelector(".card2");
  const card3 = document.querySelector(".card3");
  let card1app = card1.getBoundingClientRect().top;
  let card2app = card2.getBoundingClientRect().top;
  let card3app = card3.getBoundingClientRect().top;
  let height = window.innerHeight;
  if (card1app < height / 1.2) {
    card1.classList.add("show");
  }
  if (card2app < height / 1.2) {
    card2.classList.add("show");
  }
  if (card3app < height / 1.2) {
    card3.classList.add("show");
  }
};

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    scroll.classList.add("show");
    scroll.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
      });
    });
  } else {
    scroll.classList.remove("show");
  }
  AppearFunction();
  HeaderAppear();
});
