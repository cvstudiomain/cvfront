// import EditorJS from '@editorjs/editorjs';
import * as Loader from "../js/loader.js";
import * as model from "../js/model.js";

const blogTittle=document.querySelector(".blog-title");
const blogArticle=document.querySelector(".blog-article");
const imageUpload=document.querySelector("#image-upload");
const publishBtn=document.querySelector(".publish-btn");
const selectCategory=document.querySelector("#select-category");
const newCategory=document.querySelector("#new-category")
const addNewCategory=document.querySelector(".new-category-btn");
const featureImg=document.querySelector(".editor-feature-img");
const theFeatureImg=document.querySelector(".the-feature-img");
const loaderContainer=document.querySelector(".loaderContainer");
const categoryList=document.querySelector(".category-list");
const addCategoryBtn=document.querySelector(".add-category-btn");
let featureImgFile="";
const blogFromInput={
  id:"",
  blogArticle:"",
  blogTittle:"",
  fetureImage:{},
  categories:[],
  editorId:"",
  update:false
}
let allCategories=[];
const generateCategories=function(categories){
  categoryList.innerHTML="";
  categories.forEach(cat=>{
    if(cat) categoryList.insertAdjacentHTML("beforeend",`<li class="category-list-item"><span class="cat-item" >${cat}</span><span class="btn-delete-cat-item" id="${cat}"><i class="fa fa-trash" aria-hidden="true"></i></span></li>`)

  })
}
const generateSelectCategories=function(categories){
  selectCategory.innerHTML="";
  categories.forEach(cat=>{
    if(cat) selectCategory.insertAdjacentHTML("beforeend",`<option value="${cat.category}">${cat.category}<span class="btn-delete-cat-item" id="${cat.category}"><i class="fa fa-trash" aria-hidden="true"></i></span></option>`)

  })
}
categoryList.addEventListener("click",e=>{
 let catId=e.target.closest(".btn-delete-cat-item");
 if(!catId)return;
 catId=catId.id
  blogFromInput.categories=blogFromInput.categories.filter(cat=>cat!==catId);
  generateCategories(blogFromInput.categories);
  console.log(blogFromInput)
})
let blogRes = await axios.post("https://app.cvstudio.io/user/blogs/");
model.state.posts = blogRes.data.data;

let postId=location.href.split("#")[1]
let initialBlock={};
if(postId){
  blogFromInput.update=true;
  publishBtn.innerText="Update"
  model.state.posts.forEach(post=>{if(post._id===postId){
    blogTittle.innerText=post.blogTittle;
    blogFromInput.fetureImage=post.fetureImage;
    blogFromInput.id=post._id;
    initialBlock= post.blogArticle[0];
    theFeatureImg.src=blogFromInput.fetureImage.url;
    blogFromInput.categories=post.categories
    generateCategories(blogFromInput.categories)
    
  }})
  
}

let editor = new EditorJS({
 /**
  * Wrapper of Editor
  */
 holderId: 'editorjs',
 /**
  * Tools list
  */
 tools: {
   /**
    * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
    */
   header: {
     class: Header,
     inlineToolbar: ['link'],
     config: {
       placeholder: 'Header'
     },
     shortcut: 'CMD+SHIFT+H'
   },
   /**
    * Or pass class directly without any configuration
    */
   image: {
     class: SimpleImage,
     inlineToolbar: ['link'],
   },
   list: {
     class: List,
     inlineToolbar: true,
     shortcut: 'CMD+SHIFT+L'
   },
   checklist: {
     class: Checklist,
     inlineToolbar: true,
   },
   quote: {
     class: Quote,
     inlineToolbar: true,
     config: {
       quotePlaceholder: 'Enter a quote',
       captionPlaceholder: 'Quote\'s author',
     },
     shortcut: 'CMD+SHIFT+O'
   },
  
   embed: Embed,
 },
 /**
  * This Tool will be used as default
  */
 // initialBlock: 'paragraph',
 /**
  * Initial Editor data
  */
  data:initialBlock? initialBlock:{}
 
});
/**
* Saving example
*/





const init=async function(){
  // console.log(model.state.user.editor)
  let userData = JSON.parse(localStorage.getItem("user"));
  
  // console.log(userData)
  
  
  // return console.log(model.state.editor, userData.isGonGon)
  if(userData?.editor!=="true"&&!userData?.isGonGon) return window.location="../blog/"
   if(!userData.isGonGon)model.state.user.userid=userData.userid;
  //  console.log(model.state.user.userid);
  const catres = await axios.get(`https://app.cvstudio.io/user/get-categories`);
  allCategories=catres;   
  generateSelectCategories(catres.data.data)
  // selectCategory.innerHTML= catres.data.data.map(val=>`<option value="${val.category}">${val.category}</option>`).join("");
 
}

init()
let categoryToAdd=[]

addCategoryBtn.addEventListener("click",function(){
  categoryToAdd=selectCategory.value
   blogFromInput.categories.push(categoryToAdd);
   generateCategories(blogFromInput.categories);

})

addNewCategory.addEventListener("click",async function(e){
 let categoryValue=newCategory.value;
 if(categoryValue==="")return
 
 let categoryExist=allCategories.data.data.some(cat=>cat.category.toLowerCase()===categoryValue.toLowerCase());
 if(categoryExist) return alert("Category Already Exist")
 blogFromInput.categories.push(categoryValue);
 generateCategories(blogFromInput.categories)
 let catres = await axios.post(`https://app.cvstudio.io/user/create-blog-category`,{categoryValue:categoryValue});
console.log(catres)
selectCategory.insertAdjacentHTML("afterbegin", `<option value=${categoryValue}>${categoryValue}</option>`)
newCategory.value="";
newCategory.focus()
})

featureImg.insertAdjacentHTML("afterbegin",Loader.loader(false))


    featureImg.addEventListener("change", async function (e) {
      e.preventDefault();
  
      try {
        const file = e.target.files[0];
        // console.log(e.target)
        if (!file) return alert("File not exist.");
        if (file.size > 1024 * 1024) return alert("Size too large");
        if (
          file.type !== "image/jpg" &&
          file.type !== "image/png" &&
          file.type !== "image/jpeg"
        )
          return alert("File type not supported");
  
        // model.state.user.file = file;
        let reader = new FileReader();
        reader.onloadend = async function () {
       let imageUrl= `url(${reader.result})`
      
              featureImgFile=file                                        
            let lc=featureImg.querySelector(".loaderContainer")
            
            lc.classList.remove("hideMe")
              blogFromInput.fetureImage=await uploadBlogImg(featureImgFile)
              theFeatureImg.src=reader.result;
             lc.classList.add("hideMe")
           
      };
        if (file) {
          reader.readAsDataURL(file);
        }
      } catch (error) {
        console.log(error.message);
      }
    });


  const uploadBlogImg=async function(imgFile) {
    let formData = new FormData();
    let token = model.state.user.token;
    formData.append("file", imgFile);
    let res = await axios.post("https://app.cvstudio.io/upload/", {
      imageType: imgFile.type,
    });
    let url = res.data.uploadUrl;
    // console.log(url)
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: imgFile,
    });
    let imgUrl = { url: url.split("?")[0] };
    // return console.log(imgUrl);

    // console.log(res.data.uploadUrl,url,imgUrl)

return imgUrl;
  }

 
  publishBtn.addEventListener("click",async e=>{
    blogFromInput.blogTittle=blogTittle.value;
    blogFromInput.editorId=model.state.user.userid?model.state.user.userid:"admin"
    blogFromInput.blogArticle=await editor.save()
   if(blogFromInput.blogArticle.length===0)return
publishBtn.innerHTML=Loader.loader(true)
  // return console.log(blogFromInput)
     let blogRes = await axios.post("https://app.cvstudio.io/user/create-blog", {
      blogFromInput:blogFromInput
    });
    if(blogRes) window.location.reload()
  })  
  document.querySelector(".log-out").addEventListener("click",()=>{
    localStorage.clear()
    window.location="index.html"
  })
  
  