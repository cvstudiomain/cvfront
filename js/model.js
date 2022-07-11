export const state = {
  fontSize:"",
  templateToUse: { type: "", template: "" },
  section: "myResume",
  templates: [],
  resumes: [],
  templateToBeDownload: [],

  searchResult: "",
  user: {
    trynow: "",
    isGonGon: false,
    accesstoken: "",
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

const getSearchResultPage = function (page,notList=false) {
  state.page = page;
  let theNumber=8;
  if(notList) theNumber=6;
  let start = (page - 1) * theNumber;
  let end = page * theNumber;

  return state.allData.users.slice(start, end);
};

export const paginationMarckup = function (searchResult,notList=false) {
  let curPage = state.page;
  let numberOfItems = 8;
  if(notList) numberOfItems=6;
  const numPages = Math.ceil(searchResult.length / numberOfItems);

  
  const preMarckup = `<button class="btn--inline pagination__btn--prev" data-goto="${
    curPage - 1
  }">&larr;</button>`;
  const nextMarckup = `<button class="btn--inline pagination__btn--next" data-goto="${
    curPage + 1
  }">&rarr;</button> `;
  if (curPage === 1 && numPages > 1) return nextMarckup;
  if (curPage === numPages && numPages > 1) return preMarckup;
  if (curPage < numPages)
    return `${preMarckup}${nextMarckup}
  `;
  return "";
};
