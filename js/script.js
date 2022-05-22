const state = {
  templateToUse: { type: "", template: "" },
  section: "myResume",
  templates: [],
  resumes: [],
  templateToBeDownload: [],

  searchResult: "",
  user: {
    initials: "",
    myTemplates: [],
    myResumes: [],
    siteUserName: "",
    images: {},
    inputData: [],
    coverLetter: {},
    persData1: "",
    persData2: "",
    socLinks: "",
    eduData: [],
    expeData: [],
    summeryData: [],
    educations: [],
    certifications: [],
    experiences: [],
    skills: [],
    hobies: [],
    reffrences: [],
    template: "",
    file: "",
    token: "",
    email: "",
    password: "",
    userid: "",
  },
  allData: "",
  page: 1,
  resume: {},
  cloud_image: {},
};

const btnNext1 = document.querySelector("#next1");
const btnNext2 = document.querySelector("#next2");
const btnNext3 = document.querySelector("#next3");
const btnNext4 = document.querySelector("#next4");
const btnNext5 = document.querySelector("#next5");
const btnNext6 = document.querySelector("#next6");

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
const noResumeInfor = document.querySelector(".no-resume-infor");
let sectionName = document.querySelector(".user-section-name");
const progress = document.querySelector("#progress");
const templates = document.querySelector(".templates");
const htmlParent = document.querySelector("html");
const btnLogin = document.querySelector(".btn-login");
const myResume = document.querySelector(".myResume");
const resumesViewer = document.querySelector(".resumesViewer");
const myTemplates = document.querySelector(".myTemplates");
const noTemplateInor = document.querySelector(".no-template-infor-container");
const toRegister = document.querySelector(".to-register");
const toLogin = document.querySelector(".to-login");
const btnSignup = document.querySelector(".btn-signup");
const userDashBoard = document.querySelector(".userDashBoard");
const formBtn = document.querySelector(".generateCv");
const btnSaveLetter = document.querySelector(".btn-save-letter");
const cvDataForm = document.querySelector(".cv-form");
const cvFormContainer = document.querySelector(".cv-form-container");

let userlist = document.querySelector(".user-list");
const message2 = document.querySelector(".message1");
let paginationBox = document.querySelector(".pagination");
let userResums = document.querySelector(".user-res-cl-container");
let templateHeader = document.querySelector(".template-header");
let image_input2 = document.querySelector("#image_input2");
let image_input = document.querySelector("#image_input");
let uploaded_image = "";
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
document.querySelector(".nav-tabs").addEventListener("click", function (e) {
  if (!e.target.classList.contains("tab")) return;

  this.querySelectorAll(".tab").forEach((t) => t.classList.remove("active1"));
  e.target.classList.add("active1");
  // return console.log(document.querySelector(`.${state.section}`));

  let alltemp = document
    .querySelector(`.${state.section}`)
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
const objectOutOfArray = function (data) {
  return Object.fromEntries(...[data]);
};
// document.getElementById("pdf-content").style.display = "none";
const allUserSiteButtons = document.querySelectorAll(".user-site-button");
const allUserContentChilds = document.querySelectorAll(".user-content-child");
resumesViewer.addEventListener("click", async function (e) {
  if (!e.target.classList.contains("viewerBtn")) return;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  // userDashBoard.classList.remove("hiddenClass");
  if (e.target.closest("button").classList.contains("btnCloseView")){
    userDashBoard.classList.remove('hiddenClass')
    userDashBoard.classList.remove('hiddenClass')
    return resumesViewer.classList.remove("showIt");
  }
  htmlParent.style.fontSize = "16px";
  let container = e.target.closest(".resumesViewer");
  let myCv = container.querySelector(".template");

  resumesViewer.classList.remove("showIt");
  myResume.innerHTML = `<div class="loader"></div>`;
  userDashBoard.classList.remove('hiddenClass')
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

    filename: "cv.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };
  resumesViewer.classList.remove("showIt");
  await html2pdf().from(myCv).set(opt).save();
  htmlParent.style.fontSize = "6px";
  setTimeout(() => {
    myResume.innerHTML = state.user.myResumes;
  }, 3000);
});
myResume.addEventListener("click", function (e) {
  // console.log(e.target.closest('.template'))

  if (
    !e.target.classList.contains("create-new") &&
    !e.target.closest(".template")
  )
    return;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  if (e.target.closest(".template")) {
    userDashBoard.classList.add('hiddenClass')
    let id = e.target.closest(".template").getAttribute("id");
    let marckupData = "";
    state.resumes.forEach((resume) =>
      resume._id === id ? (marckupData = resume) : ""
    );

    let marckup = createPdfMarckup(marckupData);

    resumesViewer.innerHTML = "";
    resumesViewer.insertAdjacentHTML(
      "afterbegin",
      `${marckup}<button type="button" class="btnCloseView "> <i
    class="fa fa-times icon-mobile-nav viewerBtn"
    
    aria-hidden="true"
  ></i></button>
  <button type="button" class="btn downloadCv viewerBtn">Download</button>
 `
    );
    resumesViewer.classList.add("showIt");

    return;
  }

  allUserContentChilds.forEach((child) => {
    document.querySelector('.myResumeInfor').classList.add('hiddenClass')

    if (!child.classList.contains("hiddenClass"))
      child.classList.add("hiddenClass");
  });
  allUserSiteButtons.forEach((btn) => {
    if (btn.classList.contains("active")) btn.classList.remove("active");
  });
  state.section = "myTemplates";
  sectionName.innerText = "My Templates";
  myTemplates.classList.remove("hiddenClass");

  document
    .querySelector(`#${myTemplates.classList[0]}`)
    .classList.add("active");
});

document.querySelectorAll(".closeForm").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    cvFormContainer.classList.remove("showIt");
    userDashBoard.classList.remove('hiddenClass')
    document
      .querySelector(".cover-letter-container")
      .classList.remove("showIt");
  });
});

document.querySelector(".site-menu").addEventListener("click", function (e) {
  e.preventDefault();
  let buttonId = e.target.closest("li").getAttribute("id");
  if (!buttonId) return;
  document.querySelector('.myResumeInfor').classList.add('hiddenClass')

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
    state.section = "myResume";
    document.querySelector('.myResumeInfor').classList.remove('hiddenClass')
    document.querySelector(`.${buttonId}`).classList.remove("hiddenClass");
    targetElement.classList.add("active");
    sectionName.innerText = sectionText;
    if (state.resumes.length !== 0) {
      let marckup = state.resumes.map((resume) => createPdfMarckup(resume));
      generateMarckup(marckup);
    }
    templates.classList.add("hiddenClass");
  }

  if (buttonId === "myProfile") {
    targetElement.classList.add("active");
    sectionName.innerText = sectionText;
    document.querySelector(`.${buttonId}`).classList.remove("hiddenClass");
  }
  if (buttonId === "myTemplates") {
    state.section = "myTemplates";
    targetElement.classList.add("active");
    sectionName.innerText = sectionText;
    document.querySelector(`.${buttonId}`).classList.remove("hiddenClass");
  }
  if (buttonId === "templates") {
    state.section = "templates";
    targetElement.classList.add("active");
    sectionName.innerText = sectionText;
    document.querySelector(`.${buttonId}`).classList.remove("hiddenClass");
  }
  if (buttonId === "mySite") {
    targetElement.classList.add("active");
    sectionName.innerText = sectionText;
    document.querySelector(`.${buttonId}`).classList.remove("hiddenClass");
  }
});
btnSaveLetter.addEventListener("click", async function (e) {
  this.innerText="please wait.."
  let formData = Object.fromEntries(
    ...[new FormData(document.querySelector(".cover-letter-container"))]
  );
  let theletter = document.querySelector("#theletter").innerText;
  let coverLetter = {
    ...formData,
    theletter: theletter,
    template: state.templateToUse,
    images: {},
    userid: state.user.userid,
  };
  state.user.coverLetter = coverLetter;
  // console.log(state.user.coverLetter)
  await getCvOrLetter(state.user.coverLetter);
  this.innerText="Done"
  state.templateToUse.type = "";
  state.templateToUse.template = "";
});

const getCvOrLetter = async function (data) {
  // console.log(data.template);
  if (state.user.file) {
    let formData = new FormData();
    let token = state.user.token;
    formData.append("file", state.user.file);
  
    let res = await axios.post("https://app.cvstudio.io/upload/", formData, {
      headers: {
       
        "Accept":"application/json, text/plain, /","Content-Type": "multipart/form-data",
        Authorization: token,
      },
    });
    return console.log(res)
    state.templateToUse.type === "resume"
      ? (state.user.inputData.images = res.data)
      : (state.user.coverLetter.images = res.data);
  }
  const res = await axios.post("https://app.cvstudio.io/resume/create", {
    ...data,
  });

  state.resume = res.data.data;
  state.resumes.push(state.resume);
  state.user.myResumes.push(createPdfMarckup(state.resume));
  noResumeInfor.classList.add("hiddenClass");
  myTemplates.classList.add("hiddenClass");
  document.querySelector("#myTemplates").classList.remove("active");

  myResume.classList.remove("hiddenClass");
  document.querySelector("#myResume").classList.add("active");
  myResume.innerHTML = "";
  state.resumes.forEach((resume) => {
    myResume.insertAdjacentHTML("afterbegin", createPdfMarckup(resume));
  });
  cvFormContainer.classList.remove("showIt");
  document.querySelector(".cover-letter-container").classList.remove("showIt");
userDashBoard.classList.remove('hiddenClass')
s6.style.left = "-450px";
  s1.style.left = "40px";
  progress.style.width = "60px";
  clearInput();
};
const clearInput=function(){
  document.querySelectorAll('.inputTypeText').forEach(elem=>elem.value="")
  document.querySelectorAll('textarea').forEach(elem=>elem.value="")
}
formBtn.addEventListener("click", async function (e) {
  try {
    e.preventDefault();
    this.innerText="Please wait..";
    [...new FormData(e.target.closest("form"))].filter(
      (val) => val[1] !== "" && state.user.summeryData.push(val)
    );

    let eduCol = [];
    state.user.eduData &&
      state.user.eduData.forEach(
        (val) => val[0] !== "certification" && val[1] !== "" && eduCol.push(val)
      );
    eduCol.length !== 0 && state.user.educations.push(eduCol);
    let expCol = [];
    state.user.expeData &&
      state.user.expeData.forEach((val) => val[1] !== "" && expCol.push(val));
    expCol.length !== 0 && state.user.experiences.push(expCol);
    state.eduData &&
      state.user.eduData.forEach((val) => {
        if (val[0] === "certification" && val[1] !== "")
          state.user.certifications.push(val);
      });
    state.user.summeryData &&
      state.user.summeryData.forEach((val) => {
        if (val[0] === "skill" && val[1] !== "" && val.length !== 0)
          state.user.skills.push(val);
      });
    state.user.summeryData &&
      state.user.summeryData.forEach((val) => {
        if (val[0] === "interest" && val[1] !== "" && val.length !== 0)
          state.user.hobies.push(val);
      });
    let refCol = [];
    state.user.summeryData &&
      state.user.summeryData.forEach(
        (val) =>
          val[0] !== "interest" &&
          val[0] !== "skill" &&
          val[0] !== "profile" &&
          val[1] !== "" &&
          refCol.push(val)
      );
    refCol.length !== 0 && state.user.reffrences.push(refCol);

    state.user.inputData = {
      userid: state.user.userid,
      template: state.templateToUse,
      ...objectOutOfArray(state.user.persData1),
      ...objectOutOfArray(state.user.persData2),
      ...objectOutOfArray(state.user.socLinks),
      skills: [
        ...state.user.skills
          .filter((val) => val[1] !== "")
          .map((val) => val[1]),
      ],
      certifications: [
        ...state.user.certifications
          .filter((val) => val[1] !== "")
          .map((val) => val[1]),
      ],
      interest: [
        ...state.user.hobies
          .filter((val) => val[1] !== "")
          .map((val) => val[1]),
      ],
      profile:
        state.user.summeryData &&
        state.user.summeryData
          .filter((val) => val[0] === "profile")
          .map((val) => val[1])
          .toString(),

      educations: state.user.educations.map((val) => objectOutOfArray(val)),
      experiences: state.user.experiences.map((val) => objectOutOfArray(val)),
      reffrences: state.user.reffrences.map((val) => objectOutOfArray(val)),
      images: {},
    };

    await getCvOrLetter(state.user.inputData);
    this.innerText="Generate Cv"
  } catch (error) {
    console.log(error);
  }
});

const generateMarckup = function (marckup) {
  myResume.innerHTML = "";
  myResume.insertAdjacentHTML("afterbegin", marckup);
};
document.querySelector(".log-out").addEventListener("click", (e) => {
  e.preventDefault();
  location.reload();
});
const deletUserAndResumes = async function (id) {
  let confirmAction = confirm("Are you sure to execute this action?");
  if (!confirmAction) return;
  const res = await axios.delete(`https://app.cvstudio.io/user/delete/:${id}`);
  renderUserData();
  
};
document.querySelector(".user-list").addEventListener("click", function (e) {
  const userInforRow = e.target.closest(".user-infor-row");

  if (!userInforRow) return;
  const id = userInforRow.getAttribute("id");

  if (e.target.classList.contains("btn-delete")) return deletUserAndResumes(id);
});
document
  .querySelector(".admin-nav-bar")
  .addEventListener("click", function (e) {
    if (!e.target.classList.contains("admin-nav-element")) return;

    let allSectionsInAdmin = document.querySelectorAll(".section-in-admin");
    allSectionsInAdmin.forEach((section) => {
      if (!section.classList.contains("hideMe"))
        section.classList.add("hideMe");
      document
        .querySelector(`.${e.target.getAttribute("id")}`)
        .classList.remove("hideMe");
    });
  });
const useInitial = function (data) {
  return data
    .split(" ")
    .map((val) => val[0])
    .join("")
    .toString()
    .toUpperCase();
};
const createPdfMarckup = function (data) {
  let marckup = "";

  if (data.template.type === "letter") {
    if (data.template.template === "letter1") {
      marckup = `
     <div class="template rl template1 letter cover cover1" id="${data._id}">
  
  <div class="user-name-and-profession">
    <h1 class="user-name">${data.fullName}</h1>
    <p class="profession">${data.profession}</p>
  </div>
  
  <div class="passportDateOfBirth">
    <div class="passport-box">
     ${
       data.images
         ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
            />`
         : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
     } 
    </div>
  </div>
  
  <div class="large-content">
    <div class="letterContainer" >
      <ul>
        <li>${data.receipient}</li>
        <li>${data.compenyname}</li>
        <li>${data.streetaddress}</li>
        <li>${data.city}, ${data.state}</li>
        <li>${new Date(data.date).toDateString()}</li>
      </ul>
      <br />
      <div contenteditable="false" id="letter">
        ${data.theletter.replaceAll("\n", "<br />")}
      </div>
    </div>
  </div>
 
  
  <div class="tiny-content">
    <div class="contact-information informationContainer">
      <h3 class="inforHeader">Contact information</h3>
      <div class="content-wrapper">
        <div class="information">
          <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="logo"
      /></p>
          <p class="inforVal">${data.email}</p>
        </div>
  
        <div class="information">
           <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>
       

        <div class="information">
           <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
          <p class="inforVal">${data.address}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  `;
    }
    if (data.template.template === "letter2") {
      marckup = `
  <div class="template rl template2 letter cover cover2" id="${data._id}">
  
  <div class="user-name-and-profession">
    <h1 class="user-name">${data.fullName}</h1>
    <p class="profession">${data.profession}</p>
  </div>
  <div class="tiny-content">
    <div class="passportDateOfBirth">
      <div class="passport-box">
       ${
         data.images
           ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
            />`
           : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
       } 
      </div>
    </div>
  
    <div class="contact-information informationContainer">
      <h3 class="inforHeader">Contact information</h3>
      <div class="content-wrapper">
        <div class="information">
          <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
          <p class="inforVal">${data.email}</p>
        </div>
  
        <div class="information">
           <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>
  
        <div class="information">
           <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
          <p class="inforVal">${data.address}</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="large-content">
    <div class="letterContainer" >
      <ul>
        <li>${data.receipient}</li>
        <li>${data.compenyname}</li>
        <li>${data.streetaddress}</li>
        <li>${data.city}, ${data.state}</li>
        <li>${new Date(data.date).toDateString()}</li>
      </ul>
      <br />
      <div contenteditable="false" id="letter">
        ${data.theletter.replaceAll("\n", "<br />")}
      </div>
    </div>
  </div>
  </div>`;
    }
    if (data.template.template === "letter3") {
      marckup = `<div class="template rl template3 letter cover cover3" id="${
        data._id
      }">
  
  
  <div class="large-profile">
    <div class="passportDateOfBirth">
      <div class="passport-box">
       ${
         data.images
           ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
            />`
           : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
       } 
      </div>
    </div>
  
    <div class="contact-information informationContainer">
      <div class="content-wrapper">
        <div class="information">
          <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
          <p class="inforVal">${data.email}</p>
        </div>
  
        <div class="information">
           <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>
  
        <div class="information">
           <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
          <p class="inforVal">${data.address}</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="user-name-and-profession">
    <p class="profession">${data.profession}</p>
    <h1 class="user-name">${data.fullName}</h1>
  </div>
  
  <div class="large-content">
    <div class="letterContainer" >
      <ul>
        <li>${data.receipient}</li>
        <li>${data.compenyname}</li>
        <li>${data.streetaddress}</li>
        <li>${data.city}, ${data.state}</li>
        <li>${new Date(data.date).toDateString()}</li>
      </ul>
      <br />
      <div contenteditable="false" id="letter">
        ${data.theletter.replaceAll("\n", "<br />")}
      </div>
    </div>
  </div>
  </div>
  `;
    }
    if (data.template.template === "letter4") {
      marckup = `<div class="template rl template4 letter cover cover4" id="${
        data._id
      }">
  
  <div class="contact-information informationContainer">
    <div class="contact-container">
      <div class="content-wrapper">
        <div class="information">
          <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
          <p class="inforVal">${data.email}</p>
        </div>
  
        <div class="information">
           <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>
  
        <div class="information">
           <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
          <p class="inforVal">${data.address}</p>
        </div>
        <p class="profession">${data.profession}</p>
      </div>
  
      <div class="content-wrapper secondContent">
        <div class="user-name-and-profession">
          <div class="passportDateOfBirth">
            <div class="passport-box">
            ${
              data.images
                ? `<img
              src="${data.images.url}"
              alt=""
              class="passport"
              />`
                : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
            } 
            </div>
          </div>
  
          <h1 class="user-name">${data.fullName}</h1>
        </div>
      </div>
    </div>
  </div>
  
  <div class="large-content">
    <div class="letterContainer" >
      <ul>
        <li>${data.receipient}</li>
        <li>${data.compenyname}</li>
        <li>${data.streetaddress}</li>
        <li>${data.city}, ${data.state}</li>
        <li>${new Date(data.date).toDateString()}</li>
      </ul>
      <br />
      <div contenteditable="false" id="letter">
        ${data.theletter.replaceAll("\n", "<br />")}
      </div>
    </div>
  </div>
  </div>
  `;
    }
    if (data.template.template === "letter5") {
      marckup = `<div class="template rl template5 letter cover cover5" id="${
        data._id
      }">
  
  
  <div class="tiny-content">
    <div class="passportDateOfBirth">
      <div class="passport-box">
       ${
         data.images
           ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
            />`
           : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
       } 
      </div>
    </div>
    <div class="contact-information informationContainer">
      <div class="content-wrapper">
        <div class="information">
          <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
          <p class="inforVal">${data.email}</p>
        </div>
  
        <div class="information">
           <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>
  
        <div class="information">
           <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
          <p class="inforVal">${data.address}</p>
        </div>
      </div>
    </div>
  </div>
  <ul>
  <li>${data.receipient}</li>
  <li>${data.compenyname}</li>
  <li>${data.streetaddress}</li>
  <li>${data.city}, ${data.state}</li>
  <li>${new Date(data.date).toDateString()}</li>
  </ul>
  <div class="large-content">
    <div class="letterContainer" >
      <div contenteditable="false" id="letter">
        ${data.theletter.replaceAll("\n", "<br />")}
      </div>
    </div>
  </div>
  </div>
  
  `;
    }
    if (data.template.template === "letter6") {
      marckup = `
  
  
  <div class="template rl template6 letter cover cover6" id="${data._id}">
  
  
  <div class="user-name-and-profession">
    <h1 class="user-name">${data.fullName}</h1>
    <p class="profession">${data.profession}</p>
  </div>
  <div class="large-content">
    <div class="letterContainer" >
      <ul>
        <li>${data.receipient}</li>
        <li>${data.compenyname}</li>
        <li>${data.streetaddress}</li>
        <li>${data.city}, ${data.state}</li>
        <li>${new Date(data.date).toDateString()}</li>
      </ul>
      <br />
      <div contenteditable="false" id="letter">
        ${data.theletter.replaceAll("\n", "<br />")}
      </div>
    </div>
  </div>
  
  <div class="tiny-content">
    <div class="contact-information informationContainer">
      <h3 class="inforHeader">Contact information</h3>
      <div class="content-wrapper">
        <div class="information">
          <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
          <p class="inforVal">${data.email}</p>
        </div>
  
        <div class="information">
           <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>
  
        <div class="information">
           <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
          <p class="inforVal">${data.address}</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="passportDateOfBirth">
    <div class="passport-box">
     ${
       data.images
         ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
            />`
         : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
     } 
    </div>
  </div>
  </div>
  `;
    }
  }

  if (data.template.type === "resume") {
    if (data.template.template === "resume1") {
      marckup = `<div id="${data._id}" class="template resume rl template1">
      <div class="user-name-and-profession">
      <h1 class="user-name">${data.fullName}</h1>
         <p class="profession">${data.profession}</p>
       </div>
  
         <div class="passportDateOfBirth">
          <div class="passport-box">
          ${
            data.images
              ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
            />`
              : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
          } 
          </div>
  
          <div class="date-of-birth">
            <p class="dateOfBirth">date of birth:</p>
            <p>${data.dateofbirth}</p>
          </div>
  
        </div>
  
       <div class="large-content">
       
       ${
         data.profile
           ? ` <div class="profile informationContainer">
           <h3 class="inforHeader">Profile</h3>
           <p>
           ${data.profile}  
           </p>
         </div>`
           : ""
       }
  
  
  
       ${
        data.experiences.length !== 0
          ? `
      <div class="recent-experience informationContainer">
      <h3 class="inforHeader">Experience</h3>${data.experiences
        .map((experience) => {
          return `${
            Object.keys(experience).length !== 0
              ? `<div class="experience content-wrapper">
      <div class="start-and-end-date">
      ${experience.experiencestarts? ` <p class="start">${experience.experiencestarts} to</p>`:''
    
    
    }
       ${
        experience.experienceends? ` <p class="end">${experience.experienceends}</p>`:''
       }  
         
        </div>
  
        ${
          experience.jobTitle?` <p class="jobtitle">${experience.jobTitle}</p>`:''
        }
       ${
         experience.experience?` <p class="experienceOptain">${experience.experience}</p>`:''
       }
       ${experience.orgAddress?` <p class="organizationAndAddress">${experience.orgAddress}</p>`:''}
       
      </div>`
              : ""
          }`;
        })
        .join("")}      
      </div>`
          : ""
      }
     
  
  ${
    data.educations.length !== 0
      ? `
  <div class="educational-background informationContainer">
  <h3 class="inforHeader">Education</h3>
  ${data.educations
    .map((edu) => {
      return `<div class="education content-wrapper">
    <div class="start-and-end-date">
      <p class="start">${edu.educationstarts} to</p>
      <p class="end">${edu.educationends}</p>
    </div>
    <p class="qualification">${edu.qualification}</p>
    <p class="school-and-address">
    ${edu.eduAndAddress}
    </p>
    </div>
    `;
    })
    .join("")}
    
    </div>
    `
      : ""
  }
  
  
  ${
    data.objective.length !== 0
      ? `
  
  <div class="objective informationContainer">
  <h3 class="inforHeader">Objective</h3>
  <p>
    ${data.objective}
    </p>
    </div>
    
  `
      : ""
  }
  
  ${
    data.certifications.length !== 0
      ? `
      <div class="certification informationContainer">
    <h3 class="inforHeader">Certification</h3>
    <ul class="content-wrapper">
    ${data.certifications.map((cert) => `<li>${cert}</li>`).join("")}
    </ul>
    </div>
    `
      : ""
  }
  </div>
  
  <div class="tiny-content">
  
  <div class="contact-information informationContainer">
  <h3 class="inforHeader">Contact information</h3>
  <div class="content-wrapper">
  ${
    data.email
      ? `<div class="information">
      <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
      <p class="inforVal">${data.email}</p>
    </div>
    `
      : ""
  } 
    ${
      data.phoneNumber
        ? ` <div class="information">
       <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
      <p class="inforVal">${data.phoneNumber}</p>
    </div>`
        : ""
    }
     ${
       data.country
         ? `
      <div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197226/erutubs/flag-outline_weqn13.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.country}</p>
    </div>`
         : ""
     }

     ${
       data.state
         ? `
      <div class="information">
           <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197743/erutubs/home-outline_vek3pk.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.state}</p>
    </div>`
         : ""
     }

     ${
       data.gender
         ? `<div class="information">
           <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197894/erutubs/person-circle-outline_kaaj5i.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.gender}</p>
    </div>`
         : ""
     }
    ${
      data.address
        ? `<div class="information">
       <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
      <p class="inforVal">${data.address}</p>
    </div>
      `
        : ""
    }
    ${
      data.maritalStatus
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198037/erutubs/people-outline_peg7gy.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.maritalStatus}</p>
    </div>
      `
        : ""
    }
      </div>
  
        </div>
  
  
         ${
           data.twitter || data.instagram || data.facebook || data.linkedin
             ? `
    <div class="social-media-links informationContainer">
    <h3 class="inforHeader">Social media links</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198193/erutubs/logo-facebook_a82wc9.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198415/erutubs/logo-instagram_jeo4pu.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198454/erutubs/logo-twitter_qx4nej.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198416/erutubs/logo-linkedin_upve1j.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.linkedin}</p>
      </div>`
        : ""
    }
    </div>
    </div>
    `
             : ""
         }
  
  ${
    data.skills.length !== 0
      ? `   <div class="skills informationContainer">
    <h3 class="inforHeader">Skills</h3>
    <ul class="content-wrapper">
    ${data.skills
      .map((skill) => `${skill ? `<li>${skill}</li>` : ""}`)
      .join("")}
      </ul>
      </div>
      `
      : ""
  }
         ${
           data.reffrences.length !== 0
             ? `<div class="references informationContainer">
        <h3 class="inforHeader">Refrence</h3>
        ${data.reffrences
          .map((ref) => {
            return `
            <div class="reference content-wrapper">
            <p class="refName">${ref.refrenceName}</p>
            <p class="titleandorg">
  ${ref.referenceTitleAndOrg}
  </p>
  <p class="email">${ref.refrenceEmail}</p>
  </div>
  `;
          })
          .join("")}
  
          </div>
          `
             : ""
         }
        
        ${
          data.interest.length !== 0
            ? `   <div class="interest informationContainer">
          <h3 class="inforHeader">Interest</h3>
          <ul class="content-wrapper">
          ${data.interest.map((intr) => `<li>${intr}</li>`).join("")}
          </ul></div>`
            : ""
        }
        </div>
          
        </div>
        `;
    }
    if (data.template.template === "resume2") {
      marckup = `  <div id="${data._id}" class="template resume rl template2">
      
    <div class="user-name-and-profession">
      <h1 class="user-name">${data.fullName}</h1>
      <p class="profession">${data.profession}</p>
    </div>
    <div class="tiny-content">
         <div class="passportDateOfBirth">
          <div class="passport-box">
          ${
            data.images
              ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
            />`
              : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
          } 
          </div>
          <div class="date-of-birth">
            <p class="dateOfBirth">date of birth:</p>
            <p>${data.dateofbirth}</p>
          </div>
        </div>
  
  
        <div class="contact-information informationContainer">
        <h3 class="inforHeader">Contact information</h3>
        <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
            <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
            <p class="inforVal">${data.email}</p>
          </div>
          `
            : ""
        }  
          ${
            data.phoneNumber
              ? ` <div class="information">
             <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
            <p class="inforVal">${data.phoneNumber}</p>
          </div>`
              : ""
          }
           ${
             data.country
               ? `
            <div class="information">
              <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197226/erutubs/flag-outline_weqn13.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.country}</p>
          </div>`
               : ""
           }
           ${
             data.state
               ? `
            <div class="information">
                 <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197743/erutubs/home-outline_vek3pk.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.state}</p>
          </div>`
               : ""
           }
           ${
             data.gender
               ? `<div class="information">
                 <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197894/erutubs/person-circle-outline_kaaj5i.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.gender}</p>
          </div>`
               : ""
           }
          ${
            data.address
              ? `<div class="information">
             <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
            <p class="inforVal">${data.address}</p>
          </div>
            `
              : ""
          }
          ${
            data.maritalStatus
              ? `<div class="information">
                <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198037/erutubs/people-outline_peg7gy.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.maritalStatus}</p>
          </div>
            `
              : ""
          }
         
        </div>
      </div>
  
  
  
        ${
          data.twitter || data.instagram || data.facebook || data.linkedin
            ? `
    <div class="social-media-links informationContainer">
    <h3 class="inforHeader">Social media links</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198193/erutubs/logo-facebook_a82wc9.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198415/erutubs/logo-instagram_jeo4pu.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198454/erutubs/logo-twitter_qx4nej.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198416/erutubs/logo-linkedin_upve1j.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.linkedin}</p>
      </div>`
        : ""
    }
    </div>
    </div>
  `
            : ""
        }
  
     ${
       data.skills.length !== 0
         ? `   <div class="skills informationContainer">
      <h3 class="inforHeader">Skills</h3>
      <ul class="content-wrapper">
      ${data.skills.map((skill) => `<li>${skill}</li>`).join("")}
      </ul></div>`
         : ""
     }
  
     ${
       data.reffrences.length !== 0
         ? `
     <div class="references informationContainer">
     <h3 class="inforHeader">Refrence</h3>
        ${data.reffrences
          .map((ref) => {
            return `
  <div class="reference content-wrapper">
  <p class="refName">${ref.refrenceName}</p>
  <p class="titleandorg">
  ${ref.referenceTitleAndOrg}
  </p>
  <p class="email">${ref.refrenceEmail}</p>
  </div>
  `;
          })
          .join("")}
  
  </div>
  `
         : ""
     }
        ${
          data.interest.length !== 0
            ? `   <div class="interest informationContainer">
          <h3 class="inforHeader">Interest</h3>
          <ul class="content-wrapper">
          ${data.interest
            .map((intr) => {
              return `<li>${intr}</li>`;
            })
            .join("")}
        </ul></div>`
            : ""
        }
      </div>
      
  
      <div class="large-content">
     ${
       data.profile
         ? `<div class="profile informationContainer">
           <h3 class="inforHeader">Profile</h3>
           <p>
           ${data.profile}  
           </p>
         </div>
      `
         : ""
     }
  
     ${
      data.experiences.length !== 0
        ? `
    <div class="recent-experience informationContainer">
    <h3 class="inforHeader">Experience</h3>${data.experiences
      .map((experience) => {
        return `${
          Object.keys(experience).length !== 0
            ? `<div class="experience content-wrapper">
    <div class="start-and-end-date">
    ${experience.experiencestarts? ` <p class="start">${experience.experiencestarts} to</p>`:''
  
  
  }
     ${
      experience.experienceends? ` <p class="end">${experience.experienceends}</p>`:''
     }  
       
      </div>

      ${
        experience.jobTitle?` <p class="jobtitle">${experience.jobTitle}</p>`:''
      }
     ${
       experience.experience?` <p class="experienceOptain">${experience.experience}</p>`:''
     }
     ${experience.orgAddress?` <p class="organizationAndAddress">${experience.orgAddress}</p>`:''}
     
    </div>`
            : ""
        }`;
      })
      .join("")}      
    </div>`
        : ""
    }
   
  
  ${
    data.educations.length !== 0
      ? `
  <div class="educational-background informationContainer">
  <h3 class="inforHeader">Education</h3>
  ${data.educations
    .map((edu) => {
      return `<div class="education content-wrapper">
  <div class="start-and-end-date">
    <p class="start">${edu.educationstarts} to</p>
    <p class="end">${edu.educationends}</p>
  </div>
  <p class="qualification">${edu.qualification}</p>
  <p class="school-and-address">
  ${edu.eduAndAddress}
  </p>
  </div>
  `;
    })
    .join("")}
  
  </div>
  `
      : ""
  }
  ${
    data.certifications.length !== 0
      ? `
  <div class="certification informationContainer">
      <h3 class="inforHeader">Certification</h3>
      <ul class="content-wrapper">
      ${data.certifications.map((cert) => `<li>${cert}</li>`).join("")}
      </ul>
      </div>
      `
      : ""
  }
      </div>
      </div>`;
    }
    if (data.template.template === "resume3") {
      marckup = ` <div id="${data._id}" class="template resume rl template3"> 
      
      <div class="large-profile">
        <div class="passportDateOfBirth">
          <div class="passport-box">
          ${
            data.images
              ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
            />`
              : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
          } 
          </div>
          <div class="date-of-birth">
            <p class="dateOfBirth">date of birth:</p>
            <p>${data.dateofbirth}</p>
          </div>
        </div>
  
      ${
        data.profile
          ? `
        <div class="profile informationContainer">
      <h3 class="inforHeader">Profile</h3>
      <p>
      ${data.profile}  
      </p>
      </div>`
          : ""
      }
      
      </div>
      <div class="user-name-and-profession">
      <p class="profession">${data.profession}</p>
         <h1 class="user-name">${data.fullName}</h1>
       </div>
  
  
      <div class="tiny-content">
  
        <div class="contact-information informationContainer">
        <h3 class="inforHeader">Contact information</h3>
        <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
            <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
            <p class="inforVal">${data.email}</p>
          </div>
          `
            : ""
        }  
          ${
            data.phoneNumber
              ? ` <div class="information">
             <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
            <p class="inforVal">${data.phoneNumber}</p>
          </div>`
              : ""
          }
           ${
             data.country
               ? `
            <div class="information">
              <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197226/erutubs/flag-outline_weqn13.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.country}</p>
          </div>`
               : ""
           }
           ${
             data.state
               ? `
            <div class="information">
                 <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197743/erutubs/home-outline_vek3pk.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.state}</p>
          </div>`
               : ""
           }
           ${
             data.gender
               ? `<div class="information">
                 <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197894/erutubs/person-circle-outline_kaaj5i.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.gender}</p>
          </div>`
               : ""
           }
          ${
            data.address
              ? `<div class="information">
             <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
            <p class="inforVal">${data.address}</p>
          </div>
            `
              : ""
          }
          ${
            data.maritalStatus
              ? `<div class="information">
                <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198037/erutubs/people-outline_peg7gy.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.maritalStatus}</p>
          </div>
            `
              : ""
          }
         
        </div>
      </div>
  
  
  
        ${
          data.twitter || data.instagram || data.facebook || data.linkedin
            ? `
    <div class="social-media-links informationContainer">
    <h3 class="inforHeader">Social media links</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198193/erutubs/logo-facebook_a82wc9.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198415/erutubs/logo-instagram_jeo4pu.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198454/erutubs/logo-twitter_qx4nej.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198416/erutubs/logo-linkedin_upve1j.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.linkedin}</p>
      </div>`
        : ""
    }
  
    </div>
    </div>
  `
            : ""
        }
  
     ${
       data.skills.length !== 0
         ? `   <div class="skills informationContainer">
      <h3 class="inforHeader">Skills</h3>
      <ul class="content-wrapper">
      ${data.skills
        .map((skill) => `${skill ? `<li>${skill}</li>` : ""}`)
        .join("")}
      </ul>
      </div>
      `
         : ""
     }
  
         ${
           data.reffrences.length !== 0
             ? `<div class="references informationContainer">
        <h3 class="inforHeader">Refrence</h3>
        ${data.reffrences
          .filter((val) => val !== {})
          .map((ref) => {
            return `
  <div class="reference content-wrapper">
  <p class="refName">${ref.refrenceName}</p>
  <p class="titleandorg">
  ${ref.referenceTitleAndOrg}
  </p>
  <p class="email">${ref.refrenceEmail}</p>
  </div>
  `;
          })
          .join("")}
  
  </div>
  `
             : ""
         }
  
      ${
        data.interest.length !== 0
          ? `   <div class="interest informationContainer">
        <h3 class="inforHeader">Interest</h3>
        <ul class="content-wrapper">
        ${data.interest.map((intr) => `<li>${intr}</li>`).join("")}
      </ul></div>`
          : ""
      }
    </div>
    <div class="large-content">
    ${
      data.experiences.length !== 0
        ? `
    <div class="recent-experience informationContainer">
    <h3 class="inforHeader">Experience</h3>${data.experiences
      .map((experience) => {
        return `${
          Object.keys(experience).length !== 0
            ? `<div class="experience content-wrapper">
    <div class="start-and-end-date">
    ${experience.experiencestarts? ` <p class="start">${experience.experiencestarts} to</p>`:''
  
  
  }
     ${
      experience.experienceends? ` <p class="end">${experience.experienceends}</p>`:''
     }  
       
      </div>

      ${
        experience.jobTitle?` <p class="jobtitle">${experience.jobTitle}</p>`:''
      }
     ${
       experience.experience?` <p class="experienceOptain">${experience.experience}</p>`:''
     }
     ${experience.orgAddress?` <p class="organizationAndAddress">${experience.orgAddress}</p>`:''}
     
    </div>`
            : ""
        }`;
      })
      .join("")}      
    </div>`
        : ""
    }
   
  
  ${
    data.educations.length !== 0
      ? `
  <div class="educational-background informationContainer">
  <h3 class="inforHeader">Education</h3>
  ${data.educations
    .filter((val) => val !== {})
    .map((edu) => {
      return `<div class="education content-wrapper">
  <div class="start-and-end-date">
  <p class="start">${edu.educationstarts} to</p>
  <p class="end">${edu.educationends}</p>
  </div>
  <p class="qualification">${edu.qualification}</p>
  <p class="school-and-address">
  ${edu.eduAndAddress}
  </p>
  </div>
  `;
    })
    .join("")}
  
  </div>
  `
      : ""
  }
        ${
          data.objective
            ? `
  
  <div class="objective informationContainer">
  <h3 class="inforHeader">Objective</h3>
  <p>
    ${data.objective}
  </p>
  </div>
  
  `
            : ""
        }
  
         ${
           data.certifications.length !== 0
             ? `<div class="certification informationContainer">
      <h3 class="inforHeader">Certification</h3>
      <ul class="content-wrapper">
      ${data.certifications.map((cert) => `<li>${cert}</li>`).join("")}
      </ul>
      </div>
      `
             : ""
         }
      </div>
    </div>`;
    }
    if (data.template.template === "resume4") {
      marckup = ` <div id="${data._id}" class="template resume rl template4">
      
      <div class="contact-information informationContainer">
  
        <div class="contact-container">
        <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
            <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
            <p class="inforVal">${data.email}</p>
          </div>
          `
            : ""
        }  
          ${
            data.phoneNumber
              ? ` <div class="information">
             <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
            <p class="inforVal">${data.phoneNumber}</p>
          </div>`
              : ""
          }
           ${
             data.country
               ? `
            <div class="information">
              <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197226/erutubs/flag-outline_weqn13.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.country}</p>
          </div>`
               : ""
           }
           ${
             data.state
               ? `
            <div class="information">
                 <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197743/erutubs/home-outline_vek3pk.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.state}</p>
          </div>`
               : ""
           }
           </div>
          
           <div class="content-wrapper secondContent">
           ${
             data.gender
               ? `<div class="information">
               <p class="inforVal">${data.gender}</p>
               <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197894/erutubs/person-circle-outline_kaaj5i.png" alt="" class="logo" /></p> 

          </div>`
               : ""
           }
          ${
            data.address
              ? `<div class="information">
              <p class="inforVal">${data.address}</p>
             <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
          </div>
            `
              : ""
          }

          ${
            data.maritalStatus
              ? `<div class="information">
              <p class="inforVal">${data.maritalStatus}</p>
              <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198037/erutubs/people-outline_peg7gy.png" alt="" class="logo" /></p> 

          </div>
            `
              : ""
          }
         
          </div>
        </div>
      </div>
     
  
      <div class="user-name-and-profession">
     
        <div class="passportDateOfBirth">
          <div class="passport-box">
          ${
            data.images
              ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
            />`
              : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
          } 
          </div>
          <div class="date-of-birth">
            <p class="dateOfBirth">date of birth:</p>
            <p>${data.dateofbirth}</p>
          </div>
        </div>
  
        
        <h1 class="user-name">${data.fullName}</h1>
        <p class="profession">${data.profession}</p>
      
      </div>
  
      <div class="tiny-content">
      ${
        data.objective
          ? `
    
      <div class="objective informationContainer">
      <h3 class="inforHeader">Objective</h3>
      <p>
        ${data.objective}
      </p>
      </div>
      
      `
          : ""
      }
  
        ${
          data.twitter || data.instagram || data.facebook || data.linkedin
            ? `
    <div class="social-media-links informationContainer">
    <h3 class="inforHeader">Social media links</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198193/erutubs/logo-facebook_a82wc9.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198415/erutubs/logo-instagram_jeo4pu.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198454/erutubs/logo-twitter_qx4nej.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198416/erutubs/logo-linkedin_upve1j.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.linkedin}</p>
      </div>`
        : ""
    }
    </div>
    </div>
  `
            : ""
        }
  
     ${
       data.skills.length !== 0
         ? `   <div class="skills informationContainer">
      <h3 class="inforHeader">Skills</h3>
      <ul class="content-wrapper">
      ${data.skills
        .map((skill) => `${skill ? `<li>${skill}</li>` : ""}`)
        .join("")}
      </ul>
      </div>
      `
         : ""
     }
  
         ${
           data.reffrences.length !== 0
             ? `<div class="references informationContainer">
        <h3 class="inforHeader">Refrence</h3>
        ${data.reffrences
          .map((ref) => {
            return `
  <div class="reference content-wrapper">
  <p class="refName">${ref.refrenceName}</p>
  <p class="titleandorg">
  ${ref.referenceTitleAndOrg}
  </p>
  <p class="email">${ref.refrenceEmail}</p>
  </div>
  `;
          })
          .join("")}
  
  </div>
  `
             : ""
         }
         ${
           data.interest.length !== 0
             ? `   <div class="interest informationContainer">
          <h3 class="inforHeader">Interest</h3>
          <ul class="content-wrapper">
          ${data.interest.map((intr) => `<li>${intr}</li>`).join("")}
        </ul></div>`
             : ""
         }
      </div>
  
      <div class="large-content">
      ${
        data.profile
          ? `
        <div class="profile informationContainer">
      <h3 class="inforHeader">Profile</h3>
      <p>
      ${data.profile}  
      </p>
      </div>`
          : ""
      }
  
      ${
        data.experiences.length !== 0
          ? `
      <div class="recent-experience informationContainer">
      <h3 class="inforHeader">Experience</h3>${data.experiences
        .map((experience) => {
          return `${
            Object.keys(experience).length !== 0
              ? `<div class="experience content-wrapper">
      <div class="start-and-end-date">
      ${experience.experiencestarts? ` <p class="start">${experience.experiencestarts} to</p>`:''
    
    
    }
       ${
        experience.experienceends? ` <p class="end">${experience.experienceends}</p>`:''
       }  
         
        </div>
  
        ${
          experience.jobTitle?` <p class="jobtitle">${experience.jobTitle}</p>`:''
        }
       ${
         experience.experience?` <p class="experienceOptain">${experience.experience}</p>`:''
       }
       ${experience.orgAddress?` <p class="organizationAndAddress">${experience.orgAddress}</p>`:''}
       
      </div>`
              : ""
          }`;
        })
        .join("")}      
      </div>`
          : ""
      }
     
     
    
      ${
        data.educations.length !== 0
          ? `
    
      <div class="educational-background informationContainer">
      <h3 class="inforHeader">Education</h3>
      ${data.educations
        .map((edu) => {
          return `<div class="education content-wrapper">
        <div class="start-and-end-date">
          <p class="start">${edu.educationstarts} to</p>
          <p class="end">${edu.educationends}</p>
        </div>
        <p class="qualification">${edu.qualification}</p>
        <p class="school-and-address">
        ${edu.eduAndAddress}
        </p>
      </div>
      `;
        })
        .join("")}
    </div>
      `
          : ""
      }
      
    
      
      ${
        data.certifications.length !== 0
          ? `<div class="certification informationContainer">
        <h3 class="inforHeader">Certification</h3>
        <ul class="content-wrapper">
        ${data.certifications.map((cert) => `<li>${cert}</li>`).join("")}
        </ul>
        </div>
        `
          : ""
      }
      </div>
    </div>
  `;
    }
    if (data.template.template === "resume5") {
      marckup = `
      
      <div id="${data._id}" class="template resume rl template5">
        <div class="tiny-content">     
  
          <div class="passportDateOfBirth">
          <div class="passport-box">
          ${
            data.images
              ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
            />`
              : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
          } 
          </div>
          <div class="date-of-birth">
            <p class="dateOfBirth">date of birth:</p>
            <p>${data.dateofbirth}</p>
          </div>
        </div>
   
        <div class="contact-information informationContainer">
        <h3 class="inforHeader">Contact information</h3>
        <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
            <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
            <p class="inforVal">${data.email}</p>
          </div>
          `
            : ""
        }  
          ${
            data.phoneNumber
              ? ` <div class="information">
             <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
            <p class="inforVal">${data.phoneNumber}</p>
          </div>`
              : ""
          }
           ${
             data.country
               ? `
            <div class="information">
              <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197226/erutubs/flag-outline_weqn13.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.country}</p>
          </div>`
               : ""
           }
           ${
             data.state
               ? `
            <div class="information">
                 <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197743/erutubs/home-outline_vek3pk.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.state}</p>
          </div>`
               : ""
           }
           ${
             data.gender
               ? `<div class="information">
                 <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197894/erutubs/person-circle-outline_kaaj5i.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.gender}</p>
          </div>`
               : ""
           }
          ${
            data.address
              ? `<div class="information">
             <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
            <p class="inforVal">${data.address}</p>
          </div>
            `
              : ""
          }
          ${
            data.maritalStatus
              ? `<div class="information">
                <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198037/erutubs/people-outline_peg7gy.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.maritalStatus}</p>
          </div>
            `
              : ""
          }
         
        </div>
      </div>

  
  ${
    data.twitter || data.instagram || data.facebook || data.linkedin
      ? `
    <div class="social-media-links informationContainer">
    <h3 class="inforHeader">Social media links</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198193/erutubs/logo-facebook_a82wc9.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }

    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198415/erutubs/logo-instagram_jeo4pu.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198454/erutubs/logo-twitter_qx4nej.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }

    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198416/erutubs/logo-linkedin_upve1j.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.linkedin}</p>
      </div>`
        : ""
    }
  
    </div>
    </div>
  `
      : ""
  }
    ${
      data.skills.length !== 0
        ? `   <div class="skills informationContainer">
      <h3 class="inforHeader">Skills</h3>
      <ul class="content-wrapper">
      ${data.skills
        .map((skill) => `${skill ? `<li>${skill}</li>` : ""}`)
        .join("")}
      </ul>
      </div>
      `
        : ""
    }
    
  
      ${
        data.reffrences.length !== 0
          ? `<div class="references informationContainer">
        <h3 class="inforHeader">Refrence</h3>
        ${data.reffrences
          .map((ref) => {
            return `
  <div class="reference content-wrapper">
  <p class="refName">${ref.refrenceName}</p>
  <p class="titleandorg">
  ${ref.referenceTitleAndOrg}
  </p>
  <p class="email">${ref.refrenceEmail}</p>
  </div>
  `;
          })
          .join("")}
  
  </div>
  `
          : ""
      }
      ${
        data.interest.length !== 0
          ? `   <div class="interest informationContainer">
        <h3 class="inforHeader">Interest</h3>
        <ul class="content-wrapper">
        ${data.interest.map((intr) => `<li>${intr}</li>`).join("")}
        </ul>
      </div>
        `
          : ""
      }
        </div>
  
    <div class="large-content">
      <div class="user-name-and-profession">
        <h1 class="user-name">${data.fullName}</h1>
        <p class="profession">${data.profession}</p>
      </div>
      ${
        data.profile
          ? `
        <div class="profile informationContainer">
      <h3 class="inforHeader">Profile</h3>
      <p>
      ${data.profile}  
      </p>
    </div>`
          : ""
      }
  
    ${
      data.experiences.length !== 0
        ? `
    <div class="recent-experience informationContainer">
    <h3 class="inforHeader">Experience</h3>${data.experiences
      .map((experience) => {
        return `${
          Object.keys(experience).length !== 0
            ? `<div class="experience content-wrapper">
    <div class="start-and-end-date">
    ${experience.experiencestarts? ` <p class="start">${experience.experiencestarts} to</p>`:''
  
  
  }
     ${
      experience.experienceends? ` <p class="end">${experience.experienceends}</p>`:''
     }  
       
      </div>

      ${
        experience.jobTitle?` <p class="jobtitle">${experience.jobTitle}</p>`:''
      }
     ${
       experience.experience?` <p class="experienceOptain">${experience.experience}</p>`:''
     }
     ${experience.orgAddress?` <p class="organizationAndAddress">${experience.orgAddress}</p>`:''}

    </div>`
            : ""
        }`;
      })
      .join("")}      
    </div>`
        : ""
    }
   
  
    ${
      data.educations.length !== 0
        ? `
  
    <div class="educational-background informationContainer">
    <h3 class="inforHeader">Education</h3>
    ${data.educations
      .map((edu) => {
        return `<div class="education content-wrapper">
      <div class="start-and-end-date">
        <p class="start">${edu.educationstarts} to</p>
        <p class="end">${edu.educationends}</p>
      </div>
      <p class="qualification">${edu.qualification}</p>
      <p class="school-and-address">
      ${edu.eduAndAddress}
      </p>
    </div>
    `;
      })
      .join("")}
  </div>
    `
        : ""
    }
    
  
    ${
      data.objective
        ? `
  
    <div class="objective informationContainer">
    <h3 class="inforHeader">Objective</h3>
    <p>
      ${data.objective}
    </p>
    </div>
    
    `
        : ""
    }
    ${
      data.certifications.length !== 0
        ? `<div class="certification informationContainer">
      <h3 class="inforHeader">Certification</h3>
      <ul class="content-wrapper">
      ${data.certifications.map((cert) => `<li>${cert}</li>`).join("")}
      </ul>
      </div>
      `
        : ""
    }
        </div>
      </div>
  `;
    }
    if (data.template.template === "resume6") {
      marckup = `   <div id="${data._id}" class="template resume rl template6">
      
      <div class="user-name-and-profession">
      <h1 class="user-name">${data.fullName}</h1>
      <p class="profession">${data.profession}</p>
    </div>
      <div class="large-content">
      ${
        data.profile
          ? `
        <div class="profile informationContainer">
      <h3 class="inforHeader">Profile</h3>
      <p>
      ${data.profile}  
      </p>
    </div>`
          : ""
      }
  
     ${
      data.experiences.length !== 0
        ? `
    <div class="recent-experience informationContainer">
    <h3 class="inforHeader">Experience</h3>${data.experiences
      .map((experience) => {
        return `${
          Object.keys(experience).length !== 0
            ? `<div class="experience content-wrapper">
    <div class="start-and-end-date">
    ${experience.experiencestarts? ` <p class="start">${experience.experiencestarts} to</p>`:''
  
  
  }
     ${
      experience.experienceends? ` <p class="end">${experience.experienceends}</p>`:''
     }  
       
      </div>

      ${
        experience.jobTitle?` <p class="jobtitle">${experience.jobTitle}</p>`:''
      }
     ${
       experience.experience?` <p class="experienceOptain">${experience.experience}</p>`:''
     }
     ${experience.orgAddress?` <p class="organizationAndAddress">${experience.orgAddress}</p>`:''}
     
    </div>`
            : ""
        }`;
      })
      .join("")}      
    </div>`
        : ""
    }
   
  
    ${
      data.educations.length !== 0
        ? `
  
    <div class="educational-background informationContainer">
    <h3 class="inforHeader">Education</h3>
    ${data.educations
      .map((edu) => {
        return `<div class="education content-wrapper">
      <div class="start-and-end-date">
        <p class="start">${edu.educationstarts} to</p>
        <p class="end">${edu.educationends}</p>
      </div>
      <p class="qualification">${edu.qualification}</p>
      <p class="school-and-address">
      ${edu.eduAndAddress}
      </p>
    </div>
    `;
      })
      .join("")}
  </div>
    `
        : ""
    }
    
  
    ${
      data.objective
        ? `
  
    <div class="objective informationContainer">
    <h3 class="inforHeader">Objective</h3>
    <p>
      ${data.objective}
    </p>
    </div>
    
    `
        : ""
    }
    ${
      data.certifications.length !== 0
        ? `<div class="certification informationContainer">
      <h3 class="inforHeader">Certification</h3>
      <ul class="content-wrapper">
      ${data.certifications.map((cert) => `<li>${cert}</li>`).join("")}
      </ul>
      </div>
      `
        : ""
    }
      </div>
  
      <div class="tiny-content">
      <div class="contact-information informationContainer">
      <h3 class="inforHeader">Contact information</h3>
      <div class="content-wrapper">
      ${
        data.email
          ? `<div class="information">
          <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
          <p class="inforVal">${data.email}</p>
        </div>
        `
          : ""
      }  
        ${
          data.phoneNumber
            ? ` <div class="information">
           <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>`
            : ""
        }
         ${
           data.country
             ? `
          <div class="information">
            <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197226/erutubs/flag-outline_weqn13.png" alt="" class="logo" /></p> 

          <p class="inforVal">${data.country}</p>
        </div>`
             : ""
         }
         ${
           data.state
             ? `
          <div class="information">
               <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197743/erutubs/home-outline_vek3pk.png" alt="" class="logo" /></p> 

          <p class="inforVal">${data.state}</p>
        </div>`
             : ""
         }
         ${
           data.gender
             ? `<div class="information">
               <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197894/erutubs/person-circle-outline_kaaj5i.png" alt="" class="logo" /></p> 

          <p class="inforVal">${data.gender}</p>
        </div>`
             : ""
         }
        ${
          data.address
            ? `<div class="information">
           <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
          <p class="inforVal">${data.address}</p>
        </div>
          `
            : ""
        }
        ${
          data.maritalStatus
            ? `<div class="information">
              <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198037/erutubs/people-outline_peg7gy.png" alt="" class="logo" /></p> 

          <p class="inforVal">${data.maritalStatus}</p>
        </div>
          `
            : ""
        }
    
      </div>
    </div>
  
  ${
    data.twitter || data.instagram || data.facebook || data.linkedin
      ? `
  <div class="social-media-links informationContainer">
  <h3 class="inforHeader">Social media links</h3>
  <div class="content-wrapper">
  ${
    data.facebook
      ? `<div class="information">
      <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198193/erutubs/logo-facebook_a82wc9.png" alt="" class="logo" /></p> 

    <p class="inforVal">${data.facebook}</p>
    </div>`
      : ""
  }
  ${
    data.instagram
      ? `<div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198415/erutubs/logo-instagram_jeo4pu.png" alt="" class="logo" /></p> 

    <p class="inforVal">${data.instagram}</p>
    </div>`
      : ""
  }
  
  ${
    data.twitter
      ? `<div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198454/erutubs/logo-twitter_qx4nej.png" alt="" class="logo" /></p> 

    <p class="inforVal">${data.twitter}</p>
    </div>`
      : ""
  }
  ${
    data.linkedin
      ? `<div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198416/erutubs/logo-linkedin_upve1j.png" alt="" class="logo" /></p> 

    <p class="inforVal">${data.linkedin}</p>
    </div>`
      : ""
  }
  </div>
  </div>
  `
      : ""
  }
  ${
    data.skills.length !== 0
      ? `   <div class="skills informationContainer">
    <h3 class="inforHeader">Skills</h3>
    <ul class="content-wrapper">
    ${data.skills
      .map((skill) => `${skill ? `<li>${skill}</li>` : ""}`)
      .join("")}
    </ul>
    </div>
    `
      : ""
  }
  
  
    ${
      data.reffrences.length !== 0
        ? `<div class="references informationContainer">
      <h3 class="inforHeader">Refrence</h3>
      ${data.reffrences
        .map((ref) => {
          return `
  <div class="reference content-wrapper">
  <p class="refName">${ref.refrenceName}</p>
  <p class="titleandorg">
  ${ref.referenceTitleAndOrg}
  </p>
  <p class="email">${ref.refrenceEmail}</p>
  </div>
  `;
        })
        .join("")}
  
  </div>
  `
        : ""
    }
    ${
      data.interest.length !== 0
        ? `   <div class="interest informationContainer">
      <h3 class="inforHeader">Interest</h3>
      <ul class="content-wrapper">
      ${data.interest.map((intr) => `<li>${intr}</li>`).join("")}
      </ul>
    </div>
      `
        : ""
    }
        
        <div class="passportDateOfBirth">
        <div class="passport-box">
        ${
          data.images
            ? `<img
          src="${data.images.url}"
          alt=""
          class="passport"
          />`
            : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
        } 
        </div>
        <div class="date-of-birth">
          <p class="dateOfBirth">date of birth:</p>
          <p>${data.dateofbirth}</p>
        </div>
      </div>
  
      </div>
    </div>`;
    }
  }
  return marckup;
};
const getAndGenerateMarckup = function (listofuser) {
  const marckup = listofuser
    .map(
      (user) => `
      <tr class="user-infor-row" id="${user._id}"><td ${user.isVerified?'class="verifiedTrue"':'class="verifiedFalse"'}>${
        user.userName
      }</td><td>${user.email}</td><td>${user.phone}</td><td>${new Date(
        user.date
      ).toDateString()}</td><td><span class="btn-delete list-btn">delete</span><span class="list-btn btn-view">view</span></td></tr>`
    )
    .join("");
  document
    .querySelector(".user-list")
    .insertAdjacentHTML("afterbegin", marckup);
};
const renderUserData = async function () {
  // console.log(state.user.email)
  const usersData = await axios.get("https://app.cvstudio.io/", {
    ...state.user
  });
  console.log(usersData)
  userlist.innerHTML = "";
  // userResums.innerHTML = "";
  // if (!userResums.classList.contains("hiddenClass"))
  //   userResums.classList.add("hiddenClass");
  state.page = 1;
  state.allData = usersData.data;
htmlParent.style.fontSize="3px"
  state.searchResult = getSearchResultPage(state.page);

  getAndGenerateMarckup(state.searchResult);
  generatePaginationMarkcup(state.allData.users);
  state.allData.letters.forEach(val=>{
    document.querySelector(".admin-user-letters").insertAdjacentHTML('beforeend',createPdfMarckup(val))

  })
  state.allData.cvs.forEach(val=>{

    document.querySelector(".admin-user-resumes").insertAdjacentHTML('beforeend',createPdfMarckup(val))
  })
  document.querySelector(".current-letters").innerText = state.allData.letters.length;
  document.querySelector(".current-users").innerText =    state.allData.users.length;
  document.querySelector(".current-cvs").innerText = state.allData.cvs.length;
};
const getTheTemplates = function (data) {
  let alluserTemplates = myTemplates.querySelectorAll(".resumeAndLetter");
  data.forEach((template) => {
    // console.log(template,template.template)
    alluserTemplates.forEach((tem) => {
      if (tem.classList.contains(`${template.template}`)) {
        tem.classList.remove("hiddenClass");
        tem.classList.add("rl");
      }
    });
  });
};
btnLogin.addEventListener("click", async function (e) {
  try {
    e.preventDefault();
    const formData = Object.fromEntries([
      ...new FormData(this.closest("form")),
    ]);
    const { password, email } = formData;
    if (!email)
      return (document.querySelector(".message2").textContent =
        "Can not supmit without email");

    state.user.email = email;
    state.user.password = password;

    document.querySelector(".message2").textContent = `please wait...`;
    const res = await axios.post("https://app.cvstudio.io/user/login", {
      ...state.user,
    });

    if (res.data.data === "1") {
      document
        .querySelector(".logAndRegisContainer")
        .classList.add("hiddenClass");
      document
        .querySelector(".admin-dashboard")
        .classList.remove("hiddenClass");
      renderUserData();
      return console.log("admin");
    }

    const accesstoken = (state.user.token = res.data.accesstoken);

    if (!accesstoken)
      return (document.querySelector(
        ".message2"
      ).textContent = `${res.data.msg}`);
    if (!res.data.user.isVerified){

      register(res.data.user);
      return (document.querySelector(
        ".message2"
      ).textContent = `Check your email for verification`);
    } 
    let id = (state.user.userid = res.data.user._id);
    state.user.siteUserName = res.data.user.userName;
    document.querySelector(".site-user-name").innerText =
      state.user.siteUserName;

    document
      .querySelector(".logAndRegisContainer")
      .classList.add("hiddenClass");

    document.querySelector(".loaderContainer").classList.remove("hiddenClass");
    const resume = await axios.post(`https://app.cvstudio.io/resume/:${id}`);

    const templatesRes = await axios.post(
      `https://app.cvstudio.io/resume/gettemplate/:${id}`
    );
    // console.log(resume, templatesRes);
    userDashBoard.classList.remove("hiddenClass");
    if (resume.data.cv) {
      state.resumes.push(...resume.data.cv);
      noResumeInfor.classList.add("hiddenClass");

      state.resumes.forEach((resume) => {
        state.user.myResumes.push(createPdfMarckup(resume));
      });
      document
        .querySelector(".no-resume-infor-container")
        .classList.add("hiddenClass");

      state.user.myResumes.forEach((resume) =>
        myResume.insertAdjacentHTML("beforeend", resume.toString())
      );
    }

    if (templatesRes.data.templates.length !== 0) {
      state.templates = templatesRes.data.templates;

      getTheTemplates(state.templates);
      noTemplateInor.classList.add("hiddenClass");
    }

    document.querySelector(".loaderContainer").classList.add("hiddenClass");
  } catch (error) {
    console.log(error);
  }
});
document.querySelector('.goto-login').addEventListener('click',function(e){
  let mailSends=document.querySelector(".welcome-message");
  mailSends.style.opacity = "0";
    mailSends.style.left = "1000px";
    mailSends.style.zIndex = "999";
    fromRegisterToLogin()
})
const register = async function (user) {
  const res = await axios.post("https://app.cvstudio.io/user/register", {
    ...user,
  });

  if (!res.data.accesstoken) return (message2.textContent = `${res.data.msg}`);
  let mailSends=document.querySelector(".welcome-message");
  mailSends.style.opacity = "1";
    mailSends.style.left = "0";
    mailSends.style.zIndex = "999";
};
btnSignup.addEventListener("click", async function (e) {
  e.preventDefault();
  try {
    const formData = Object.fromEntries([
      ...new FormData(this.closest("form")),
    ]);
    const { password, confirmPassword } = formData;
    if (password !== confirmPassword)
      return (message2.innerText = "Password did not match");
      message2.innerText = "Please wait...";
    state.user = formData;
    register(state.user);
  } catch (error) {
    console.log(error);
  }
});

// templates.addEventListener("click", function (e) {
//   e.preventDefault();
//   htmlParent.style.fontSize = "16px";
//   userDashBoard.style.display = "none";
//   document.querySelector("#cv-form").classList.remove("hiddenClass");
//   let myDivObj = e.target.closest(".template-form").querySelector(".firstPart");
//   templateColor = window.getComputedStyle(myDivObj).backgroundColor;
// });

templates.addEventListener("click", async function (e) {
  if (!e.target.classList.contains("custom-btn")) return;
  let templateContainer = e.target.closest(".resumeAndLetter");
  state.user.template = templateContainer.getAttribute("id");
  // return console.log(state.user.template)
  
//   select this
// Please wait...
  e.target.innerText="Please wait..."
  const templateData = {
    userid: state.user.userid,
    template: state.user.template,
  };
  // templates.classList.add("hiddenClass");
  const res = await axios.post("https://app.cvstudio.io/resume/savetemplate/", {
    templateData,
  });
  e.target.innerText="Select this"
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
  state.templates.push(res.data.result);
  state.user.myTemplates = [];
  state.section = "myTemplates";
  myTemplates.classList.remove("hiddenClass");
  getTheTemplates(state.templates);

  noTemplateInor.classList.add("hiddenClass");
  templates.classList.add("hiddenClass");
  sectionName.innerText = "My Templates";
  document.querySelector("#templates").classList.remove("active");
  document.querySelector("#myTemplates").classList.add("active");
});

const allTemplates = templates.querySelectorAll(".resumeAndLetter");
allTemplates.forEach((tmf) => {
  tmf.addEventListener("mouseleave", function (e) {
    let btnUseThis = e.target
      .closest(".resumeAndLetter")
      .querySelector(".custom-btn");

    if (!btnUseThis) return;
    btnUseThis.style.opacity = "0";
    btnUseThis.style.pointerEvents = "auto";
  });
  tmf.addEventListener("mouseenter", function (e) {
    let btnUseThis = e.target
      .closest(".resumeAndLetter")
      .querySelector(".custom-btn");

    if (!btnUseThis) return;
    btnUseThis.style.opacity = "1";
    btnUseThis.style.pointerEvents = "auto";
  });
});
const allMyTemplates = myTemplates.querySelectorAll(".resumeAndLetter");
allMyTemplates.forEach((tmf) => {
  tmf.addEventListener("mouseleave", function (e) {
    let btnUseThis = e.target
      .closest(".resumeAndLetter")
      .querySelector(".custom-btn");

    if (!btnUseThis) return;
    btnUseThis.style.opacity = "0";
    btnUseThis.style.pointerEvents = "auto";
  });
  tmf.addEventListener("mouseenter", function (e) {
    let btnUseThis = e.target
      .closest(".resumeAndLetter")
      .querySelector(".custom-btn");

    if (!btnUseThis) return;
    btnUseThis.style.opacity = "1";
    btnUseThis.style.pointerEvents = "auto";
  });
});

myTemplates.addEventListener("click", function (e) {
  // console.log(e.target)
  if (e.target.classList.contains("get-one")) {
    state.section = "templates";
    allUserContentChilds.forEach((child) => {
      if (!child.classList.contains("hiddenClass"))
        child.classList.add("hiddenClass");
    });
    allUserSiteButtons.forEach((btn) => {
      if (btn.classList.contains("active")) btn.classList.remove("active");
    });
    templates.classList.remove("hiddenClass");

    document
      .querySelector(`#${templates.classList[0]}`)
      .classList.add("active");

    return;
  }
  if (e.target.closest(".resumeAndLetter")) {
    if (!e.target.closest(".rl")) return;
    
      
    // console.log(templateBtn,'confirm')
   if(e.target.classList.contains('custom-btn')) {
     e.target.innerText="Please wait..."
    document.querySelector('.myResumeInfor').classList.remove('hiddenClass')

    
      state.templateToUse.type = "";
      state.templateToUse.template = "";
      let thisTemplate= e.target.closest(".resumeAndLetter").getAttribute('id');
      
      state.templateToUse.template =thisTemplate
      state.templateToUse.type =thisTemplate.slice(0,-1)
       
      // console.log(state.templateToUse);
      e.target.innerText="Use this..."
      if (state.templateToUse.type === "resume"){
       cvFormContainer.classList.add("showIt");
         returnToTop(); 

      }
      if (state.templateToUse.type === "letter"){
        document.querySelector(".cover-letter-container").classList.add("showIt");
         returnToTop()


      }
    }
  }
});


const returnToTop=()=>{
  userDashBoard.classList.add('hiddenClass')

  return window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// userTemplates = myTemplates.querySelectorAll(".template");
// // userTemplatesButtons.forEach((btn) => console.log(btn));
// userTemplates.forEach(ut=>{

//   ut.addEventListener('click', function(e){
//     console.log(e.target)
// })

//  image_input2})
[image_input].forEach(function (imageIn) {
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
      state.user.file = file;

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
      eduCol.length !== 0 && state.user.educations.push(eduCol);
    }
    if (btn.classList.contains("btnAddCertification")) {
      document.querySelector(".certInput").value = "";

      state.user.certifications.push(
        ...newData.filter((data) => data[0] === "certification")
      );
    }
    if (btn.classList.contains("btnWorkExperience")) {
      document.querySelectorAll(".exInput").forEach((val) => (val.value = ""));

      newData.length !== 0 &&
        newData.some((val) => val[1] !== "") &&
        state.user.experiences.push(newData);
    }
    if (btn.classList.contains("addskill")) {
      document.querySelector(".skillInput").value = "";

      state.user.skills.push(...newData.filter((val) => val[0] === "skill"));
    }
    if (btn.classList.contains("addinterest")) {
      document.querySelector(".intInput").value = "";

      state.user.hobies.push(...newData.filter((val) => val[0] === "interest"));
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
      refCol.length !== 0 && state.user.reffrences.push(refCol);
    }
  }
  newData = "";
  setTimeout(() => {
    messageBox.style.opacity = "0";
    messageBox.style.left = "1000px";
  }, 1500);
});
toRegister.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".register-section").style.left = "40px";
  document.querySelector(".login-section").style.left = "450px";
});
const fromRegisterToLogin=function(){
  document.querySelector(".register-section").style.left = "450px";
  document.querySelector(".login-section").style.left = "40px";
}
toLogin.addEventListener("click", (e) => {
  e.preventDefault();
 fromRegisterToLogin()
});

btnNext1.addEventListener("click", (e) => {
  e.preventDefault();
  state.user.persData1 = [...new FormData(e.target.closest("form"))];

  s1.querySelector(".fullName").style.borderBottom = "1px solid #999;";

  s1.style.left = "-450px";
  s2.style.left = "40px";
  progress.style.width = "120px";
});
btnback1.addEventListener("click", (e) => {
  e.preventDefault();

  s2.style.left = "450px";
  s1.style.left = "40px";
  progress.style.width = "60px";
});
btnNext2.addEventListener("click", (e) => {
  e.preventDefault();
  state.user.persData2 = [...new FormData(e.target.closest("form"))];

  s2.style.left = "-450px";
  s3.style.left = "40px";
  progress.style.width = "180px";
});
btnback2.addEventListener("click", (e) => {
  e.preventDefault();
  s3.style.left = "450px";
  s2.style.left = "40px";
  progress.style.width = "120px";
});
btnNext3.addEventListener("click", (e) => {
  e.preventDefault();

  [...new FormData(e.target.closest("form"))].forEach(
    (val) => val[1] !== "" && state.user.eduData.push(val)
  );
  s3.style.left = "-450px";
  s4.style.left = "40px";
  progress.style.width = "240px";
});
btnback3.addEventListener("click", (e) => {
  e.preventDefault();
  s4.style.left = "450px";
  s3.style.left = "40px";
  progress.style.width = "180px";
});
btnNext4.addEventListener("click", (e) => {
  e.preventDefault();
  [...new FormData(e.target.closest("form"))].filter(
    (val) => val[1] !== "" && state.user.expeData.push(val)
  );
  s4.style.left = "-450px";
  s5.style.left = "40px";
  progress.style.width = "300px";
});
btnback4.addEventListener("click", (e) => {
  e.preventDefault();
  s5.style.left = "450px";
  s4.style.left = "40px";
  progress.style.width = "240px";
});
btnNext5.addEventListener("click", (e) => {
  e.preventDefault();
  state.user.socLinks = [...new FormData(e.target.closest("form"))];
  s5.style.left = "-450px";
  s6.style.left = "40px";
  progress.style.width = "100%";
});
btnback5.addEventListener("click", (e) => {
  s6.style.left = "450px";
  s5.style.left = "40px";
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

const getSearchResultPage = function (page) {
  state.page = page;
  let start = (page - 1) * 8;
  let end = page * 8;
  //returning a certain page to be rendered
  return state.allData.users.slice(start, end);
};
//pagination
const paginationMarckup = function (searchResult) {
  let curPage = state.page;
  let numberOfUsers = 8;
  const numPages = Math.ceil(searchResult.length / numberOfUsers);

  // if(this._data.page===1 && numPages>1) return '1 and other pages';
  // if(this._data.page===numPages && numPages>1) return 'last page';
  // if(this._data<numPages)return "other page"
  // if(this._data===numPages && numPages===1)return 'only one page'
  const preMarckup = `<button class="btn--inline pagination__btn--prev" data-goto="${
    curPage - 1
  }">< Page ${curPage - 1}</button>`;
  const nextMarckup = `<button class="btn--inline pagination__btn--next" data-goto="${
    curPage + 1
  }">Page ${curPage + 1} ></button> `;
  if (curPage === 1 && numPages > 1) return nextMarckup;
  if (curPage === numPages && numPages > 1) return preMarckup;
  if (curPage < numPages)
    return `${preMarckup}${nextMarckup}
  `;
  return "";
};
const generatePaginationMarkcup = function (val) {
  paginationBox.innerHTML = "";
  paginationBox.insertAdjacentHTML("afterbegin", paginationMarckup(val));
};
document.querySelector(".pagination").addEventListener("click", function (e) {
  const btn = e.target.closest(".btn--inline");
  if (!btn) return;
  //console.log(document.querySelector('.user-list'))
  this.innerHTML = "";
  let userlist = document.querySelector(".user-list");
  userlist.innerHTML = "";
  const gotoPage = Number(btn.dataset.goto);
  state.searchResult = getSearchResultPage(gotoPage);
  getAndGenerateMarckup(state.searchResult);
  generatePaginationMarkcup(state.allData.users);
});

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
