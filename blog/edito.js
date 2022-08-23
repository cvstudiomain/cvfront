import * as model from "../js/model.js";
const bannerBtn=document.querySelector("#banner-botton");
const blogTittle=document.querySelector(".blog-title");
const blogArticle=document.querySelector(".blog-article");
const imageUpload=document.querySelector("#image-upload");
const publishBtn=document.querySelector(".publish-btn");
const banner=document.querySelector(".banner")
// console.log(imageUpload,bannerBtn)
let allFileUploaders=[bannerBtn, imageUpload];
allFileUploaders.forEach(function (imageIn) {
    imageIn.addEventListener("change", async function (e) {
      e.preventDefault();
  
      try {
        const file = e.target.files[0];
        console.log(e.target)
        if (!file) return alert("File not exist.");
        if (file.size > 1024 * 1024) return alert("Size too large");
        if (
          file.type !== "image/jpg" &&
          file.type !== "image/png" &&
          file.type !== "image/jpeg"
        )
          return alert("File type not supported");
  
        model.state.user.file = file;
        let reader = new FileReader();
        reader.onloadend = function () {
       let imageUrl= `url(${reader.result})`
             if(e.target.classList.contains("banner-botton")){
                                                   
              banner.style.backgroundImage=imageUrl;
             } 
             if(e.target.classList.contains("image-upload")){

             }
      };
        if (file) {
          reader.readAsDataURL(file);
        }
      } catch (error) {
        console.log(error.message);
      }
    });
  });
  