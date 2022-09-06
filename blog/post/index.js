const relatedPosts=document.querySelector(".related-posts")
// console.log(relatedPosts)
import * as Loader from "../../js/loader.js";
import * as model from "../../js/model.js";
import * as pagination from "../../js/pagination.js"

const paginationBox=document.querySelector(".pagination")
const thisBody=document.querySelector('body');
let loaderContainer="";
const blogArticleAndOverview=document.querySelector(".blog-article-and-overview")
let headerTittle=document.querySelector(".post-header-tittle")
// import * as model from "../../js/model.js"
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
  <a href="../../blog/post/#${blogLocation}" data-tittle="../../blog/post/#${blogLocation}" class="blog-tittle read">
   ${defineContentLimit(block.blogTittle,55)}
  </a>
   <p class="blog-overview">
    ${defineContentLimit(inArt[0].data.text,78)}
   </p>
   <a href="../../blog/post/#${blogLocation}" data-tittle="../../blog/post/#${blogLocation}"  class="btn-read read"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>${" "}Read More</a>
   
 </div>
  `
}) 

return marckup

}
const getlList=function(data){
  return data.map(li=>`<li>${li}</li>`).join("");
}
const generateArticle=function(data){  
  
        return data[0].blocks.map(item=>{
         
            if(item.type==="paragraph")return`<p class="blog-article-paragraph">${item.data.text}</p>`
            if(item.type==="header")return`<h3 class="blog-article-header heading-tertiary">${item.data.text}</h3>`
            if(item.type==="list")return item.data.style==="unordered"?`<ul class="post-list">${getlList(item.data.items)}</ul>`:`<ol class="post-list">${getlList(item.data.items)}</ol>`
              // return`<h3 class="blog-article-header heading-tertiary">${item.data.text}</h3>`
           
          }).join("");
}

const init=async function(){
  thisBody.insertAdjacentHTML("beforeend",Loader.loader(true))
  loaderContainer=document.querySelector(".loaderContainer")
  // return
  let blogRes = await axios.post("https://app.cvstudio.io/user/blogs/");

  let postTilttle = localStorage.getItem("blogTittle").split("#")[1]
  if(postTilttle===null||postTilttle==="undefined"||postTilttle===undefined )postTilttle=location.href.split("#")[1];
  // return console.log(postTilttle)
    // console.log(postTilttle)
  model.state.posts=blogRes.data.data;
 let relatedPost=[]
  let postToRead=model.state.posts.find(post=>post.blogTittle.split(" ").join("-")===postTilttle);
const{ blogArticle,blogTittle,fetureImage,categories }=postToRead;
    model.state.posts.forEach(post=>{
      categories.forEach(readCat => {
        post.categories.forEach(relatedPostcat=>{
          if(readCat===relatedPostcat) relatedPost.push(post);
        })
        
      });
    })
   model.state.relatedPosts=[...new Set (relatedPost)]
   model.state.page = 1;
   model.state.searchResult = pagination.getSearchResultPage(
     model.state.page,
     model.state.relatedPosts,
     true
   );
  //  console.log(model.state.relatedPosts,model.state.searchResult)
   generatePaginationMarkcup(model.state.relatedPosts);

document.title =blogTittle;
let breadCrumb=`<div class="bread-crumb">
<a href="../../blog/">Blog - </a>${categories.map(cat=>`<a href="../../blog/#${cat}">${cat}</a>`).join(" | ")}
</div>`
headerTittle.insertAdjacentHTML("afterbegin",`<div class="bread-crumb-and-header"><h1 class="heading-secondary">${blogTittle}</h1>${breadCrumb}</div>`)

const postToReadMarckup=`
 
 <img
 src="${fetureImage?.url?fetureImage.url:""}"
            alt="${blogTittle}"
            class="post-feture-image"
           
            
            
            />
            ${generateArticle(blogArticle)}
            

`
blogArticleAndOverview.insertAdjacentHTML("afterbegin",`<div class="post-to-read-container">${postToReadMarckup}</div>`)
model.state.allPosts=blogMarckup(model.state.searchResult);
// console.log(model.state.searchResult)
relatedPosts.insertAdjacentHTML("afterbegin",model.state.allPosts.join(""))

generatePaginationMarkcup(model.state.relatedPosts);

window.scrollTo({
  top: 0,
  behavior: "smooth",
});
loaderContainer.classList.add("hideMe")

}
init();
// let date=new Date(block.createdAt).toDateString();


 



relatedPosts.addEventListener("click",function(e){
   if(!e.target.classList.contains("read"))return
  
  let tittle=e.target.dataset.tittle;
  localStorage.removeItem("blogTittle")
  localStorage.setItem("blogTittle",tittle)
  window.location.reload()
 
 })
 paginationBox.addEventListener("click", function (e) {
  const btn = e.target.closest(".btn--inline");
  if (!btn) return;
 
  this.innerHTML = "";
  // let userlist = document.querySelector(".user-list");
  const gotoPage = Number(btn.dataset.goto);
  
  model.state.allPosts=blogMarckup(model.state.relatedPosts);
  model.state.searchResult = pagination.getSearchResultPage(gotoPage,model.state.allPosts,true);
  // getAndGenerateMarckup();
  // return console.log(model.state.searchResult,model.state.relatedPosts)
  relatedPosts.innerHTML = "";
  relatedPosts.insertAdjacentHTML("afterbegin",model.state.searchResult.join(""))

// console.log(model.state.relatedPosts)
  generatePaginationMarkcup(model.state.relatedPosts,true);
});