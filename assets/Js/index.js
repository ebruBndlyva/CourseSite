import { baseUrl } from "./Api/baseUrl.js"
import { getAllDatas } from "./Api/request/users.js"

const signIn = document.querySelector(".signIn")
const modal = document.querySelector(".course-modal")
const overlay = document.querySelector(".course-overlay")
const closeBtn = document.querySelector(".close-btn")
const headerContact = document.querySelector(".header-contact");
const btns = document.querySelector(".contact-btns")
let userId = localStorage.getItem("userId")
console.log(userId);
if (userId) {
  getAllDatas(baseUrl.users)
    .then(res => {
      let userData = res.datas
      let findUser = userData.find(({ id }) => id == userId)
      btns.innerHTML = `
 <span>${findUser.name}</span>
 <a href="#" style="color: red;" class="out">LogOut</a>
`
      document.querySelector(".out").addEventListener("click", function () {
        btns.innerHTML = `
        <a href="#" class="signIn"><i class="fa-solid fa-lock"></i> Sign In</a>
         <span>|</span>
          <a href="./registration.html" class="signUp">Sign Up</a> 
       `
      })
    })

} else {
  btns.innerHTML = `
  <a href="#" class="signIn"><i class="fa-solid fa-lock"></i> Sign In</a>
   <span>|</span>
    <a href="./registration.html" class="signUp">Sign Up</a> 
 `
}


signIn.addEventListener("click", function () {
  modal.style.display = "block"
  overlay.style.display = "block"
})
closeBtn.addEventListener("click", function () {
  modal.style.display = "none"
  overlay.style.display = "none"
})

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY
  if (scrollPosition > 100) {
    headerContact.style.display = "none"
  } else {
    headerContact.style.display = "block"
  }
})

