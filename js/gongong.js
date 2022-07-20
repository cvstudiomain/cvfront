// import axios from "axios";
import * as model from "./model.js";
import { createPdfMarckup } from "./rAndcGenerator.js";
import * as pagination from "./pagination.js"


let userlist = document.querySelector(".user-list");
let paginationBox = document.querySelector(".pagination");
let userResums = document.querySelector(".user-res-cl-container");
let templateHeader = document.querySelector(".template-header");

const getAndGenerateMarckup = function (listofuser) {
  const marckup = listofuser
    .map(
      (user) => `
      <tr class="user-infor-row" id="${user._id}"><td ${
        user.isVerified ? 'class="verifiedTrue"' : 'class="verifiedFalse"'
      }>${user.userName}</td><td>${user.email}</td><td>${
        user.phone
      }</td><td>${new Date(
        user.date
      ).toDateString()}</td><td><span class="btn-delete list-btn">delete</span><span class="list-btn btn-view">view</span></td></tr>`
    )
    .join("");
  document
    .querySelector(".user-list")
    .insertAdjacentHTML("afterbegin", marckup);
};
const renderUserData = async function () {
  const users = await axios.get("https://app.cvstudio.io/", {
    ...model.state.user,
  });
  const cvs = await axios.get("https://app.cvstudio.io/allcvs", {
    ...model.state.user,
  });
  const letters = await axios.get("https://app.cvstudio.io/allletters", {
    ...model.state.user,
  });
  
  let usersData={
    users:users.data.users,
    cvs:cvs.data.cvs,
    letters:letters.data.letters
  };

  console.log(usersData)
  // state.searchResult = pagination.getSearchResultPage(state.page);
 
  userlist.innerHTML = "";
  
  model.state.page = 1;
  model.state.allData = usersData;
  // htmlParent.style.fontSize="3px"
  model.state.searchResult = pagination.getSearchResultPage(model.state.page,model.state.allData.users,false);

  getAndGenerateMarckup(model.state.searchResult);
  generatePaginationMarkcup(model.state.allData.users.reverse(),false);
  model.state.allData.letters.reverse().forEach((val) => {
    document
      .querySelector(".admin-user-letters")
      .insertAdjacentHTML("beforeend", createPdfMarckup(val));
  });
  model.state.allData.cvs.reverse().forEach((val) => {
    document
      .querySelector(".admin-user-resumes")
      .insertAdjacentHTML("beforeend", createPdfMarckup(val));
  });
  document.querySelector(".current-letters").innerText =
    model.state.allData.letters.length;
  document.querySelector(".current-users").innerText =
    model.state.allData.users.length;
  document.querySelector(".current-cvs").innerText = model.state.allData.cvs.length;
};

renderUserData();
const generatePaginationMarkcup = function (val) {
  paginationBox.innerHTML = "";
  paginationBox.insertAdjacentHTML("afterbegin", pagination.paginationMarckup(val));
};
document.querySelector(".pagination").addEventListener("click", function (e) {
  const btn = e.target.closest(".btn--inline");
  if (!btn) return;
 
  this.innerHTML = "";
  let userlist = document.querySelector(".user-list");
  userlist.innerHTML = "";
  const gotoPage = Number(btn.dataset.goto);
 console.log(gotoPage)
  model.state.searchResult = pagination.getSearchResultPage(gotoPage,model.state.allData.users,false);
  getAndGenerateMarckup(model.state.searchResult);
  generatePaginationMarkcup(model.state.allData.users);
});




const generateMarckup = function (marckup) {
  myResume.innerHTML = "";
  myResume.insertAdjacentHTML("afterbegin", marckup);
};
document.querySelectorAll(".log-out").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
    location.reload();
  });
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