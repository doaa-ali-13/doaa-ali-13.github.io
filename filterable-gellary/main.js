const ul = document.querySelector("ul"),
      li = ul.querySelectorAll(".item");
    //   livalue = li.forEach(element => {
    //       console.log(element.textContent)
    //   });
const imgdiv = document.querySelectorAll(".img");
    //   imgatt = imgdiv.forEach(img =>{
    //     //   console.log(img.getAttribute("data").split(","))
    //   })

window.onload=()=>{
    // let activeli = ul.querySelector(".active")
    // imgdiv.forEach(element=>{
    //     attrbs=element.getAttribute("data").split(",")
    //     if(activeli.textContent.toLocaleLowerCase()=="all"){
    //         element.classList.add("show")
    //         element.classList.remove("hide")}})
    ul.onclick=(selected)=>{
        if(selected.target.classList.contains("item")){
            console.log(selected.target.textContent)
            ul.querySelector(".active").classList.remove("active")
            selected.target.classList.add("active")
            filtername = ul.querySelector(".active").textContent;
            imgdiv.forEach(element=>{

                    let attrbs=element.getAttribute("data").split(",")

                    if(filtername.toLocaleLowerCase()=="all")
                    {
                        element.classList.add("show")
                        element.classList.remove("hide")
                    }
                    else
                    {
                    let containatt=false;
                    attrbs.forEach(att=>
                    {   
                        if(att == filtername.toLocaleLowerCase())
                        {   containatt=true
                            console.log(attrbs)
                            console.log(containatt)
                            console.log(att)
                            element.classList.add("show")
                            element.classList.remove("hide")
                        }
                        else if (containatt==false)
                        {
                            element.classList.add("hide")
                            element.classList.remove("show")
                        }
                    })
                    }
                })
            // activeli = ul.querySelector(".active")
            // console.log(activeli.textContent.toLocaleLowerCase())
            // imgdiv.forEach(element=>{
            //     attrbs=element.getAttribute("data").split(",")
            //     attrbs.forEach(att=>{
            //         if(att == activeli.textContent.toLocaleLowerCase()){
            //             element.classList.add("show")
            //             element.classList.remove("hide")}
            
            // })})
                }}
           
                imgdiv.forEach(img=>{
                    img.onclick=(selected)=>{
                    const boximage = document.querySelector(".open"),
                    cat = boximage.querySelector(".details"),
                    catspan= cat.querySelector("span"),
                    shadow = document.querySelector(".shadow"),
                    close = cat.querySelector("i");
                    close.onclick=()=>{
                        boximage.classList.add("hide");
                        boximage.classList.remove("show");
                        shadow.classList.remove("show")
                    }
                    imgreplaced = boximage.querySelector("img");
                    catimg= img.getAttribute("data").split(",");
                    boximage.classList.add("show");
                    boximage.classList.remove("hide");
                    shadow.classList.add("show")

                    catspan.textContent=""
                    catimg.forEach(tag=>{
                        catspan.innerHTML +=`<span>${tag}</span>`
                    })
                    newsrc=selected.target.getAttribute("src");
                    imgreplaced.setAttribute("src",newsrc);
                    
                }})
    
            
            }
