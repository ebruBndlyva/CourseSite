import { baseUrl } from "./Api/baseUrl.js"
import { getAllDatas } from "./Api/request/users.js"

const logForm = document.querySelector(".logForm")
const logUserName = document.querySelector("#logUserName")
const logPasw = document.querySelector("#logPassword")
const modal = document.querySelector(".course-modal")
const overlay = document.querySelector(".course-overlay")
logForm.addEventListener("submit", async function (e) {
    e.preventDefault()
    let userDatas = await getAllDatas(baseUrl.users)
    let findUser = userDatas.datas.find((value) => value.name == logUserName.value)
    console.log(findUser);
    if (!findUser) {
        alert("UserName is not defined")
        return
    }
    let findPasw = userDatas.datas.find(({ password }) => password == logPasw.value)
    if (!findPasw) {
        alert("Password is not defined")
        return
    }
    localStorage.setItem("userId", JSON.stringify(findUser.id))
    alert("You are successfully logged in")
      modal.style.display = "none"
    overlay.style.display = "none"
})