// const { async } = require("regenerator-runtime");

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  console.log("ok");
  headerEl.classList.toggle("nav-open");
});
let visits
// Smooth scrolling animation
const addVisitor = async function () {
 
  
  visits=localStorage.getItem("visits")
  console.log(visits)
  if(visits) return
  
  const numberOfVisitors = await axios.post(
    "https://app.cvstudio.io/user/visitors"
    );
    console.log(numberOfVisitors);
    
    localStorage.setItem("visits","visits")
};
addVisitor();
window.onbeforeunload = function() {
   localStorage.removeItem("visits")
  return '';
};
const allLinks = document.querySelectorAll(".smoothmove");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // if(href==="/templates.html")return window.location=href
    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

const templateLink = document.querySelector(".template-link");
const templateSupmenu = document.querySelector(".template-sub-menu");
templateLink.addEventListener("mouseleave", function (e) {
  templateSupmenu.classList.remove("sub-menu-show");
});

templateLink.addEventListener("mouseenter", function (e) {
  templateSupmenu.classList.add("sub-menu-show");
});
