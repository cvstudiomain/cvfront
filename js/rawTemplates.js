import * as temMarckup from "./rAndcGenerator.js";

let html=document.querySelector("html");

html.style.fontSize="8px";
let link=location.href
let items=link.split("/#")[1].split("--")
let id=items[1];
let template=items[0]
console.log(template);
const templatesRes = await axios.post(`https://app.cvstudio.io/resume/web-${template}/:${id}`);
let webViewMarckup=temMarckup.createPdfMarckup(templatesRes.data.data[0])
document.querySelector(".container").insertAdjacentHTML("afterbegin",webViewMarckup)