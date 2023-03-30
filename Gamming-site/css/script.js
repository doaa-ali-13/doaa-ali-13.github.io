const searchIcon = document.querySelector('.search-icon')
const searchInput = document.querySelector('.input_section')

searchIcon.onclick = (e)=>{
    searchInput.classList.toggle('active')
}


const user = document.querySelector('.user_icon')
const signIn = document.querySelector('.sign-in')
console.log(signIn)
user.onclick = ()=>{
    signIn.classList.toggle('active-sign')
}

