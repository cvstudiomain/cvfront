// import axios from "axios";
import * as model from "./model.js";
import * as pagination from "./pagination.js";
import { createPdfMarckup } from "./rAndcGenerator.js";
let userData = JSON.parse(localStorage.getItem("user"));
// console.log(userData) if (userData.isGonGon)
if (!userData.isGonGon) window.location = "index.html";
const blogInAdmin = document.querySelector(".blog-in-admin");
let userlist = document.querySelector(".user-list");
let paginationBox = document.querySelector(".pagination");
let userResums = document.querySelector(".user-res-cl-container");
let templateHeader = document.querySelector(".template-header");
const listOfEditors = document.querySelector(".list-of-editors");
const listOfBlogPosts = document.querySelector(".list-of-blog-posts");
let adminPostCategories = document.querySelector(".admin-post-categories");
let categories = [];
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

const generateCategories = function (categories) {
  adminPostCategories.innerHTML = "";
  let catMarckup = [];
  categories.forEach((cat) => {
    if (cat)
      catMarckup.push(
        `<li class="category-list-item"><span class="cat-item" >${cat.category}</span><span class="btn-delete-cat-item" id="${cat._id}"><i class="fa fa-trash" aria-hidden="true"></i></span></li>`
      );
  });
  adminPostCategories.innerHTML = catMarckup.join("");
};
adminPostCategories.addEventListener("click", async (e) => {
  let id = e.target.closest(".btn-delete-cat-item").id;
  if (confirm("Are you sure you want to delete this category") == true) {
    let result = await axios.delete(
      `https://app.cvstudio.io/user/delete-category/:${id}`
    );
    categories = categories.filter(
      (cat) => cat.category !== result.data.data.category
    );
    generateCategories(categories);
  } else {
    return;
  }
});
const catres = await axios.get(`https://app.cvstudio.io/user/get-categories`);
categories = catres.data.data;
generateCategories(categories);
let blogRes = await axios.post("https://app.cvstudio.io/user/blogs/");
model.state.posts = blogRes.data.data;

const renderUserData = async function () {
  const users = await axios.get("https://app.cvstudio.io/", {
    ...model.state.user,
  });
  const cvs = await axios.get("https://app.cvstudio.io/allcvs", {
    ...model.state.user,
  });
  // console.log(cvs)
  const letters = await axios.get("https://app.cvstudio.io/allletters", {
    ...model.state.user,
  });
  let usersData = {
    users: users.data.users,
    usersLength: users.data.usersLength,
    cvs: cvs.data.cvs,
    cvsLength: cvs.data.cvsLenght,
    letters: letters.data.letters,
    lettersLength: letters.data.lettersLength,
  };
  // console.log(usersData)
  document.querySelector(".current-letters").innerText =
    usersData.lettersLength;

  document.querySelector(".current-users").innerText = usersData.usersLength;

  document.querySelector(".current-cvs").innerText = usersData.cvsLength;
  // state.searchResult = pagination.getSearchResultPage(state.page);

  userlist.innerHTML = "";

  model.state.page = 1;
  model.state.allData = usersData;
  // htmlParent.style.fontSize="16px"
  model.state.searchResult = pagination.getSearchResultPage(
    model.state.page,
    model.state.allData.users,
    false
  );

  getAndGenerateMarckup(model.state.searchResult);
  generatePaginationMarkcup(model.state.allData.users, false);
  model.state.allData.letters.forEach((val) => {
    document
      .querySelector(".admin-user-letters")
      .insertAdjacentHTML("beforeend", createPdfMarckup(val));
  });
  model.state.allData.cvs.forEach((val) => {
    document
      .querySelector(".admin-user-resumes")
      .insertAdjacentHTML("beforeend", createPdfMarckup(val));
  });

  const blogEditors = await axios.post(
    "https://app.cvstudio.io/user/get-blog-editors"
  );

  model.state.blogEditors = blogEditors.data.editors;
  listOfEditors.innerHTML = model.state.blogEditors
    .map(
      (editor) =>
        `<li id="${
          editor.userName === "cvstudioadmin" ? "admin" : editor._id
        }" class="blog-editor">${editor.userName}</li>`
    )
    .join("");
};

renderUserData();
const generatePaginationMarkcup = function (val) {
  paginationBox.innerHTML = "";
  paginationBox.insertAdjacentHTML(
    "afterbegin",
    pagination.paginationMarckup(val)
  );
};
document.querySelector(".pagination").addEventListener("click", function (e) {
  const btn = e.target.closest(".btn--inline");
  if (!btn) return;

  this.innerHTML = "";
  let userlist = document.querySelector(".user-list");
  userlist.innerHTML = "";
  const gotoPage = Number(btn.dataset.goto);
  console.log(gotoPage);
  model.state.searchResult = pagination.getSearchResultPage(
    gotoPage,
    model.state.allData.users,
    false
  );
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
    window.location = "index.html";
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
    if (e.target.getAttribute("id") === "blog-in-admin")
      return blogInAdmin.classList.remove("hideMe");
    let allSectionsInAdmin = document.querySelectorAll(".section-in-admin");
    allSectionsInAdmin.forEach((section) => {
      if (!section.classList.contains("hideMe"))
        section.classList.add("hideMe");
      document
        .querySelector(`.${e.target.getAttribute("id")}`)
        .classList.remove("hideMe");
    });
  });
document.querySelector(".close-admin-blog").addEventListener("click", () => {
  blogInAdmin.classList.add("hideMe");
});
document
  .querySelector(".btn-add-editor")
  .addEventListener("click", async () => {
    let editorEmail = document.querySelector(".add-editor").value;
    const newEditor = await axios.post(
      "https://app.cvstudio.io/user/add-blog-editor",
      { email: editorEmail }
    );
    console.log(newEditor);
  });

listOfEditors.addEventListener("click", (e) => {
  if (!e.target.classList.contains("blog-editor")) return;
  let filteredPosts = model.state.posts
    .filter((post) => post.editorId === e.target.id)
    .map(
      (post) =>
        `<li id="${post?._id}" class="in-admin-post-title"><span class="pstitle">${post.blogTittle}</span><a href="http://127.0.0.1:5501/blog/editor.html#${post?._id}" class="btn btn-edit">Edit</a><span class="btn btn-delete">Delete</span>`
    )
    .join("");
  console.log(filteredPosts);
  listOfBlogPosts.innerHTML = filteredPosts;
});
listOfBlogPosts.addEventListener("click", async (e) => {
  if (!e.target.classList.contains("btn-delete")) return;
  let id = e.target.closest("li").id;
  if (confirm("Are you sure you want to delete this post") === true) {
    let result = await axios.delete(
      `https://app.cvstudio.io/user/delete-post/:${id}`
    );
    //  categories=categories.filter(cat=>cat.category!==result.data.data.category);
    //  generateCategories(categories)
  } else {
    return;
  }
});
