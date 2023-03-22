const addbtn = document.querySelector("i.add");
addbtn.onclick = ()=>{
    let input = document.querySelector(".input")
    let list = document.querySelector(".list")
    input.classList.remove("dactive")
    input.classList.add("active")
    list.classList.remove("dactive_ul")
    list.classList.add("active_ul")
}

const submitbtn = document.querySelector("button.submit_task");
submitbtn.onclick = ()=>{
    c1 =addTask()
    if(c1){
        console.log("yes")
        let notification = document.querySelector(".notification");
        notification.innerHTML+=`<div class="success active_notif">Your task is added successfully!</div>`
        let sec = 0
        let id=setInterval(()=>{
        sec++;
            if (sec===10){
                let success = document.querySelector(".success");
                success.remove()
                clearInterval(id)
            }
        },1000)
    }


}

onkeydown = (e)=>{
    console.log(e)
    if(e.key ==='Enter'){
    c1 =addTask()
    if(c1){
        let notification = document.querySelector(".notification");
        notification.innerHTML+=`<div class="success active_notif">Your task is added successfully!</div>`
        let sec = 0
        let id=setInterval(()=>{
        sec++;
            if (sec===10){
                let success = document.querySelector(".success");
                success.remove()
                clearInterval(id)
            }
        },1000)
    }}


}

const tasks = document.querySelectorAll(".list li .time");
tasks.forEach(task => {
    let timeValue = task.getAttribute("time");
    countDown(timeValue,task)
    
});
function checkit(e){
    let icon = e.parentElement,
    li = icon.parentElement,
    time = li.querySelector(".time");
    icon.remove();
    time.remove();
    li.insertAdjacentHTML('afterend', '<div></div>');
    li.classList.add("taskdoneLi")

}
function deletefun(e){
    let icon = e.parentElement,
    li = icon.parentElement,
    time = li.querySelector(".time");
    icon.remove();
    time.remove();
    li.classList.add("cancled")
}
const shadow= document.querySelector(".container .shadow");
function editTask(e){
    shadow.classList.add("active")
    shadow.parentElement.style.overflowY = "hidden";
    let icons = e.parentElement
    let li = icons.parentElement
    li.classList.add("activeLi")
    let p = li.querySelector("p")
    let time = li.querySelector(".time")
    let taskValueprev = p.textContent
    let timeValueprev = time.getAttribute("time-set")
    p.remove();
    time.remove();
    
    li.insertAdjacentHTML("afterbegin",`<div class="form">
                            <input type="text">
                            <input type="time">
                        </div>`)
    let taskinput =li.querySelector(".form input[type='text']")
    let timeinput =li.querySelector(".form input[type='time']")
    taskinput.value = taskValueprev;
    timeinput.value = timeValueprev;
    taskinput.onkeypress= () => {
        console.log(taskinput.value)
    }
   
    icons.innerHTML = `<i onclick="savechanges(this,'${taskValueprev}','${timeValueprev}')"; class="delete fas fa-times"></i>
    <i onclick="savechanges(this,'${taskValueprev}','${timeValueprev}')"; class="check fas fa-check"></i>`
}
function savechanges(e,taskPrev,timePrev){
    shadow.classList.remove("active")
    shadow.parentElement.style.overflowY = "scroll";
    console.log(e)
    let lifather = e.parentElement.parentElement
    let taskInput = lifather.querySelector(".form input[type='text']"),
    timeInput = lifather.querySelector(".form input[type='time']");
    let timeValue;
    let taskValue;  
    if (e.classList.contains("delete"))
     {  let check1 = false; 
        timeValue = timePrev;
        taskValue = taskPrev; 
        //***************
    let dis = validTime(timeValue)
    if(taskValue.trim()!=0 &&(timeValue===""||dis>0)){
        check1=true
        let li = addTaskElement(taskValue,timeValue)
        console.log(li)
        lifather.after(li)
        lifather.remove()
        }
    else{
        notification(taskValue,dis)
    }
//***************
    }

    else
    {    
    let check1 = false; 
    taskValue = taskInput.value;  
    timeValue = timeInput.value;
    //***************
    let dis = validTime(timeValue)
        if(taskValue.length>0 &&(timeValue===""||dis>0)){
            check1=true
            let li = addTaskElement(taskValue,timeValue)
            console.log(li)
            lifather.after(li)
            lifather.remove()
            }
        else{
            notification(taskValue,dis)
        }
    //***************
    return check1}}
function addTask(){
    let check1 =false
    let task = document.querySelector(".input input[type='text']");
    let time = document.querySelector(".input input[type='time']");
    let input = document.querySelector(".input");
    let list = document.querySelector(".list")
    let taskValue = task.value;
    let timeValue = time.value;
    let dis = validTime(timeValue)
    if(taskValue.trim()!=0 &&(timeValue===""||dis>0)){
        check1=true
        let li = addTaskElement(taskValue,timeValue)
        list.append(li)
        task.value="";
        time.value="";

        input.classList.remove("active")
        input.classList.add("dactive")
        list.classList.remove("active_ul")
        list.classList.add("dactive_ul")
    }
else{
    notification(taskValue,dis)
}
return check1
}
function move() {
    const element = document.querySelector(".list")
    let li = element.querySelector("li:last-of-type")
    let timer = li.querySelector(".timer")
    
    console.log(timer)
    let width = 0;
    let id = setInterval(frame, Math.floor(dis*0.01));
    function frame() {
        console.log("Hi")
      if (width == 100) {
          console.log("finish")
        clearInterval(id);
      } else {
        width+=1;
        timer.style.width = width + '%';
      }
  }
}
function addTaskElement(taskValue,timeValue){
    let li = document.createElement("li"),
        div_time = document.createElement("div"),
        p = document.createElement("p"),
        div_icon = document.createElement("div");
  li.className = "task";
  div_time.className = "time";
  if (timeValue==""){
    div_time.setAttribute("time","no deadline")
    div_time.setAttribute("time-set","")}
else{
    div_time.setAttribute("time",timeValue)
    div_time.setAttribute("time-set",timeValue)
    countDown(div_time.getAttribute("time-set"),div_time)
  }
  p.textContent = taskValue
  div_icon.className = "icons";
  div_icon.innerHTML+=`<i onclick="editTask(this)" class="edit fas fa-pen"></i><i class="delete fas fa-times" onclick="deletefun(this)"></i><i class="check fas fa-check" onclick=checkit(this)></i>`
  
  li.append(div_time)
  li.append(p)
  li.append(div_icon)
  return li
}
function countDown(timeValue,time_div){let id =setInterval(function() {
    let li = time_div.parentElement
    let distance = validTime(timeValue)
  
    // Time calculations for days, hours, minutes and seconds
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    time_div.setAttribute("time",`${hours}:${minutes}:${seconds}`)
    
  
    // If the count down is finished, write some text
    if (distance <= 0) {
      clearInterval(id);
      time_div.setAttribute("time","Time is out")
      time_div.classList.add("timeout")
      li.classList.add("timeoutLi")
      li.querySelector(".icons").remove()
    }
}, 1000,time_div);}

function notification(taskValue,dis){
    let notification = document.querySelector(".notification");
    // let timenotif = document.querySelector(".timeAdd");

    if (taskValue.trim()==0){
        notification.innerHTML+=`<div class="taskAdd error active_notif"> please Enter your Task first!</div>`
        let sec = 0
        let id=setInterval(()=>{
        sec++;
        if (sec===10){
            let tasknotif = document.querySelector(".taskAdd");
            tasknotif.remove()
            clearInterval(id)
        }
    },1000)
    }
    else{
        console.log("none")
    }
    if (dis<=0){
        notification.innerHTML+=`<div class="timeAdd error active_notif"> please Enter Time before the End of the day and after the current time</div>`
        let sec = 0
        let id=setInterval(()=>{
        sec++;
        if (sec===10){
            let timenotif = document.querySelector(".timeAdd");
            timenotif.remove()
            clearInterval(id)
        }
    },1000)
    }
    else{
        console.log("none")
    }
    
}
  function validTime(timeValue){
      let date = new Date()
    deadline = date.getMonth()+1+" "+date.getDate()+ " "+date.getFullYear()+ " "+timeValue+":00"
    let date1 = new Date(deadline).getTime()
    let date2 = new Date();
    current = date2.getTime()
    dis = date1 - date2
    return dis
}