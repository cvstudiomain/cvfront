const blogSection=document.querySelector(".blog-section")
// console.log(blogSection)
const blogArticleAndOverview=document.querySelector(".blog-article-and-overview")
let headerTittle=document.querySelector(".post-header-tittle")
import * as model from "../js/model.js"
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
  <img src="${block.fetureImage.url}" class="blog-image" alt="blog feature image">
  <h1 class="blog-tittle ">
   ${defineContentLimit(block.blogTittle,55)}
  </h1>
   <p class="blog-overview">
    ${defineContentLimit(inArt[0].data.text,78)}
   </p>
   <a href="../blog/#${blogLocation}" id="${blogLocation}" class="btn-read">Read More</a>
   
 </div>
  `
}) 

return marckup

}

const generateArticle=function(data){  
        return data[0].blocks.map(item=>{
            if(item.type==="paragraph")return`<p class="blog-article-paragraph">${item.data.text}</p>`
  })
}

const init=async function(){
  let blogRes = await axios.post("https://app.cvstudio.io/user/blogs/");
  let postTilttle = localStorage.getItem("blogTittle")

  model.state.posts=blogRes.data.data;
 
  let postToRead=model.state.posts.find(post=>post.blogTittle.split(" ").join("-")===postTilttle);
const{ blogArticle,blogTittle,fetureImage,categories }=postToRead;

headerTittle.insertAdjacentHTML("afterbegin",`<h1 class="heading-secondary">${blogTittle}</h1>`)

const postToReadMarckup=`
 
 <img
 src="${fetureImage.url}"
            alt="${blogTittle}"
            class="post-feture-image"
           
            
            
            />
            ${generateArticle(blogArticle)}
            

`
blogArticleAndOverview.insertAdjacentHTML("afterbegin",postToReadMarckup)
let allPosts=blogMarckup(model.state.posts);
blogSection.insertAdjacentHTML("afterbegin",allPosts)

}
init();
// let date=new Date(block.createdAt).toDateString();


 



blogSection.addEventListener("click",function(e){
   if(!e.target.classList.contains("btn-read"))return
  
  let id=e.target.getAttribute("id");
  localStorage.removeItem("blogTittle")
  localStorage.setItem("blogTittle",id)
  window.location.reload()
 
 })