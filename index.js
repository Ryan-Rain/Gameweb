let navbar = document.getElementById("navbar");
let hero = document.getElementById("hero") || document.getElementById("hero-project");

window.addEventListener('scroll', function(e) {
  hero.style.backgroundPositionY = `${window.scrollY*0.5}px`;
  navbar.style.opacity = `${(1.0 * window.scrollY)/window.innerHeight}`;
});


function myFunction() {
  const links = navbar.getElementsByClassName("navbar-link")

  for (let i = 0; i < links.length; i++) {
      let link = links[i];
  }
}