import * as general from "./general.js"
const firstSlider=document.querySelectorAll(".firstSlider");
const secondSlider=document.querySelectorAll(".secondSlider")
const sectionHeroEl = document.querySelector(".section-hero");
general.slider()
// general.slider("slider1")
// general.slider("slider2")
// general.slider("slider3")
// general.slider("slider4")
general.activateSubMenu()


general.naviagtionState();
general.smoothScroll("smoothmove")
general.obs.observe(sectionHeroEl)
general.checkFlexGap();

general.activateSubMenu()
document.querySelector(".word-resume-next").addEventListener("click",e=>{
 if(!e.target.classList.contains("btn-5")) return
 let btnId=e.target.getAttribute("id")
 if(btnId==="prev-btn"){
   e.target.classList.add("hiddenClass")
firstSlider.forEach(slider=>slider.classList.remove("hiddenClass"))
secondSlider.forEach(silder=>silder.classList.add("hiddenClass"))
document.querySelector("#next-btn").classList.remove("hiddenClass")
 }
 if(btnId==="next-btn"){
  e.target.classList.add("hiddenClass")
 
document.querySelector("#prev-btn").classList.remove("hiddenClass")

  firstSlider.forEach(slider=>slider.classList.add("hiddenClass"))
  secondSlider.forEach(silder=>silder.classList.remove("hiddenClass"))
 }

})

