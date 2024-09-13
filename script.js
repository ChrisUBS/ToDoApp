function addTask() {
    // Obtener el valor del campo de texto
    const taskInput = document.getElementById("task-input").value.trim();
    
    // Validar que el campo no esté vacío
    if (taskInput === "") {
        alert("Please enter a valid task.");

        // Limpiar el campo de texto
        document.getElementById("task-input").value = "";
        return;
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");

    // Icono de verificación
    const checkIcon = document.createElement("i");
    checkIcon.classList.add("fas", "fa-check");
    checkIcon.onclick = function() {
        taskText.style.textDecoration = "line-through";
    };

    // Texto de la tarea
    const taskText = document.createElement("p");
    taskText.textContent = taskInput;

    // Icono de eliminar
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash");
    deleteIcon.onclick = function() {
        taskList.removeChild(li);
    };

    // Añadir los elementos al <li>
    li.appendChild(checkIcon);
    li.appendChild(taskText);
    li.appendChild(deleteIcon);

    // Añadir el <li> a la lista
    taskList.appendChild(li);

    // Limpiar el campo de texto
    document.getElementById("task-input").value = "";
}