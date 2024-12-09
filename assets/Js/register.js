import { baseUrl } from "./Api/baseUrl.js"
import { getAllDatas, PostData } from "./Api/request/users.js"


const regForm = document.querySelector(".regForm")
const regUserName = document.querySelector("#userName")
const regEmail = document.querySelector("#email")
const regPasw = document.querySelector("#password")
const regFirstName = document.querySelector("#firstName")
const gender = document.querySelector("#gender")
const address = document.querySelector("#addres")
const lastName = document.querySelector("#lastName")
const rePasw = document.querySelector("#rePasw")
const birthday = document.querySelector("#birthday")
const phone = document.querySelector("#phone")


regForm.addEventListener("submit", function (e) {
    e.preventDefault()

    let newUser = {
        name: regUserName.value,
        email: regEmail.value,
        password: regPasw.value,
        firstName: regFirstName.value,
        gender: gender.value,
        address: address.value,
        lastName: lastName.value,
        rePasw: rePasw.value,
        birthday: birthday.value,
        phone: phone.value
    }
    let findUser = null;
    getAllDatas(baseUrl.users, newUser)
        .then(res => {
            let userDatas = res.datas
            findUser = userDatas.find((value) => value.email == regEmail.value)
            if (!findUser) {
                PostData(baseUrl.users, newUser)
                    .then(() => {
                        window.location.href = "./index.html"

                    })

            } else {
                alert("Bu emaille qeydiyyatdan kecilmisdir!")

            }
        })



}
)

