const admin = document.querySelector(`.admin`)
//Protect route
let token = localStorage.getItem("x-auth-token")

function checkToken() {
    if (!token) {
        window.location.replace("/pages/login.html")
    }
}
checkToken()


function handleLogout() {
    localStorage.removeItem("x-auth-token")
    open("/pages/login.html", "_self")
}

function adminData() {
    let userData = JSON.parse(localStorage.getItem("user"))
    console.log(userData);
    admin.innerHTML = `
    <div class ="card">
    <div class="img">  
    <img src=${userData.image} alt="">
    </div>
    <div class ="info">
    <h3><i class="fa-solid fa-user"></i> : ${userData.firstName}</h3>    
    <h3><i class="fa-regular fa-user"></i> : ${userData.lastName}</h3>   
    <p><i class="fa-solid fa-envelope"></i> : ${userData.email}</p></div>
    </div>
    </div>
    `
}

adminData()
