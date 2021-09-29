int num1=0;
let num2=0;

/*show numbers*/
let numbers = document.getElementsByClassName("num");
let entry = document.getElementById("res");

for (let i=0; i<numbers.length; i++) {
  numbers[i].addEventListener("click", function(){
    let buttonValue = this.textContent;
    if (buttonValue === "0") {
     entry.innerHTML = "0000";
    } else {
      entry.innerHTML = (entry.innerHTML+buttonValue).substr(-1);
    }
  });
}



/*select operation*/
let operations = document.getElementsByClassName("op");
let entry = document.getElementById("res");

for (let i=0; i<operations.length; i++) {
  operations[i].addEventListener("click", function(){
    let buttonValue = this.textContent;
    if (buttonValue === "+") {
     operation[0]=1;
    } 
    
    else if(buttonValue === "-") {
     operation[1]=1; 
    }
      
    else if(buttonValue === "*") {
     operation[2]=1;
      }
      
    else if(buttonValue === "/") {
     operation[3]=1; }
  });
}


/*add*/

let operations = document.getElementsByClassName("op");
let entry = document.getElementById("res");

for (let i=0; i<operations.length; i++) {
  operations[i].addEventListener("click", function(){
    let buttonValue = this.textContent;
    if (buttonValue === "+") {
     operation[0]=1;
    } 
    
    else if(buttonValue === "-") {
     operation[1]=1; 
    }
      
    else if(buttonValue === "*") {
     operation[2]=1;
      }
      
    else if(buttonValue === "/") {
     operation[3]=1; }
  });
}
