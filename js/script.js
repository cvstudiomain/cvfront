import * as model from "./model.js";
import * as temMarckup from "./rAndcGenerator.js";
import * as pagination from "./pagination.js";
// all resumes and cover letter templates
import * as arct from "./alltemplates.js";
import * as general from "./general.js";
import * as Forms from "./myForms.js";
import * as Loader from "./loader.js"
// console.log(Loader.loader())
general.smoothScroll("smoothmove");

// console.log(arct)
const containerBody = document.querySelector("body");
let loaderContainer ="" 

const userAreaContents = document.querySelector(".content-columns");
const paginationBox = document.querySelectorAll(".paginationBox");
let duty = "";
let sectionName = document.querySelector(".user-section-name");

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

const cvFormContainer = document.querySelector(".cv-form-container");
const coverLetterContainer = document.querySelector(".cover-letter-container");
let uploaded_image = "";
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".master-body");
const preLoade = function (start = true) {
  if (start) {
    containerBody.classList.add("body-on-load");
    userDashBoard.classList.add("hideMe")
    return loaderContainer.classList.remove("hideMe");
  }
  userDashBoard.classList.remove("hideMe")
  containerBody.classList.remove("body-on-load");

  loaderContainer.classList.add("hideMe");
};
const init = async function () {
  try {
    // return console.log(Loader)
    containerBody.insertAdjacentHTML("afterbegin",Loader.loader(true))
    loaderContainer=document.querySelector(".loaderContainer");
    preLoade(true);
    let userData = JSON.parse(localStorage.getItem("user"));
    // console.log(userData)
    if (!userData) window.location = "index.html";
    //  console.log(userData)

    if (userData.isGonGon) {
      window.location = "admin-area.html";

      return;
    }
    model.state.user.accesstoken = userData.accesstoken;
    model.state.user.email = userData.email;
    model.state.user.siteUserName = userData.siteUserName;
    model.state.user.userid = userData.userid;
    model.state.user.editor=userData.editor;
    // return console.log(model.state.user.editor)
    if(model.state.user.editor===true) return window.location="blog/editor.html"
    cvFormContainer.insertAdjacentHTML(
      "afterbegin",
      Forms.resumeformcontainer(false, null)
    );
    coverLetterContainer.insertAdjacentHTML(
      "afterbegin",
      Forms.leterformcontainer(false, null)
    );

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

    preLoade(false);
  } catch (error) {
    if (error) preLoade(true);
  }
};
init();


document.querySelector(".nav-tabs").addEventListener("click", function (e) {
  if (!e.target.classList.contains("tab")) return;

  this.querySelectorAll(".tab").forEach((t) => t.classList.remove("active1"));
  e.target.classList.add("active1");
  // return console.log(document.querySelector(`.${model.state.section}`));
  let filterString = "";
  let filteredDater = "";
  if (e.target.classList.contains("tab-cl")) filterString = "letter";
  if (e.target.classList.contains("tab-resumes")) filterString = "resume";
  if (model.state.section === "myResume") {
    filteredPager(filterString, model.state.user.myResumes, myResume, pbox1);
  }
  if (model.state.section === "templates") {
    filteredPager(filterString, arct.allTemplates, templates, pbox2);
  }
  if (model.state.section === "myTemplates") {
    filteredPager(
      filterString,
      model.state.user.userTotalTemplates,
      myTemplates,
      pbox3
    );
  }
});
const filteredPager = function (theString, theData, theBox, buttonsBox) {
  theBox.innerHTML = "";
  buttonsBox.innerHTML = "";

  let newData = [];
  theData.forEach((data) => {
    let doc = new DOMParser().parseFromString(data, "text/xml");
    if (doc.firstChild.classList.contains(theString)) newData.push(data);
  });
  // return console.log(newData)

  theString !== ""
    ? identifyBox(theBox, newData, buttonsBox)
    : identifyBox(theBox, theData, buttonsBox);
};

btnNavEl.addEventListener("click", function () {
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

  let btn = e.target;
  if (!btn.classList.contains("viewerBtn")) return;
  if (btn.classList.contains("editCv")) {
    let templateType = model.state.user.viewersDataIdentifier.templateType;
    model.state.user.contentEdit = true;
    let userCurrentData = model.state.user.userCurrentData;
     userCurrentData.experiences.map(duty=>{
       duty.experience.map(val=>console.log(val))
     })
    if (templateType === "resume") {
     
      cvFormContainer.classList.remove("hiddenClass");
      cvFormContainer.innerHTML = "";
      cvFormContainer.insertAdjacentHTML(
        "afterbegin",
        Forms.resumeformcontainer(true, userCurrentData)
      );
    } else {
      coverLetterContainer.classList.remove("hiddenClass");
      coverLetterContainer.innerHTML = "";
      coverLetterContainer.insertAdjacentHTML(
        "afterbegin",
        Forms.leterformcontainer(true, userCurrentData)
      );
    }

    htmlParent.style.fontSize = model.state.fontSize;

    return this.classList.add("hiddenClass");
  }
  if (btn.classList.contains("deleteCv")) {
    let { templateType, id } = model.state.user.viewersDataIdentifier;
    if (confirm(`Are you sure you want to delete this ${templateType}`) == true)
      return deleteCvOrLetter(templateType, id);
    return;
  }
  // userDashBoard.classList.remove("hiddenClass");
  if (btn.closest("button").classList.contains("btnCloseView")) {
    myResume.classList.remove("hiddenClass");
    hidePaginations(pbox1);
    htmlParent.style.fontSize = model.state.fontSize;

    return resumesViewer.classList.add("hiddenClass");
  }
  // return console.log(btn)
  if (btn.classList.contains("downloadCv")) {
    htmlParent.style.fontSize = "16px";
    let container = e.target.closest(".resumesViewer");
    let myCv = container.querySelector(".template");
    let name = myCv.classList.contains("letter") ? "letter.pdf" : "cv.pdf";

    // myCv.style.minHeight="100%";
    // myCv.style.width="100%";
    // ".objective",
    // ".content-wrapper",
    // ".school-and-address",

    resumesViewer.classList.add("hiddenClass");
    // myResume.innerHTML = `<div class="loader"></div>`;
    // myResume.classList.remove("hiddenClass");
    var opt = {
      pagebreak: {
        avoid: ["shouldNotBreak", "h3", "p", "li"],
      },

      filename: name,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        logging: true,
        letterRendering: 1,
        useCORS: true,
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    resumesViewer.classList.add("hiddenClass");
    await html2pdf().from(myCv).set(opt).save();
    myCv.style.minHeight = "70.157rem";
    htmlParent.style.fontSize = model.state.fontSize;

    return location.reload();
  }
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
    let targetElement = e.target.closest(".template");
    myResume.classList.add("hiddenClass");
    let id = targetElement.getAttribute("id");
    let templateItentifier = {
      id: id,
      templateType: targetElement.classList.contains("resume")
        ? "resume"
        : "letter",
    };
    model.state.user.viewersDataIdentifier = templateItentifier;
    let marckupData = "";
    model.state.resumes.forEach((resume) =>
      resume._id === id ? (marckupData = resume) : ""
    );
    model.state.user.userCurrentData = marckupData;
    hidePaginations(null);
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
  
  <button type="button" class="btn downloadCv viewerBtn"><i class="fa-solid fa-download" style="margin-right:8px"></i>Download</button>
  
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
const closeViewer = () => {
  [cvFormContainer, coverLetterContainer].forEach((box) =>
    !box.classList.contains("hiddenClass")
      ? box.classList.add("hiddenClass")
      : ""
  );
  if (!resumesViewer.classList.contains("hiddenClass")) {
    // console.log("true")
    htmlParent.style.fontSize = model.state.fontSize;
    resumesViewer.classList.add("hiddenClass");
  }
};
document.querySelector(".create-new").addEventListener("click", function () {
  closeViewer();
  allUserContentChilds.forEach((child) => {
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
    model.state.user.contentEdit === true
      ? myResume.classList.remove("hiddenClass")
      : myTemplates.classList.remove("hiddenClass");
    model.state.user.userCurrentData = {};
    model.state.user.contentEdit = false;
    hidePaginations(pbox3);
    coverLetterContainer.classList.add("hiddenClass");
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
  closeViewer();
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
    // console.log(model.state.user.userTotalTemplates);
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
const onChangeImage=function(e){
    e.target.addEventListener("change", async function (e) {
      try {
        const file = e.target.files[0];
        // console.log(file,"hello")
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
}
coverLetterContainer.addEventListener("click", async function (e) {
  // return console.log()
  if (e.target.id === "image_input2" || e.target.it === "image-input-label") {
      onChangeImage(e)
  }
  if (e.target.closest(".btnCloseView")) {
    hidePaginations(pbox1);
    closeViewer();
    htmlParent.style.fontSize = model.state.fontSize;
    return myResume.classList.remove("hiddenClass");
  }
  let btnSave = e.target;
  if (!btnSave.classList.contains("btn-save-letter")) return;
  e.target.innerText = "Please wait...";
  let formData = Object.fromEntries(...[new FormData(coverLetterContainer)]);
  let onEdit = model.state.user.contentEdit;

  let theletter = document.querySelector("#theletter").innerText;
  let coverLetter = {
    ...formData,
    theletter: theletter,
    _id: model.state.user.userCurrentData._id,
    template: model.state.templateToUse,
    images: {},
    onEdit: onEdit,
    userid: model.state.user.userid,
  };
  model.state.user.coverLetter = coverLetter;

  // console.log(model.state.user.coverLetter)
  getCvOrLetter(model.state.user.coverLetter);
  btnSave.innerText = "Done";
  model.state.templateToUse.type = "";
  model.state.templateToUse.template = "";
});

const getCvOrLetter = async function (data) {

try {
  
  if(model.state.user.contentEdit){
    data.template=model.state.user.userCurrentData.template;
    data.onEdit=model.state.user.contentEdit;
    let userPassport=model.state.user.userCurrentData.images;
    if(userPassport) data.images=userPassport;
    data._id=model.state.user.userCurrentData._id
   }

  if (model.state.user.file) {
    let formData = new FormData();
    let token = model.state.user.token;
    formData.append("file", model.state.user.file);
    let res = await axios.post("https://app.cvstudio.io/upload/", {
      imageType: model.state.user.file.type,
    });
    let url = res.data.uploadUrl;
    // console.log(url)
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: model.state.user.file,
    });
    let imgUrl = { url: url.split("?")[0] };
    // return console.log(imgUrl);

    // console.log(res.data.uploadUrl,url,imgUrl)

    data.images = imgUrl;
  }


  // if (data.onEdit && model.state.user.userCurrentData.images)
  // data.images = model.state.user.userCurrentData.images;
   
  // return console.log(data)
  const res = await axios.post("https://app.cvstudio.io/resume/create",{
    ...data,
  });
  if (res.data) return location.reload();
  return;
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
  coverLetterContainer.classList.add("hiddenClass");
  userDashBoard.classList.remove("hiddenClass");
  s6.classList.add("hiddenClass");
  s1.style.left = "16px";
  // progress.style.width = "60px";
  clearInput();

} catch (error) {
  
}
};
const clearInput = function () {
  document
    .querySelectorAll(".inputTypeText")
    .forEach((elem) => (elem.value = ""));
  document.querySelectorAll("textarea").forEach((elem) => (elem.value = ""));
};
const saveResume= async (e)=> {
  try {
   
    model.state.user.inputData = {
      userid: model.state.user.userid,
      template: model.state.templateToUse,
      ...model.state.user.persData,
      ...model.state.user.socLinks,
      skills:model.state.user.skills,
      certifications:model.state.user.certifications,
      interest: model.state.user.hobies,
      educations: model.state.user.educations,
      experiences: model.state.user.experiences,
      languages:model.state.user.languages,
      reffrences: model.state.user.reffrences,
      images: {},
    };


 

// return console.log(model.state.user.inputData)
    await getCvOrLetter(model.state.user.inputData);
    // this.innerText = "Save";
    // location.reload();
  } catch (error) {
    console.log(error);
  }
}

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
  // console.log(pBox)
  pBox.insertAdjacentHTML(
    "beforeend",
    pagination.paginationMarckup(content, true)
  );
};

const deleteCvOrLetter = async function (templateType, id) {
  let string = "";
  string =
    templateType === "letter"
      ? `/resume/deletel-letter/:${id}`
      : `/resume/delete-cv/:${id}`;
  // return console.log(string)
  let res = await axios.post(`https://app.cvstudio.io${string}`);
  if (res.data.msg) location.reload();
};
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
  if (contaner.classList.contains("templates") && btnToUse)
    btnToUse.innerText = "Select this";
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
  myTemplates.innerHTML = "";
  model.state.user.userTotalTemplates = getTheTemplates(model.state.templates);
  identifyBox(myTemplates, model.state.user.userTotalTemplates, pbox3);
  noTemplateInfor.classList.add("hiddenClass");
  templates.classList.add("hiddenClass");
  sectionName.innerText = "My Templates";
  document.querySelector("#templates").classList.remove("active");
  document.querySelector("#myTemplates").classList.add("active");
});
document.querySelector(".get-one").addEventListener("click", function () {
  closeViewer();
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
  model.state.user.contentEdit = false;
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
      myTemplates.classList.add("hiddenClass");
      hidePaginations(null);
      if (model.state.templateToUse.type === "resume") {
        cvFormContainer.classList.remove("hiddenClass");
        cvFormContainer.innerHTML = "";
        cvFormContainer.insertAdjacentHTML(
          "afterbegin",
          Forms.resumeformcontainer(false, null)
        );
      }
      if (model.state.templateToUse.type === "letter") {
        coverLetterContainer.classList.remove("hiddenClass");
        coverLetterContainer.innerHTML = "";
        coverLetterContainer.insertAdjacentHTML(
          "afterbegin",
          Forms.leterformcontainer(false, null)
        );
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
// let image_input2 = document.querySelector("#image_input2");
// let image_input = document.querySelector("#image_input");

// [image_input, image_input2].forEach(function (imageIn) {
//   imageIn.addEventListener("change", async function (e) {
//     e.preventDefault();

//     try {
//       const file = e.target.files[0];
//       console.log(file,"hello")
//       if (!file) return alert("File not exist.");
//       if (file.size > 1024 * 1024) return alert("Size too large");
//       if (
//         file.type !== "image/jpg" &&
//         file.type !== "image/png" &&
//         file.type !== "image/jpeg"
//       )
//         return alert("File type not supported");

//       model.state.user.file = file;
//       let reader = new FileReader();
//       reader.onloadend = function () {
//         document
//           .querySelectorAll(".display_image2")
//           .forEach(
//             (display) =>
//               (display.style.backgroundImage = `url(${reader.result})`)
//           );
//       };
//       if (file) {
//         reader.readAsDataURL(file);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   });
// });

cvFormContainer.addEventListener("click", async function (e) {
  // let progress = this.querySelector("#progress");
  let s1 = this.querySelector("#s1");
  let s2 = this.querySelector("#s2");
  let s3 = this.querySelector("#s3");
  let s4 = this.querySelector("#s4");
  let s5 = this.querySelector("#s5");
  let s6 = this.querySelector("#s6");
  if (e.target.id === "image_input" || e.target.it === "image-input-label") {
    onChangeImage(e)
}
  if (e.target.closest(".btnCloseView")) {
    hidePaginations(pbox1);
    closeViewer();
    htmlParent.style.fontSize = model.state.fontSize;
    return myResume.classList.remove("hiddenClass");
  }
  if (e.target.id === "next1") {
    model.state.user.persData =Object.fromEntries([...new FormData(e.target.closest("form"))]);
  
    s1.classList.add("hiddenClass");
    s2.classList.remove("hiddenClass");
    // progress.style.width = "120px";
  }

  if (e.target.id === "back1") {
    s2.classList.add("hiddenClass");
    s1.classList.remove("hiddenClass");
    // progress.style.width = "60px";
  }
  if (e.target.id === "next2") {
   let thisContainer=e.target.closest(".form-style");
   let allEducations=[];
   let notProEdu=[]
   thisContainer.querySelectorAll(".single-edu").forEach(item=>{
     if(!item.classList.contains("hiddenClass")) notProEdu.push(item)
    
    })
   notProEdu.forEach(item=>{
    let eduEntries=[... new FormData(item)].filter(ent=>ent[1]!=="")
    if(eduEntries.length!==0) return allEducations.push(Object.fromEntries(eduEntries))
    
    })
    // console.log(allEducations)
  //  .filter(edu=>!edu.classList.contains("hiddenClass"));
   let allCertifications=[];
    let notProCert=[];
   thisContainer.querySelectorAll(".single-cert").forEach(cert=>{
     if(!cert.classList.contains("hiddenClass")) notProCert.push(cert)
   })
   notProCert.forEach(cert=>{
     
    let item=cert.querySelector(".certInput").value;
    if(item!=="")allCertifications.push(item);
  })
  //  console.log(allEducations,allCertifications)
  model.state.user.educations=allEducations;
  model.state.user.certifications=allCertifications  
  
  s2.classList.add("hiddenClass");
    s3.classList.remove("hiddenClass");
    // progress.style.width = "180px";
  }
  if (e.target.id === "back2") {
    s3.classList.add("hiddenClass");
    s2.classList.remove("hiddenClass");
    // progress.style.width = "120px";
  }
  if (e.target.id === "next3") {
    let allExperiences=[];
    let expEntries=[]
    e.target.closest(".form-style").querySelectorAll(".single-experiences").forEach(expItem=>{
      if(expItem.classList.contains("hiddenClass")) return
      expEntries.push([... new FormData(expItem)]);
    });
    expEntries.forEach(item=>{
      let duties=[];
      let objectData=[];
      item.forEach(duty=>{
        if(duty[0]==="experience"&&duty[1]!=="")duties.push(duty[1])
        if(duty[0]!=="experience"&&duty[1]!=="")objectData.push(duty)
        
      })
      let expObject=null;
      if(objectData.length!==0){
       
        expObject=(Object.fromEntries(objectData));
        
      }
        if(duties.length!==0) expObject.experience=duties;
        if(expObject!==null) allExperiences.push(expObject)
    })
    // console.log(allExperiences)
   model.state.user.experiences=allExperiences;
    
   s3.classList.add("hiddenClass");
    s4.classList.remove("hiddenClass");
    // progress.style.width = "216px";
  }
  if (e.target.id === "back3") {
   
    s4.classList.add("hiddenClass");
    s3.classList.remove("hiddenClass");
    // progress.style.width = "180px";
  }
  if (e.target.id === "next4") {
    let allSocialLinks=  Object.fromEntries([...new FormData(e.target.closest("form"))]);
model.state.user.socLinks=allSocialLinks;

    // console.log(allSocialLinks) 
    
    s4.classList.add("hiddenClass");
    s5.classList.remove("hiddenClass");
    // progress.style.width = "300px";
  }
  if (e.target.id === "back4") {
    s5.classList.add("hiddenClass");
    s4.classList.remove("hiddenClass");
    // progress.style.width = "216px";
  }
  if (e.target.id === "next5") {
    e.target.innerText="Please wait..."
    let allSkills=[];
    let thisContainer=e.target.closest(".form-style");
    thisContainer.querySelectorAll(".skillInput").forEach(skill=>{
      if(skill.value!=="")allSkills.push(skill.value)
    })
    let allInterest=[];
    thisContainer.querySelectorAll(".single-interest").forEach(intr=>{
    if(intr.value!=="") allInterest.push(intr.value)
    });
    let allReff=[];
    thisContainer.querySelectorAll(".single-reff").forEach(ref=>{
      if(ref.classList.contains("hiddenClass")) return;
      let refEntries=[... new FormData(ref)];
      let refObjectData=refEntries.filter(item=>item[1]!=="");
      
       if(refObjectData.length!==0)allReff.push(Object.fromEntries(refObjectData))
    });
    let profile=thisContainer.querySelector("#profile").value;
    let allLanguages=[]
    thisContainer.querySelectorAll(".single-lang").forEach(item=>{
      if(item.classList.contains("hiddenClass")) return
      let langObject={language:"",level:""};
       let inputData=Object.fromEntries([...new FormData(item)])
         langObject.language=inputData.language;
         langObject.level=inputData.langLevel;
        if(langObject.language!=="") allLanguages.push(langObject)
    }
      )
      model.state.user.skills=allSkills;
      model.state.user.hobies=allInterest;
      model.state.user.reffrences=allReff;
      model.state.user.languages=allLanguages;
      model.state.user.persData.profile=profile;
  // console.log(model.state.user.persData)
     return saveResume()
    // odel.state.user.socLinks = [...new FormData(e.target.closest("form"))];
    
    // progress.style.width = "100%";
  }
  if (e.target.id === "back5") {
    s6.classList.add("hiddenClass");
    s5.classList.remove("hiddenClass");
    // progress.style.width = "300px";
  }

  let btn = e.target;

  
  if (btn.type !== "button")  return; //console.log("not added");

    
    if (btn.classList.contains("btnAddLanguage")) {
    document.querySelector(".all-languages").insertAdjacentHTML("beforeend",Forms.anotherLang());
    }
    if (btn.classList.contains("btnAddEducation")) {
      let allEdu=document.querySelector(".all-edu")
      let newEduForm=document.querySelector(".hiddenEduForm");
      if(newEduForm.classList.contains("hiddenClass"))return newEduForm.classList.remove("hiddenClass");
      return allEdu.insertAdjacentHTML("beforeend",Forms.anotherEdu())
      
    }
    
    if (btn.classList.contains("btnAddCertificaktion")) {
    let allCert=document.querySelector(".all-cert")
    let hiddenCert=document.querySelector(".hiddenCert")
    if(hiddenCert.classList.contains("hiddenClass"))return hiddenCert.classList.remove("hiddenClass");
    return allCert.insertAdjacentHTML("beforeend",Forms.anotherCertification())
    }
   
    if (btn.classList.contains("btnWorkExperience")) {
    let allExperiences=document.querySelector(".all-experiences");
    // console.log(allExperiences)
    // let hiddenExperiences=allExperiences.querySelector(".hiddenExperiences");
    // if(hiddenExperiences.classList.contains("hiddenClass"))return hiddenExperiences.remove("hiddenClass");
    return allExperiences.insertAdjacentHTML("beforeend",Forms.anotherExperiences());
    }
    if (btn.classList.contains("btnDuty")) {
      
      let allDuties=btn.closest(".exp-container").querySelector(".all-exp");
      // let hiddenDuty=btn.closest(".exp-container").querySelector(".hiddenExperience");
      // console.log(allDuties,hiddenDuty)
      // if(hiddenDuty.classList.contains("hiddenClass"))return hiddenDuty.classList.remove("hiddenClass");
      return allDuties.insertAdjacentHTML("beforeend",Forms.anotherXp());
      }
    if (btn.classList.contains("addskill")) {
    document.querySelector(".all-skills").insertAdjacentHTML("beforeend",Forms.anotherSkill());
    }
    if (btn.classList.contains("addinterest")) {
      document.querySelector(".all-interest").insertAdjacentHTML("beforeend",Forms.anotherInterest())
    
    }
    if (btn.classList.contains("addrefrence")) {
    document.querySelector(".all-reff").insertAdjacentHTML("beforeend",Forms.anotherReff())
    }
});
const updateExperience = function (data) {
  data = data.filter((val) => val[1] !== "");

  if (duty.value) {
    // return console.log(true)
    model.state.user.jobDuty.push(duty.value);
    model.state.user.jobDutyAdded = true;
  }
  let experienceInputs = document.querySelectorAll(".exInput");
  experienceInputs.forEach((val) => (val.value = ""));
  experienceInputs[0].focus();

  if (data.length !== 0) {
    let expObject = Object.fromEntries(data);
    expObject.experience = model.state.user.jobDuty;

    model.state.user.experiences.push(expObject);
  }

  model.state.user.jobDuty = [];
  model.state.user.jobDutyAdded = false;
};
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
