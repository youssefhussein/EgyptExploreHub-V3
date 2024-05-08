
const iframe=document.getElementById('frame')
function addPKG() {
    
  
    iframe.src='addPKG.html'
    


}
function editPKG() {
    iframe.style.backgroundColor= "whitesmoke";
    iframe.src='editPKG.html'
    

}
function removePKG() {
    iframe.style.backgroundColor= "whitesmoke";
    iframe.src='removePKG.html'
    
}
function changeRequire( disableme,buttonID) {
    const element = document.getElementById(disableme)
   element.required = !element.required
   element.disabled=!element.disabled
   if (element.disabled) {
    document.getElementById(buttonID).classList.add("btn-outline-danger")
    document.getElementById(buttonID).classList.remove("btn-outline-secondary")
   }
   else{
    document.getElementById(buttonID).classList.add("btn-outline-secondary")
    document.getElementById(buttonID).classList.remove("btn-outline-danger")
   }
}