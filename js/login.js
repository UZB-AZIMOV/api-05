const form = document.querySelector(".form")
const inputUsername = document.querySelector(".form__input-username")
const inputPassword= document.querySelector(".form__input-password")
const API__URL = "https://dummyjson.com"


form.addEventListener("submit",async(e) =>{
    e.preventDefault()
    let user = {
        username: inputUsername.value,
        password: inputPassword.value
    }

    let response = await fetch(`${API__URL}/auth/login`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })

    response
          .json()
          .then(res =>{
            if (res.token) {
                localStorage.setItem(`user`, JSON.stringify(res))
                localStorage.setItem(`x-auth-token`, res.token)
                open("/pages/admin.html","_self")
            }else{
                alert("username or password is incorrect")
            }
          })
})