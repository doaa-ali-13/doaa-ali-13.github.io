const searchIcon = document.querySelector('.search-icon')
const searchInput = document.querySelector('.input_section')
console.log(searchIcon)
searchIcon.onclick = ()=>{
    console.log("ghh")
    searchInput.classList.toggle('active')
}

const user = document.querySelector('.user_icon')
const signIn = document.querySelector('.sign-in')

user.onclick = ()=>{
    signIn.classList.toggle('active-sign')
}


const closeSign = document.querySelector('.closed')

closeSign.onclick = ()=>{
    signIn.classList.remove('active-sign')
}