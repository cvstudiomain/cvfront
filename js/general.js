import * as model from "./model.js"
const firstSlider=document.querySelectorAll(".firstSlider");
const secondSlider=document.querySelectorAll(".secondSlider")
export const naviagtionState=function(){

  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");
  btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });
}
// Smooth scrolling animation
export const smoothScroll=function(item){

  const allLinks = document.querySelectorAll(`.${item}`);
  
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
      if(href==="/cvengine.html")window.location=href
      // Close mobile naviagtion
      if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
    });
  });
}

///////////////////////////////////////////////////////////
// Sticky navigation


export const obs = new IntersectionObserver(
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

export const checkFlexGap=function() {
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
// Slider
export const slider = function (slidesItem) {
  
  let sliderContainer=document.querySelector(`.${slidesItem}`)
  let allSliders=document.querySelectorAll(".slider");
  let slides = "";
  
    if(slidesItem){
      slides = sliderContainer.querySelectorAll('.slide');
  
    } 

  
  const maxSlide = slides.length;

  

  const goToSlide = function (slide,operation=1,d) {
   if(operation===1) {
    slides=d 
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );}
    if(operation===2){
      allSliders.forEach(slider=>{
        slider.querySelectorAll(".slide").forEach((s,i)=>s.style.transform=`translateX(${100 * (i - slide)}%)`)
      })
    }
  };

  // Next slide
  const nextSlide = function (data,dataLength,sliderId) {
    if (model.state[`${sliderId}`]  === dataLength - 1) {
      model.state[`${sliderId}`]  = 0;
    } else {
      model.state[`${sliderId}`] ++;
    }

    goToSlide(model.state[`${sliderId}`],1,data);
    
  };

  const prevSlide = function (data,dataLength,sliderId) {
    
    if (model.state[`${sliderId}`]  === 0) {
      model.state[`${sliderId}`]  = dataLength - 1;
    } else {
      model.state[`${sliderId}`] --;
    }
    goToSlide(model.state[`${sliderId}`] ,1,data);
    
  };

  const init = function () {
     goToSlide(0,2);
     allSliders.forEach(sld=>sld.addEventListener("click",e=>{
     let id=sld.getAttribute("id")
    
      let slds=sld.querySelectorAll(".slide")
      if(e.target.closest("button").classList.contains("slider__btn--left"))prevSlide(slds,slds.length,id);
      if(e.target.closest("button").classList.contains("slider__btn--right"))nextSlide(slds,slds.length,id);
      
     }))
     secondSlider.forEach(slider=>{
       slider.classList.add("hiddenClass")
     })
  };
  if(!slidesItem) init();

  // Event handlers 
  
  // btnRight.addEventListener('click', nextSlide);
  // btnLeft.addEventListener('click', prevSlide);

  // document.addEventListener('keydown', function (e) {
  //   if (e.key === 'ArrowLeft') prevSlide();
  //   e.key === 'ArrowRight' && nextSlide();
  // });

 
};

const templateSliders=document.querySelectorAll('.slide')
templateSliders.forEach(templateSlider=>{

  templateSlider.addEventListener("mouseenter", function (e) {
    let btnUseThis = e.target
      .closest(".slide")
      .querySelector(".custom-btn");

    if (!btnUseThis) return;
    btnUseThis.style.opacity = "1";
    btnUseThis.style.pointerEvents = "auto";
  });

  templateSlider.addEventListener("mouseleave", function (e) {
    let btnUseThis = e.target
      .closest(".slide")
      .querySelector(".custom-btn");

    if (!btnUseThis) return;
    btnUseThis.style.opacity = "0";
    btnUseThis.style.pointerEvents = "none";
    
  });
})
export const activateSubMenu=function(){

  const templateLink=document.querySelector(".template-link");
  const templateSupmenu=document.querySelector(".template-sub-menu")
  templateLink.addEventListener("mouseleave", function (e) {
    templateSupmenu.classList.remove("sub-menu-show")
  })
  
  templateLink.addEventListener("mouseenter", function (e) {
    
    templateSupmenu.classList.add("sub-menu-show")
  })
}
  