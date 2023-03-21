// function first() {
//     return new Promise((resolve) => {
//       console.log("1st");
//       resolve();
//     });
//   }
  
//   function second() {
//     return new Promise((resolve) => {
//       console.log("2nd");
//       resolve();
//     });
//   }
  
//   function third() {
//     console.log("3rd");
//   }
  
//   async function fnAsync() {
//     await first();
//      second();
//      await third();
//   }
  
//   fnAsync();


const input = document.querySelector("input"),
img = document.querySelector("img");
console.log(img)


input.addEventListener('change',(e)=>{
  console.log(e)
});

function x(){
var xhr = new XMLHttpRequest();
xhr.open('GET',"images/man-blue.jpg",true);
xhr.onload=function(){
  if(this.status==200){
    console.log(this.responseText);
    img.setAttribute('src',this.responseText)
  }
    }
xhr.send();
  }
