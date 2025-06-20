function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const listItem = createTaskElement(taskText);
  document.getElementById("task-list").appendChild(listItem);
  input.value = "";
}

function createTaskElement(taskText, isCompleted = false) {
  const listItem = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  if (isCompleted) {
    taskSpan.classList.add("completed-task");
  }

  const buttonGroup = document.createElement("div");
  buttonGroup.className = "task-buttons";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    listItem.remove();
  };

  if (!isCompleted) {
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";
    completeBtn.onclick = function () {
      const completedItem = createTaskElement(taskText, true);
      document.getElementById("completed-list").appendChild(completedItem);
      listItem.remove();
    };
    buttonGroup.appendChild(completeBtn);
  }

  buttonGroup.appendChild(deleteBtn);
  listItem.appendChild(taskSpan);
  listItem.appendChild(buttonGroup);

  return listItem;
}
