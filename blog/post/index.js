const relatedPosts=document.querySelector(".related-posts")
// console.log(relatedPosts)
const blogArticleAndOverview=document.querySelector(".blog-article-and-overview")
let headerTittle=document.querySelector(".post-header-tittle")
import * as model from "../../js/model.js"
const defineContentLimit=(content,limit)=>{
  let dots="..."
  if(content.length>limit)return content.substring(0,limit) + dots;
  return content+dots;
}
const blogMarckup=(data)=>{
// return console.log(data)
  let marckup=data.map(block=>{
    // return console.log(block.blogArticle)
    let inArt=block.blogArticle[0].blocks.filter(item=>item.type==="paragraph")
    let blogLocation=block.blogTittle.split(" ").join("-")
   
    
  return`
  <div class="blog-card">
  <img src="${block.fetureImage?.url?block.fetureImage.url:""}" class="blog-image" alt="blog feature image">
  <h1 class="blog-tittle ">
   ${defineContentLimit(block.blogTittle,55)}
  </h1>
   <p class="blog-overview">
    ${defineContentLimit(inArt[0].data.text,78)}
   </p>
   <a href="../../blog/post/#${blogLocation}" id="${blogLocation}" class="btn-read"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>${" "}Read More</a>
   
 </div>
  `
}) 

return marckup

}

const generateArticle=function(data){  
  console.log(data)
        return data[0].blocks.map(item=>{
         
            if(item.type==="paragraph")return`<p class="blog-article-paragraph">${item.data.text}</p>`
            if(item.type==="header")return`<h3 class="blog-article-header heading-tertiary">${item.data.text}</h3>`
            
          }).join("");
}

const init=async function(){
  let blogRes = await axios.post("https://app.cvstudio.io/user/blogs/");
  let postTilttle = localStorage.getItem("blogTittle")

  model.state.posts=blogRes.data.data;
 
  let postToRead=model.state.posts.find(post=>post.blogTittle.split(" ").join("-")===postTilttle);
const{ blogArticle,blogTittle,fetureImage,categories }=postToRead;
document.title =blogTittle;
headerTittle.insertAdjacentHTML("afterbegin",`<h1 class="heading-secondary">${blogTittle}</h1>`)

const postToReadMarckup=`
 
 <img
 src="${fetureImage?.url?fetureImage.url:""}"
            alt="${blogTittle}"
            class="post-feture-image"
           
            
            
            />
            ${generateArticle(blogArticle)}
            

`
blogArticleAndOverview.insertAdjacentHTML("afterbegin",`<div class="container">${postToReadMarckup}</div>`)
let allPosts=blogMarckup(model.state.posts);
relatedPosts.insertAdjacentHTML("afterbegin",allPosts)
window.scrollTo({
  top: 0,
  behavior: "smooth",
});

}
init();
// let date=new Date(block.createdAt).toDateString();


 



relatedPosts.addEventListener("click",function(e){
   if(!e.target.classList.contains("btn-read"))return
  
  let id=e.target.getAttribute("id");
  localStorage.removeItem("blogTittle")
  localStorage.setItem("blogTittle",id)
  window.location.reload()
 
 })