const inputToDo = document.getElementById("inputToDo");
const addBtn = document.getElementById("addBtn");
const toDoLists = document.getElementById("toDoLists");
const deleteAllBtn = document.getElementById("deleteAllBtn");

addBtn.onclick = () => {
  
  if (inputToDo.value !== "") {
    let pTag = document.createElement("p");
    pTag.innerHTML = `<input type="checkbox"> ${inputToDo.value} <button class="deleteBtn">Delete</button>`;
    pTag.setAttribute("class", "listItem")
    toDoLists.appendChild(pTag);
    inputToDo.value = "";
    
    
    const deleteBtns = document.querySelectorAll(".deleteBtn");
    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.onclick = () => {
        let listItem = deleteBtn.parentNode;
        let confirmtion = confirm("Are you sure you want to delete the item?");
      
        if (confirmtion) {
          toDoLists.removeChild(listItem);
        }
      };
    })
    
  } else {
    alert("Please write something!")
  }
  
};

deleteAllBtn.onclick = () => {
  const checedkboxes = document.querySelectorAll(`input[type="checkbox"]:checked`);
  checedkboxes.forEach((checkedbox) => {
    if (checedkboxes) {
      const selectedcheckbox = checkedbox.parentNode;
      const confirmtion = confirm("Are you sure you want to delete the items?")
      
      if (confirmtion) {
        toDoLists.removeChild(selectedcheckbox);
      }
      
    } else {
      alert("Please select item first!")
    }
    
  })

};
