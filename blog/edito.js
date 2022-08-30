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
const featureImg=document.querySelector(".editor-feature-img")
const loaderContainer=document.querySelector(".loaderContainer");
const categoryList=document.querySelector(".category-list");
const addCategoryBtn=document.querySelector(".add-category-btn");



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
 
});
/**
* Saving example
*/




let featureImgFile="";
const blogFromInput={
  blogArticle:"",
  blogTittle:"",
  fetureImage:{},
  categories:[],
  editorId:""
}

const init=async function(){
  // console.log(model.state.user.editor)
  let userData = JSON.parse(localStorage.getItem("user"));
  // console.log(userData)
  //  console.log(userData)
  
  model.state.user.accesstoken = userData.accesstoken;
  model.state.user.email = userData.email;
  model.state.user.siteUserName = userData.siteUserName;
  model.state.user.userid = userData.userid;
  model.state.user.editor=userData.editor;
  if(!model.state.user.editor&&!userData.isGonGon) window.location="home.html"
 
  const catres = await axios.get(`https://app.cvstudio.io/user/get-categories`);
      selectCategory.innerHTML= catres.data.data.map(val=>`<option value="${val.category}">${val.category}</option>`).join("");
}

init()
// console.log(imageUpload,bannerBtn)
addCategoryBtn.addEventListener("click",function(){
  let categoryToAdd=selectCategory.value
   blogFromInput.categories.push(categoryToAdd);
categoryList.insertAdjacentHTML("beforeend",`<li class="category-list-item">${categoryToAdd}</li>`)

})

addNewCategory.addEventListener("click",async function(e){
 let categoryValue=newCategory.value;
 if(categoryValue==="")return
 blogFromInput.categories.push(categoryValue);
 let catres = await axios.post(`https://app.cvstudio.io/user/create-blog-category`,{categoryValue:categoryValue});
console.log(catres)
categoryList.insertAdjacentHTML("beforeend",`<li class="category-list-item">${categoryValue}</li>`)
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
              featureImg.style.backgroundImage=imageUrl;
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
    blogFromInput.editorId=model.state.user.userid
    blogFromInput.blogArticle=await editor.save()
   if(blogFromInput.blogArticle.length===0)return
publishBtn.innerHTML=Loader.loader(true)
  
     let blogRes = await axios.post("https://app.cvstudio.io/user/create-blog", {
      blogFromInput:blogFromInput
    });
    window.location="../blog/home.html"
  })  
  document.querySelector(".log-out").addEventListener("click",()=>{
    localStorage.clear()
    window.location="home.html"
  })
  
  