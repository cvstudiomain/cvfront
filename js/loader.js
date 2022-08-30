export const loader=function(action){
  return`
  <div class="loaderContainer ${action===false?"hideMe":""}">
  <div class="loader"></div>
</div>
  `
}