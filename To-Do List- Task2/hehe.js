document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.querySelector(".inpbox");
    const listContainer = document.querySelector(".listcon");
    const addButton = document.querySelector("button");

    addButton.addEventListener("click", function () {
        const taskText = inputBox.value.trim();
        if (taskText !== "") 
        {
            const li = document.createElement("li");
            li.textContent = taskText;
            const closeIcon = document.createElement("span");
            closeIcon.innerHTML = "\u00d7";
            closeIcon.className = "close";
            closeIcon.addEventListener("click", function () 
            {
                li.remove();
            });
            li.appendChild(closeIcon);
            listContainer.appendChild(li);
            inputBox.value = "";
        } 
        
        else {
            alert("You must write something!");
        }
    });
});
