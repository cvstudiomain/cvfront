import * as general from "./general.js"

const sectionHeroEl = document.querySelector(".section-hero-ad ");
general.slider()

general.naviagtionState();
general.smoothScroll("smoothmove")
general.obs.observe(sectionHeroEl)
general.checkFlexGap();
general.activateSubMenu()