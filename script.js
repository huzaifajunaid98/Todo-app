function addTask() {
    let input = document.getElementById("taskInput");
    let li = document.createElement("li");
  
    li.textContent = input.value;
  
    // Mark complete
    li.onclick = function () {
      li.classList.toggle("completed");
    };
  
    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.onclick = function () {
      li.remove();
    };
  
    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
  
    input.value = "";
  }