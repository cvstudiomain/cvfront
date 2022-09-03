// let date=new Date(block.createdAt).toDateString();
const blogSection=document.querySelector(".blog-section")
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
   <a href="../blog/post/#${blogLocation}" id="${blogLocation}" class="btn-read"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>${" "}Read More</a>
   
 </div>
  `
}) 
// console.log(marckup)
return marckup

}

const init=async function(){
  let blogRes = await axios.post("https://app.cvstudio.io/user/blogs/");
  // return console.log(blogRes)
  let allPosts=blogMarckup(blogRes.data.data);
  blogSection.insertAdjacentHTML("afterbegin",allPosts)

}


init()
 document.querySelector(".blog-section").addEventListener("click",function(e){
   if(!e.target.classList.contains("btn-read"))return
   let id=e.target.getAttribute("id");
  console.log(id)

   localStorage.removeItem("blogTittle")
   localStorage.setItem("blogTittle",id)

 })