// let date=new Date(block.createdAt).toDateString();
import * as Loader from "../js/loader.js";
import * as model from "../js/model.js";
import * as pagination from "../js/pagination.js"
const paginationBox=document.querySelector(".pagination")
console.log(paginationBox)
const thisBody=document.querySelector('body');
let loaderContainer="";
const blogSection=document.querySelector(".blog-section")
const defineContentLimit=(content,limit)=>{
  let dots="..."
  if(content.length>limit)return content.substring(0,limit) + dots;
  return content+dots;
}
const generatePaginationMarkcup = function (val) {
  paginationBox.innerHTML = "";
  paginationBox.insertAdjacentHTML("afterbegin", pagination.paginationMarckup(val));
};
const blogMarckup=(data)=>{
// return console.log(data)
  let marckup=data.map(block=>{
    // return console.log(block.blogArticle)
    
    let inArt=block.blogArticle[0].blocks.filter(item=>item.type==="paragraph")
    
    let blogLocation=block.blogTittle.split(" ").join("-")
    
    
  return`
  <div class="blog-card">
  <img src="${block.fetureImage?.url?block.fetureImage.url:""}" class="blog-image" alt="blog feature image">
  <a href="../blog/post/#${blogLocation}"  data-tittle="${blogLocation}"  class="blog-tittle read">
   ${defineContentLimit(block.blogTittle,55)}
  </a>
   <p class="blog-overview">
    ${defineContentLimit(inArt[0].data.text,78)}
   </p>
   <a href="../blog/post/#${blogLocation}" data-tittle"=${blogLocation}" class="btn-read read"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>${" "}Read More</a>
   
 </div>
  `
}) 
// console.log(marckup)
return marckup

}
const init=async function(){
  thisBody.insertAdjacentHTML("beforeend",Loader.loader(true))
  loaderContainer=document.querySelector(".loaderContainer")
  let blogRes = await axios.post("https://app.cvstudio.io/user/blogs/");
  // return console.log(blogRes)
   model.state.allPosts=blogMarckup(blogRes.data.data);
  model.state.page = 1;
  model.state.searchResult = pagination.getSearchResultPage(
    model.state.page,
    model.state.allPosts,
    true
  );
  generatePaginationMarkcup(model.state.allPosts);

 
  
  blogSection.insertAdjacentHTML("afterbegin", model.state.searchResult.join(""))
  // console.log(loaderContainer)
  //  localStorage.removeItem("blogTittle")

  loaderContainer.classList.add("hideMe")
}


init()
 document.querySelector(".blog-section").addEventListener("click",function(e){
  // e.target.preventDefault()
  if(!e.target.classList.contains("read"))return
   let tittle=e.target.dataset.tittle;
  

   localStorage.removeItem("blogTittle")
   localStorage.setItem("blogTittle",tittle)

 })
 document.querySelector(".pagination").addEventListener("click", function (e) {
  const btn = e.target.closest(".btn--inline");
  if (!btn) return;
 
  this.innerHTML = "";
  // let userlist = document.querySelector(".user-list");
  blogSection.innerHTML = "";
  const gotoPage = Number(btn.dataset.goto);

  model.state.searchResult = pagination.getSearchResultPage(gotoPage,model.state.allPosts,true);
  blogSection.insertAdjacentHTML("afterbegin",model.state.searchResult.join(""));
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  generatePaginationMarkcup(model.state.allPosts);

});