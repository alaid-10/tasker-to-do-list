(() => {
    const addButton = document.getElementById("addbtn");
    const input = document.getElementById("taskinput");
    const list = document.getElementById("tasklist");
    const taskCount = document.getElementById("task-count");
    const progress = document.getElementById("progress");
    const storageKey = "tasks";

    let tasks = loadTasks();

    addButton.addEventListener("click", addTask);
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    render();

    function addTask() {
        const text = input.value.trim();

        if (text === "") {
            return;
        }

        tasks.push({ text, done: false });
        input.value = "";
        saveTasks();
        render();
        input.focus();
    }

    function render() {
        list.innerHTML = "";

        const completedTasks = tasks.filter((task) => task.done).length;
        const remainingTasks = tasks.length - completedTasks;
        const completionPercentage = tasks.length
            ? Math.round((completedTasks / tasks.length) * 100)
            : 0;

        taskCount.textContent = `${remainingTasks} ${remainingTasks === 1 ? "task" : "tasks"} left`;
        progress.textContent = `${completionPercentage}%`;
        document.documentElement.style.setProperty("--progress", `${completionPercentage * 3.6}deg`);

        if (tasks.length === 0) {
            const emptyMessage = document.createElement("li");
            emptyMessage.className = "empty-message";
            emptyMessage.textContent = "Nothing here yet. Add your first task!";
            list.appendChild(emptyMessage);
            return;
        }

        tasks.forEach((task, index) => {
            const item = document.createElement("li");
            const taskText = document.createElement("span");
            const deleteButton = document.createElement("button");

            taskText.textContent = task.text;
            taskText.className = "task-text";
            taskText.addEventListener("click", () => toggleTask(index));

            if (task.done) {
                item.classList.add("done");
            }

            deleteButton.type = "button";
            deleteButton.className = "delete-btn";
            deleteButton.textContent = "×";
            deleteButton.setAttribute("aria-label", `Delete ${task.text}`);
            deleteButton.addEventListener("click", () => deleteTask(index));

            item.append(taskText, deleteButton);
            list.appendChild(item);
        });
    }

    function toggleTask(index) {
        tasks[index].done = !tasks[index].done;
        saveTasks();
        render();
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        saveTasks();
        render();
    }

    function loadTasks() {
        const savedTasks = localStorage.getItem(storageKey);

        if (!savedTasks) {
            return [];
        }

        try {
            const parsedTasks = JSON.parse(savedTasks);
            return Array.isArray(parsedTasks) ? parsedTasks : [];
        } catch (error) {
            console.error("Unable to load saved tasks.", error);
            return [];
        }
    }

    function saveTasks() {
        localStorage.setItem(storageKey, JSON.stringify(tasks));
    }
})();
