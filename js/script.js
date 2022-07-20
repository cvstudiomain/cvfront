import * as model from "./model.js";
import * as temMarckup from "./rAndcGenerator.js";
import * as pagination from "./pagination.js";
// all resumes and cover letter templates
import * as arct from "./alltemplates.js";
// console.log(arct)
const containerBody=document.querySelector("body")
const loaderContainer=document.querySelector(".loaderContainer")
const btnNext1 = document.querySelector("#next1");
const btnNext2 = document.querySelector("#next2");
const btnNext3 = document.querySelector("#next3");
const btnNext4 = document.querySelector("#next4");
const btnNext5 = document.querySelector("#next5");
const userAreaContents = document.querySelector(".content-columns");
const paginationBox = document.querySelectorAll(".paginationBox");

const btnback1 = document.querySelector("#back1");
const btnback2 = document.querySelector("#back2");
const btnback3 = document.querySelector("#back3");
const btnback4 = document.querySelector("#back4");
const btnback5 = document.querySelector("#back5");

const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const s4 = document.querySelector(".s4");
const s5 = document.querySelector(".s5");
const s6 = document.querySelector(".s6");

let sectionName = document.querySelector(".user-section-name");
const progress = document.querySelector("#progress");
const templates = document.querySelector(".templates");
const htmlParent = document.querySelector("html");
const myResume = document.querySelector(".myResume");
const resumesViewer = document.querySelector(".resumesViewer");
const resumeInforContainer = document.querySelector(".resume-infor-container");
const noResumeInfor = document.querySelector(".no-resume-infor");
const noTemplateInfor = document.querySelector(".no-template-infor");
const myTemplates = document.querySelector(".myTemplates");
const templatesInfor = document.querySelector(".templatesInfor");
const templateInorContainer = document.querySelector(
  ".template-infor-container"
);

const pbox1 = document.querySelector(".myResumes-p-btns");
const pbox2 = document.querySelector(".myTemplates-p-btns");
const pbox3 = document.querySelector(".templates-p-btns");

const userDashBoard = document.querySelector(".userDashBoard");
const formBtn = document.querySelector(".generateCv");
const btnSaveLetter = document.querySelector(".btn-save-letter");
const cvDataForm = document.querySelector(".cv-form");
const cvFormContainer = document.querySelector(".cv-form-container");
let image_input2 = document.querySelector("#image_input2");
let image_input = document.querySelector("#image_input");
let uploaded_image = "";
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".master-body");
const preLoade=function(start=true){
  if(start){
    containerBody.classList.add("body-on-load")
   loaderContainer.classList.remove("hideMe")
    return true
  }
  containerBody.classList.remove("body-on-load")
  loaderContainer.classList.add("hideMe")
}
document.querySelector(".nav-tabs").addEventListener("click", function (e) {
  if (!e.target.classList.contains("tab")) return;

  this.querySelectorAll(".tab").forEach((t) => t.classList.remove("active1"));
  e.target.classList.add("active1");
  // return console.log(document.querySelector(`.${model.state.section}`));

  let alltemp = document
    .querySelector(`.${model.state.section}`)
    .querySelectorAll(".rl");
  alltemp.forEach((tem) => tem.classList.remove("hiddenClass"));
  if (e.target.classList.contains("tab-all")) {
    alltemp.forEach((temp) => {
      if (temp.classList.contains("hiddenClass"))
        return temp.classList.remove("hiddenClass");
    });
  }

  if (e.target.classList.contains("tab-resumes")) {
    alltemp.forEach((tem) => {
      if (!tem.classList.contains("resume"))
        return tem.classList.add("hiddenClass");
    });
  }
  if (e.target.classList.contains("tab-cl")) {
    alltemp.forEach((tem) => {
      if (!tem.classList.contains("letter"))
        return tem.classList.add("hiddenClass");
    });
  }
});

btnNavEl.addEventListener("click", function () {
  console.log("ok");
  headerEl.classList.toggle("nav-open");
});

const objectOutOfArray = function (data) {
  return Object.fromEntries(...[data]);
};
// document.getElementById("pdf-content").style.display = "none";
const allUserSiteButtons = document.querySelectorAll(".user-site-button");
const allUserContentChilds = document.querySelectorAll(".user-content-child");
resumesViewer.addEventListener("click", async function (e) {
//   type of clicks
//   downloadCv
// editCv
// deleteCv
let btn=e.target
  if (!btn.classList.contains("viewerBtn")) return;
  

  // userDashBoard.classList.remove("hiddenClass");
  if (btn.closest("button").classList.contains("btnCloseView")) {
   
    myResume.classList.remove("hiddenClass")
    hidePaginations(pbox1)
    htmlParent.style.fontSize = model.state.fontSize;
    return resumesViewer.classList.add("hiddenClass");
  }
  // return console.log(btn)
  if(btn.classList.contains("downloadCv")){

    htmlParent.style.fontSize = "16px";
    let container = e.target.closest(".resumesViewer");
    let myCv = container.querySelector(".template");
    let name=myCv.classList.contains("letter")?"letter.pdf":"cv.pdf";
   
    // myCv.style.minHeight="100%";
    // myCv.style.width="100%";
    resumesViewer.classList.add("hiddenClass");
    myResume.innerHTML = `<div class="loader"></div>`;
    myResume.classList.remove("hiddenClass");
    var opt = {
      pagebreak: {
        avoid: [
          ".objective",
          ".content-wrapper",
          ".school-and-address",
          "h3",
          "p",
          "li",
        ],
      },
      
      filename: name,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, logging: true, letterRendering: 1, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    resumesViewer.classList.add("hiddenClass");
    await html2pdf().from(myCv).set(opt).save();
    myCv.style.minHeight = "70.157rem";
    htmlParent.style.fontSize = model.state.fontSize;
    
    return location.reload();
  }

  alert("This feature is not ready now")
    // setTimeout(() => {
      
      //   myResume.innerHTML = model.state.user.myResumes;
      // }, 3000);
    });
pbox1.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn--inline");
  if (!btn) return;
  const gotoPage = Number(btn.dataset.goto);
  myResume.innerHTML = "";
  pbox1.innerHTML = "";
  model.state.searchResult = pagination.getSearchResultPage(
    gotoPage,
    model.state.user.myResumes,
    true
  );
  model.state.searchResult.forEach((result) => {
    myResume.insertAdjacentHTML("afterbegin", result.toString());
  });

  pbox1.insertAdjacentHTML(
    "beforeend",
    pagination.paginationMarckup(model.state.user.myResumes, true)
  );
});
pbox3.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn--inline");
  if (!btn) return;
  const gotoPage = Number(btn.dataset.goto);
  myTemplates.innerHTML = "";
  pbox3.innerHTML = "";
  model.state.searchResult = pagination.getSearchResultPage(
    gotoPage,
    model.state.user.userTotalTemplates,
    true
  );
  model.state.searchResult.forEach((result) => {
    myTemplates.insertAdjacentHTML("afterbegin", result.toString());
  });

  pbox3.insertAdjacentHTML(
    "beforeend",
    pagination.paginationMarckup(model.state.user.userTotalTemplates, true)
  );
});

pbox2.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn--inline");
  if (!btn) return;
  const gotoPage = Number(btn.dataset.goto);
  templates.innerHTML = "";
  pbox2.innerHTML = "";
  model.state.searchResult = pagination.getSearchResultPage(
    gotoPage,
    arct.allTemplates,
    true
  );
  model.state.searchResult.forEach((result) => {
    templates.insertAdjacentHTML("afterbegin", result.toString());
  });

  pbox2.insertAdjacentHTML(
    "beforeend",
    pagination.paginationMarckup(arct.allTemplates, true)
  );
});
// paginationBox.forEach(function(btnBox){

//  btnBox.addEventListener("click", function(e){
//   let boxClass=""
//   let content=[];
//   let container
//  if (btnBox.classList.contains("myResumes-p-btns")){
//    content=;
//    boxClass="myResumes-p-btns";
//    container=myResume;
//  }
//  if (btnBox.classList.contains("myTemplates-p-btns")) {
//    content=model.state.userTotalTemplates;
//    boxClass="myTemplates-p-btns";
//    container=myTemplates
//   }
//  if (btnBox.classList.contains("templates-p-btns")){
//  content=arct.allTemplates;
//    boxClass="templates-p-btns";
//    container=templates
//  }
//  let btnContainer=btn.closest(`.${boxClass}`)

//   });

// })

myResume.addEventListener("click", function (e) {
  // console.log(e.target.closest('.template'))

  if (!e.target.closest(".template")) return;

 
  if (e.target.closest(".template")) {
   myResume.classList.add("hiddenClass");
    let id = e.target.closest(".template").getAttribute("id");
    let marckupData = "";
    model.state.resumes.forEach((resume) =>
      resume._id === id ? (marckupData = resume) : ""
    );
    hidePaginations(null)
    let marckup = temMarckup.createPdfMarckup(marckupData);
    let style = window
      .getComputedStyle(htmlParent, null)
      .getPropertyValue("font-size");
    let fontSize = parseFloat(style);
    model.state.fontSize = fontSize + "px";
    htmlParent.style.fontSize = "5px";
    resumesViewer.innerHTML = "";
    resumesViewer.insertAdjacentHTML(
      "afterbegin",
      `<button type="button" class="btnCloseView "> <i
    class="fa fa-times icon-mobile-nav viewerBtn"
    
    aria-hidden="true"
  ></i></button>
  <div class="resumesViewer-content-binder">
  ${marckup}
  <div class="download-btn-container">
  
  <button type="button" class="btn downloadCv viewerBtn">Download</button>
  
  
  <button type="button" class="btn editCv viewerBtn">Edit</button>
  
  <button type="button" class="btn deleteCv viewerBtn">Delete</button>
  </div>
  </div>
 `
    );
    resumesViewer.classList.remove("hiddenClass");

    return;
  }
});

document.querySelector(".create-new").addEventListener("click", function () {
  allUserContentChilds.forEach((child) => {
    // document.querySelector(".myResumeInfor").classList.add("hiddenClass");

    if (!child.classList.contains("hiddenClass"))
      child.classList.add("hiddenClass");
  });
  allUserSiteButtons.forEach((btn) => {
    if (btn.classList.contains("active")) btn.classList.remove("active");
  });
  hidePaginations(pbox3);

  model.state.section = "myTemplates";
  sectionName.innerText = "My Templates";
  myTemplates.classList.remove("hiddenClass");

  document
    .querySelector(`#${myTemplates.classList[0]}`)
    .classList.add("active");
  outOfMyResumes();
});
function outOfMyTemplates() {
  templateInorContainer.classList.add("hiddenClass");
  resumeInforContainer.classList.remove("hiddenClass");
}
function outOfMyResumes() {
  templateInorContainer.classList.remove("hiddenClass");
  resumeInforContainer.classList.add("hiddenClass");
}
document.querySelectorAll(".closeForm").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    cvFormContainer.classList.add("hiddenClass");
    myTemplates.classList.remove("hiddenClass");
    hidePaginations(pbox3)
    document
      .querySelector(".cover-letter-container")
      .classList.add("hiddenClass");
  });
});
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
    // if(href==="/cvengine.html")return window.location=href
    // if(href==="/templates.html")return window.location=href
    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
const hidePaginations = function (box) {
  paginationBox.forEach((btnbox) =>
    btnbox.classList.contains("hiddenClass")
      ? ""
      : btnbox.classList.add("hiddenClass")
  );
  box?.classList.remove("hiddenClass");
};
document.querySelector(".site-menu").addEventListener("click", function (e) {
  e.preventDefault();
  let buttonId = e.target.closest("li").getAttribute("id");
  if (!buttonId) return;

  // console.log(paginationBox)
  // document.querySelector(".myResumeInfor").classList.add("hiddenClass");
  templateInorContainer.classList.add("hiddenClass");
  resumeInforContainer.classList.add("hiddenClass");
  templatesInfor.classList.add("hiddenClass");
  document
    .querySelector(".nav-tabs")
    .querySelectorAll("a")
    .forEach((elem) => elem.classList.remove("active1"));
  headerEl.classList.remove("nav-open");
  let targetElement = document.querySelector(`#${buttonId}`);

  let allTargetButtons = e.target.closest(".site-menu").querySelectorAll("li");
  let sectionText = targetElement.querySelector("a").innerText;

  let allSections = document.querySelectorAll(".user-content-child");
  allSections.forEach((sect) => {
    if (!sect.classList.contains("hiddenClass"))
      sect.classList.add("hiddenClass");
  });
  allTargetButtons.forEach((btn) => {
    if (btn.classList.contains("active")) btn.classList.remove("active");
  });
  if (buttonId === "myResume") {
    hidePaginations(pbox1);
    model.state.section = "myResume";
    resumeInforContainer.classList.remove("hiddenClass");
    // document.querySelector(".myResumeInfor").classList.remove("hiddenClass");
    document.querySelector(`.${buttonId}`).classList.remove("hiddenClass");
    targetElement.classList.add("active");
    sectionName.innerText = sectionText;
    // if (model.state.resumes.length !== 0) {
    //   let marckup = model.state.resumes.map((resume) => createPdfMarckup(resume));
    //   generateMarckup(marckup);
    // }
    templates.classList.add("hiddenClass");
  }

  if (buttonId === "myProfile") {
    targetElement.classList.add("active");
    sectionName.innerText = sectionText;
    document.querySelector(`.${buttonId}`).classList.remove("hiddenClass");
  }
  if (buttonId === "myTemplates") {
    hidePaginations(pbox3);
    model.state.section = "myTemplates";
    console.log(model.state.user.userTotalTemplates);
    templateInorContainer.classList.remove("hiddenClass");

    targetElement.classList.add("active");
    sectionName.innerText = sectionText;
    document.querySelector(`.${buttonId}`).classList.remove("hiddenClass");
  }
  if (buttonId === "templates") {
    model.state.section = "templates";
    hidePaginations(pbox2);
    templatesInfor.classList.remove("hiddenClass");

    targetElement.classList.add("active");
    sectionName.innerText = sectionText;
    document.querySelector(`.${buttonId}`).classList.remove("hiddenClass");
  }
  if (buttonId === "mySite") {
    targetElement.classList.add("active");
    sectionName.innerText = sectionText;
    document.querySelector(`.${buttonId}`).classList.remove("hiddenClass");
  }
  if (buttonId === "notifications") {
    targetElement.classList.add("active");
    sectionName.innerText = sectionText;
    document.querySelector(`.${buttonId}`).classList.remove("hiddenClass");
  }
  if (buttonId === "logout") {
    localStorage.clear();
    window.location = "index.html";
  }
});
btnSaveLetter.addEventListener("click", async function (e) {
  this.innerText = "please wait..";
  let formData = Object.fromEntries(
    ...[new FormData(document.querySelector(".cover-letter-container"))]
  );
  let theletter = document.querySelector("#theletter").innerText;
  let coverLetter = {
    ...formData,
    theletter: theletter,
    template: model.state.templateToUse,
    images: {},
    userid: model.state.user.userid,
  };
  model.state.user.coverLetter = coverLetter;
  // console.log(model.state.user.coverLetter)
  await getCvOrLetter(model.state.user.coverLetter);
  this.innerText = "Done";
  model.state.templateToUse.type = "";
  model.state.templateToUse.template = "";
});

const getCvOrLetter = async function (data) {
  if (model.state.user.file) {
    // console.log(model.state.user.file.type);
    let formData = new FormData();
    let token = model.state.user.token;
    formData.append("file", model.state.user.file);
    let res = await axios.post("https://app.cvstudio.io/upload/", {
      imageType: model.state.user.file.type,
    });
    let url = res.data.uploadUrl;
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: model.state.user.file,
    });
    let imgUrl = { url: url.split("?")[0] };

    // console.log(res.data.uploadUrl,url,imgUrl)

    model.state.templateToUse.type === "resume"
      ? (model.state.user.inputData.images = imgUrl)
      : (model.state.user.coverLetter.images = imgUrl);
  }
  const res = await axios.post("https://app.cvstudio.io/resume/create", {
    ...data,
  });

  model.state.resume = res.data.data;
  model.state.resumes.push(model.state.resume);
  model.state.user.myResumes.push(
    temMarckup.createPdfMarckup(model.state.resume)
  );
  noResumeInfor.classList.add("hiddenClass");
  myTemplates.classList.add("hiddenClass");
  document.querySelector("#myTemplates").classList.remove("active");

  myResume.classList.remove("hiddenClass");
  document.querySelector("#myResume").classList.add("active");
  myResume.innerHTML = "";
  model.state.resumes.forEach((resume) => {
    myResume.insertAdjacentHTML(
      "afterbegin",
      temMarckup.createPdfMarckup(resume)
    );
  });
  cvFormContainer.classList.add("hiddenClass");
  document
    .querySelector(".cover-letter-container")
    .classList.add("hiddenClass");
  userDashBoard.classList.remove("hiddenClass");
  s6.style.left = "-1000px";
  s1.style.left = "16px";
  progress.style.width = "60px";
  clearInput();
};
const clearInput = function () {
  document
    .querySelectorAll(".inputTypeText")
    .forEach((elem) => (elem.value = ""));
  document.querySelectorAll("textarea").forEach((elem) => (elem.value = ""));
};
formBtn.addEventListener("click", async function (e) {
  try {
    e.preventDefault();
    this.innerText = "Please wait..";
    [...new FormData(e.target.closest("form"))].filter(
      (val) => val[1] !== "" && model.state.user.summeryData.push(val)
    );

    let eduCol = [];
    model.state.user.eduData &&
      model.state.user.eduData.forEach(
        (val) => val[0] !== "certification" && val[1] !== "" && eduCol.push(val)
      );
    eduCol.length !== 0 && model.state.user.educations.push(eduCol);
    let expCol = [];
    model.state.user.expeData &&
      model.state.user.expeData.forEach(
        (val) => val[1] !== "" && expCol.push(val)
      );
    expCol.length !== 0 && model.state.user.experiences.push(expCol);
    model.state.eduData &&
      model.state.user.eduData.forEach((val) => {
        if (val[0] === "certification" && val[1] !== "")
          model.state.user.certifications.push(val);
      });
    model.state.user.summeryData &&
      model.state.user.summeryData.forEach((val) => {
        if (val[0] === "skill" && val[1] !== "" && val.length !== 0)
          model.state.user.skills.push(val);
      });
    model.state.user.summeryData &&
      model.state.user.summeryData.forEach((val) => {
        if (val[0] === "interest" && val[1] !== "" && val.length !== 0)
          model.state.user.hobies.push(val);
      });
    let refCol = [];
    model.state.user.summeryData &&
      model.state.user.summeryData.forEach(
        (val) =>
          val[0] !== "interest" &&
          val[0] !== "skill" &&
          val[0] !== "profile" &&
          val[1] !== "" &&
          refCol.push(val)
      );
    refCol.length !== 0 && model.state.user.reffrences.push(refCol);

    model.state.user.inputData = {
      userid: model.state.user.userid,
      template: model.state.templateToUse,
      ...objectOutOfArray(model.state.user.persData1),
      ...objectOutOfArray(model.state.user.persData2),
      ...objectOutOfArray(model.state.user.socLinks),
      skills: [
        ...model.state.user.skills
          .filter((val) => val[1] !== "")
          .map((val) => val[1]),
      ],
      certifications: [
        ...model.state.user.certifications
          .filter((val) => val[1] !== "")
          .map((val) => val[1]),
      ],
      interest: [
        ...model.state.user.hobies
          .filter((val) => val[1] !== "")
          .map((val) => val[1]),
      ],
      profile:
        model.state.user.summeryData &&
        model.state.user.summeryData
          .filter((val) => val[0] === "profile")
          .map((val) => val[1])
          .toString(),

      educations: model.state.user.educations.map((val) =>
        objectOutOfArray(val)
      ),
      experiences: model.state.user.experiences.map((val) =>
        objectOutOfArray(val)
      ),
      reffrences: model.state.user.reffrences.map((val) =>
        objectOutOfArray(val)
      ),
      images: {},
    };

    await getCvOrLetter(model.state.user.inputData);
    this.innerText = "Generate Cv";
    location.reload();
  } catch (error) {
    console.log(error);
  }
});

const getTheTemplates = function (data) {
  let alluserTemplates = arct.allTemplates;
  // console.log(data)

  let userTotalTemplates = [];

  alluserTemplates.forEach((tem) => {
    let doc = new DOMParser().parseFromString(tem, "text/xml");
    data.forEach((template) => {
      if (doc.firstChild.classList.contains(template.template)) {
        // tem.classList.add("rl")

        userTotalTemplates.push(tem);
      }
    });
  });
  return userTotalTemplates;
};
const init = async function () {
  try {
    
 
 preLoade(true)

  let userData = JSON.parse(localStorage.getItem("user"));
  // console.log(userData)
  if (!userData) window.location = "index.html";
  //  console.log(userData)

  if (userData.isGonGon) {
    window.location = "admin-area.html";

    return console.log("1");
  }
// console.log(userData)
  model.state.user.accesstoken = userData.accesstoken;
  model.state.user.email = userData.email;
  model.state.user.siteUserName = userData.siteUserName;
  model.state.user.userid = userData.userid;

  let id = model.state.user.userid;
  document.querySelector(".site-user-name").innerText =
    model.state.user.siteUserName;

  templateInorContainer.classList.add("hiddenClass");
  const resume = await axios.post(`https://app.cvstudio.io/resume/:${id}`);

  const templatesRes = await axios.post(
    `https://app.cvstudio.io/resume/gettemplate/:${id}`
  );
  // console.log(resume, templatesRes);

  if (resume.data.cv) {
    model.state.resumes.push(...resume.data.cv);
    model.state.resumes.forEach((resume) => {
      // console.log(resume)

      model.state.user.myResumes.push(temMarckup.createPdfMarckup(resume));
    });

    noResumeInfor.classList.add("hiddenClass");
    resumeInforContainer
      .querySelector(".anouncement")
      .classList.remove("hiddenClass");
      
  }
  //content -  model.state.user.myResumes
  //box - myResume
  identifyBox(myResume, model.state.user.myResumes, pbox1);
  // resetPaginationButton(myResume,model.state.user.myResumes,myResumesPbtns)
  //content -  arct.allTemplates
  //box - templates
  identifyBox(templates, arct.allTemplates, pbox2);
  // resetPaginationButton(templates, arct.allTemplates,templatesPbtns);

  if (templatesRes.data.templates.length !== 0) {
    model.state.templates = templatesRes.data.templates;
    templateInorContainer
      .querySelector(".anouncement")
      .classList.remove("hiddenClass");
    model.state.user.userTotalTemplates = getTheTemplates(
      model.state.templates
    );
    identifyBox(myTemplates, model.state.user.userTotalTemplates, pbox3);
    // resetPaginationButton(myTemplates, model.state.user.userTotalTemplates,myTemplatesPbtns);

    noTemplateInfor.classList.add("hiddenClass");
  }

 preLoade(false)
} catch (error) {
    if(error) preLoade(true)
}
};
const identifyBox = function (box, content, pBox) {
  model.state.page = 1;
  model.state.searchResult = pagination.getSearchResultPage(
    model.state.page,
    content,
    true
  );
  // zzconsole.log(box,model.state.searchResult)
  model.state.searchResult.map((result) => {
    box.insertAdjacentHTML("afterbegin", result.toString());
  });
  pBox.insertAdjacentHTML(
    "beforeend",
    pagination.paginationMarckup(content, true)
  );
};

init();

const hideTemplateBtns = function (contaner, btnToUse) {
  let templts = contaner.querySelectorAll(".resumeAndLetter");
  templts.forEach((tmplt) => {
    let btnUseThis = tmplt.querySelector(".custom-btn");

    btnUseThis.classList.contains("showUsedBtn")
      ? btnUseThis.classList.remove("showUsedBtn")
      : "";
    // btnUseThis.style.opacity = "0";
    // btnUseThis.style.pointerEvents = "auto";
  });
  if(contaner.classList.contains("templates")&&btnToUse) btnToUse.innerText="Select this";
  btnToUse?.classList.add("showUsedBtn");
};

let mandt = [templates, myTemplates];
mandt.forEach(function (box) {
  box.addEventListener("mouseover", function (e) {
    let templateContainer = e.target.closest(".resumeAndLetter");
    if (!templateContainer) return;
    // console.log(templateContainer);
    hideTemplateBtns(this, templateContainer.querySelector(".custom-btn"));
  });
});
mandt.forEach((box) => {
  box.addEventListener("mouseout", function (e) {
    let templateContainer = e.target.closest(".resumeAndLetter");
    if (!templateContainer) return;
    hideTemplateBtns(this, null);
  });
});

templates.addEventListener("click", async (e) => {
  if (!e.target.classList.contains("custom-btn")) return;
  let btn = e.target;
  let templateContainer = btn.closest(".resumeAndLetter");
  // return console.log(btn);
  model.state.user.template = templateContainer.getAttribute("id");

  //   select this
  // Please wait...
  btn.innerText = "Please wait...";
  const templateData = {
    userid: model.state.user.userid,
    template: model.state.user.template,
  };
  // templates.classList.add("hiddenClass");
  const res = await axios.post("https://app.cvstudio.io/resume/savetemplate/", {
    templateData,
  });
  btn.innerText = "Select this";
  if (res.data.msg) {
    let messageBox = templateContainer.querySelector(".s7");
    messageBox.style.opacity = "1";
    messageBox.style.left = "0";
    messageBox.style.zIndex = "999";

    setTimeout(() => {
      messageBox.style.opacity = "0";
      messageBox.style.left = "1000";
      messageBox.style.zIndex = "0";
    }, 2000);
    return console.log(res.data.msg);
  }
  model.state.templates.push(res.data.result);
  model.state.user.myTemplates = [];
  model.state.section = "myTemplates";
  myTemplates.classList.remove("hiddenClass");
  hidePaginations(pbox3);
  // getTheTemplates(model.state.templates);
  myTemplates.innerHTML=""
  model.state.user.userTotalTemplates = getTheTemplates(
    model.state.templates
  );
  identifyBox(myTemplates, model.state.user.userTotalTemplates, pbox3);
  noTemplateInfor.classList.add("hiddenClass");
  templates.classList.add("hiddenClass");
  sectionName.innerText = "My Templates";
  document.querySelector("#templates").classList.remove("active");
  document.querySelector("#myTemplates").classList.add("active");
});
document.querySelector(".get-one").addEventListener("click", function () {
  hidePaginations(pbox2);

  model.state.section = "templates";
  allUserContentChilds.forEach((child) => {
    if (!child.classList.contains("hiddenClass"))
      child.classList.add("hiddenClass");
  });
  allUserSiteButtons.forEach((btn) => {
    if (btn.classList.contains("active")) btn.classList.remove("active");
  });
  templatesInfor.classList.remove("hiddenClass");
  templateInorContainer.classList.add("hiddenClass");
  templates.classList.remove("hiddenClass");

  document.querySelector(`#${templates.classList[0]}`).classList.add("active");

  return;
});
myTemplates.addEventListener("click", function (e) {
  // console.log(e.target)

  if (e.target.closest(".resumeAndLetter")) {
    // if (!e.target.closest(".rl")) return;

    // console.log(templateBtn,'confirm')
    if (e.target.classList.contains("custom-btn")) {
      // e.target.innerText = "Please wait...";
      // document.querySelector(".myResumeInfor").classList.remove("hiddenClass");

      model.state.templateToUse.type = "";
      model.state.templateToUse.template = "";
      let thisTemplate = e.target
        .closest(".resumeAndLetter")
        .getAttribute("id");

      model.state.templateToUse.template = thisTemplate;
      model.state.templateToUse.type = thisTemplate.slice(0, -1);

      // console.log(model.state.templateToUse);
      // e.target.innerText = "Use this";
      myTemplates.classList.add("hiddenClass")
      hidePaginations(null)
      if (model.state.templateToUse.type === "resume") {
        cvFormContainer.classList.remove("hiddenClass");
       
      }
      if (model.state.templateToUse.type === "letter") {
        document
          .querySelector(".cover-letter-container")
          .classList.remove("hiddenClass");
        
      }
    }
  }
});

const returnToTop = () => {
  // userDashBoard.classList.add("hiddenClass");

  return window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

[image_input, image_input2].forEach(function (imageIn) {
  imageIn.addEventListener("change", async function (e) {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) return alert("File not exist.");
      if (file.size > 1024 * 1024) return alert("Size too large");
      if (
        file.type !== "image/jpg" &&
        file.type !== "image/png" &&
        file.type !== "image/jpeg"
      )
        return alert("File type not supported");

      model.state.user.file = file;
      let reader = new FileReader();
      reader.onloadend = function () {
        document
          .querySelectorAll(".display_image2")
          .forEach(
            (display) =>
              (display.style.backgroundImage = `url(${reader.result})`)
          );
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } catch (error) {
      console.log(error.message);
    }
  });
});

cvDataForm.addEventListener("click", async function (e) {
  let btn = e.target;
  let newData = "";
  const messageBox = document.querySelector(".s7");
  if (btn.type === "button") {
    newData = [...new FormData(e.target.closest("form"))].filter(
      (val) => val[1] !== "" && val !== {}
    );
    if (newData.length === 0) return; //console.log("not added");

    messageBox.style.opacity = "1";
    messageBox.style.left = "0";
    if (btn.classList.contains("btnAddEducation")) {
      document
        .querySelectorAll(".eduInputs")
        .forEach((val) => (val.value = ""));
      let eduCol = [];
      newData.forEach(
        (data) =>
          data[0] !== "certification" && data[1] !== "" && eduCol.push(data)
      );
      eduCol.length !== 0 && model.state.user.educations.push(eduCol);
    }
    if (btn.classList.contains("btnAddCertification")) {
      document.querySelector(".certInput").value = "";

      model.state.user.certifications.push(
        ...newData.filter((data) => data[0] === "certification")
      );
    }
    if (btn.classList.contains("btnWorkExperience")) {
      document.querySelectorAll(".exInput").forEach((val) => (val.value = ""));

      newData.length !== 0 &&
        newData.some((val) => val[1] !== "") &&
        model.state.user.experiences.push(newData);
    }
    if (btn.classList.contains("addskill")) {
      document.querySelector(".skillInput").value = "";

      model.state.user.skills.push(
        ...newData.filter((val) => val[0] === "skill")
      );
    }
    if (btn.classList.contains("addinterest")) {
      document.querySelector(".intInput").value = "";

      model.state.user.hobies.push(
        ...newData.filter((val) => val[0] === "interest")
      );
    }
    if (btn.classList.contains("addrefrence")) {
      document
        .querySelectorAll(".refInputs")
        .forEach((val) => (val.value = ""));
      let refCol = [];
      newData.forEach(
        (val) =>
          val[0] !== "interest" &&
          val[0] !== "skill" &&
          val[0] !== "profile" &&
          val[1] !== "" &&
          refCol.push(val)
      );
      refCol.length !== 0 && model.state.user.reffrences.push(refCol);
    }
  }
  newData = "";
  setTimeout(() => {
    messageBox.style.opacity = "0";
    messageBox.style.left = "1000px";
  }, 1500);
});
btnNext1.addEventListener("click", (e) => {
  e.preventDefault();
  model.state.user.persData1 = [...new FormData(e.target.closest("form"))];

  s1.querySelector(".fullName").style.borderBottom = "1px solid #999;";

  s1.style.left = "-1000px";
  s2.style.left = "16px";
  progress.style.width = "120px";
});
btnback1.addEventListener("click", (e) => {
  e.preventDefault();

  s2.style.left = "1000px";
  s1.style.left = "16px";
  progress.style.width = "60px";
});
btnNext2.addEventListener("click", (e) => {
  e.preventDefault();
  model.state.user.persData2 = [...new FormData(e.target.closest("form"))];

  s2.style.left = "-1000px";
  s3.style.left = "16px";
  progress.style.width = "180px";
});
btnback2.addEventListener("click", (e) => {
  e.preventDefault();
  s3.style.left = "1000px";
  s2.style.left = "16px";
  progress.style.width = "120px";
});
btnNext3.addEventListener("click", (e) => {
  e.preventDefault();

  [...new FormData(e.target.closest("form"))].forEach(
    (val) => val[1] !== "" && model.state.user.eduData.push(val)
  );
  s3.style.left = "-1000px";
  s4.style.left = "16px";
  progress.style.width = "216px";
});
btnback3.addEventListener("click", (e) => {
  e.preventDefault();
  s4.style.left = "1000px";
  s3.style.left = "16px";
  progress.style.width = "180px";
});
btnNext4.addEventListener("click", (e) => {
  e.preventDefault();
  [...new FormData(e.target.closest("form"))].filter(
    (val) => val[1] !== "" && model.state.user.expeData.push(val)
  );
  s4.style.left = "-1000px";
  s5.style.left = "16px";
  progress.style.width = "300px";
});
btnback4.addEventListener("click", (e) => {
  e.preventDefault();
  s5.style.left = "1000px";
  s4.style.left = "16px";
  progress.style.width = "216px";
});
btnNext5.addEventListener("click", (e) => {
  e.preventDefault();
  model.state.user.socLinks = [...new FormData(e.target.closest("form"))];
  s5.style.left = "-1000px";
  s6.style.left = "16px";
  progress.style.width = "100%";
});
btnback5.addEventListener("click", (e) => {
  s6.style.left = "1000px";
  s5.style.left = "16px";
  progress.style.width = "300px";
});
const addTextArea = (e, placeholder, name) => {
  e.preventDefault();
  let newNode = document.createElement("textarea");
  newNode.setAttribute("name", name);
  newNode.setAttribute("placeholder", placeholder);
  let btnCerobject = this.closest("div").querySelector("button");
  this.closest("div").insertBefore(newNode, btnCerobject);
};

const iterableData = function (itrData) {
  return itrData.map((valData) => `<li>${valData}</li>`).join("");
};

// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headerEl = document.querySelector(".header");

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });

///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
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
