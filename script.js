const button = document.querySelector("button");
const input = document.querySelector("input");
const task = document.querySelector('.task');


function addTask(){
    if (input.value==''){
        alert("Enter Something")
    }
    else {
        let h3 = document.createElement('h3');
        h3.innerHTML=input.value
        task.append(h3)
        h3.classList.add('taskText')
        input.value='';

        let span = document.createElement('span');
        span.innerHTML="x"
        h3.append(span)
        saveData()
    }

    
}

function makeCheck(ele){
    ele.classList.add('checked')
}


button.addEventListener('click', addTask
)
task.addEventListener('click',function(e){
    if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        saveData()
    } else if (e.target.tagName==='H3') {
        e.target.classList.toggle("checked")
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem('data',task.innerHTML)
}
function showTask(){
    task.innerHTML=localStorage.getItem('data')
}
showTask()