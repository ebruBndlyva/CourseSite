

const signIn = document.querySelector(".signIn")
const modal = document.querySelector(".course-modal")
const overlay = document.querySelector(".course-overlay")
const closeBtn = document.querySelector(".close-btn")
const headerContact = document.querySelector(".header-contact");


signIn.addEventListener("click", function () {
    modal.style.display = "block"
    overlay.style.display = "block"
})
closeBtn.addEventListener("click", function () {
    modal.style.display = "none"
    overlay.style.display = "none"
})

window.addEventListener("scroll",function(){
    let scrollPosition = window.scrollY
  if(scrollPosition>100){
    headerContact.style.display = "none"
  }else{
       headerContact.style.display = "block"
  }
})

