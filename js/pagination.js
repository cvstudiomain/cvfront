import { state } from "./model.js";
export const getSearchResultPage = function (page,content,notList=false) {
  state.page = page;
  let theNumber=8;
  if(notList) theNumber=6;
  let start = (page - 1) * theNumber;
  let end = page * theNumber;

  return content.slice(start, end);
};

export const paginationMarckup = function (searchResult,notList=false) {
  let curPage = state.page;
  let numberOfItems = 8;
  if(notList) numberOfItems=6;
  const numPages = Math.ceil(searchResult.length / numberOfItems);

  
  const preMarckup = `<button class="btn--inline pagination-btn pagination__btn--prev" data-goto="${
    curPage - 1
  }">PREV</button>`;
  const nextMarckup = `<button class="btn--inline pagination-btn pagination__btn--next" data-goto="${
    curPage + 1
  }">NEXT</button> `;
  if (curPage === 1 && numPages > 1) return nextMarckup;
  if (curPage === numPages && numPages > 1) return preMarckup;
  if (curPage < numPages)
    return `${preMarckup}${nextMarckup}
  `;
  return "";
};
