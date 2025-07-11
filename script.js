


const toDoInput = document.getElementById("toDoInput")
const toDoList = document.getElementById("toDoList")
const addItemBtn = document.getElementById("addItemBtn").addEventListener("click", ()=> {
    const item = toDoInput.value.trim();
    if(item == ""){
        alert("empty item can't be added")
        return
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = item;


    const toDoDeleteBtn = document.createElement("button");
    toDoDeleteBtn.textContent = "Delete";
    toDoDeleteBtn.classList.add("delete-btn");

    const toDoEditBtn = document.createElement("button");
    toDoEditBtn.textContent = "Edit";
    toDoEditBtn.classList.add("edit-btn");

toDoDeleteBtn.addEventListener("click", ()=>{
    toDoList.removeChild(li);
})

toDoEditBtn.addEventListener("click", ()=>{
    const prevText = span.textContent;
    const editInputField = document.createElement("input")
    editInputField.value = prevText;

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.classList.add("cancel-btn");
    

    const okBtn = document.createElement("button");
    okBtn.textContent = "OK";
    okBtn.classList.add("ok-btn");

    li.innerHTML= "";
    li.appendChild(editInputField)
    li.appendChild(okBtn)
    li.appendChild(cancelBtn)
    

    cancelBtn.addEventListener("click", ()=>{
        li.innerHTML = ""; 
      li.appendChild(span);
      li.appendChild(toDoEditBtn);
      li.appendChild(toDoDeleteBtn)
    })
    okBtn.addEventListener("click", ()=>{
        if(editInputField.value.trim() != ""){
            span.textContent = editInputField.value.trim();
            li.innerHTML = "";
            li.appendChild(span);
            li.appendChild(toDoEditBtn);
            li.appendChild(toDoDeleteBtn);
        }

    });
    
})

li.appendChild(span)
li.appendChild(toDoEditBtn)
li.appendChild(toDoDeleteBtn)
toDoList.appendChild(li)


toDoInput.value = "";

   



});