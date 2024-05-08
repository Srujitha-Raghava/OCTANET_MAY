const navMenu = document.getElementById("nav_menu"),
  toggleMenu_Btn = document.getElementById("toggle_btn"),
  closeMenu_btn = document.getElementById("close_btn");
toggleMenu_Btn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
closeMenu_btn.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
const menuLinks = document.querySelectorAll(".nav_menu_item_link");
function clickAction() {
  menuLinks.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show");
}
menuLinks.forEach((n) => n.addEventListener("click", clickAction));

gsap.from('.logo', {
    opacity:0,
    y:'-100px',
    delay:0.5,
    duration:1
})


gsap.from('.nav_menu_item', {
    opacity:0,
    y:'-100px',
    delay:1,
    duration:0.5,
    stagger:0.2
})

gsap.from('.toggle_btn', {
    opacity:0,
    y:'-100px',
    delay:1,
    duration:0.5,
    stagger:0.2
})

gsap.from('.hero_img', {
    opacity:0,
    y:'100px',
    delay:2.4,
    duration:1.3,
})


gsap.from('.title', {
    opacity:0,
    y:'100px',
    delay:2.8,
    duration:1.3,
})


gsap.from('.main_title > h3', {
    opacity:0,
    y:'100px',
    delay:3.2,
    duration:1.4,
})

gsap.from('.tagline', {
    opacity:0,
    y:'100px',
    delay:3.5,
    duration:1.4,
})


gsap.from('.btn_wrapper', {
    opacity:0,
    y:'100px',
    delay:3.8,
    duration:1.4,
})