const addBtn = document.getElementById("add-note");
const container = document.getElementById("notes-container");

let notes = JSON.parse(localStorage.getItem("stickyNotes")) || [];

function saveNotes(){
    localStorage.setItem("stickyNotes", JSON.stringify(notes));
}


function createNote({ id, content, x = 100, y = 100, createdAt }) {
    const noteEl = document.createElement("div");
    noteEl.className = "note";
    noteEl.style.left = `${x}px`;
    noteEl.style.top = `${y}px`;

    const header = document.createElement("div");
    header.className = "note-header";

    const moveIcon = document.createElement("div");
    moveIcon.className = "move-icon";
    moveIcon.innerText = "☰";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.innerText = "×";

    const dateEl = document.createElement("div");
    dateEl.className = "note-date";

    const dateObj = new Date(createdAt);
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
    dateEl.innerText = dateObj.toLocaleString('en-GB', options); 

    header.appendChild(moveIcon);
    header.appendChild(deleteBtn);

    const textarea = document.createElement("textarea");
    textarea.value = content;

    noteEl.appendChild(header);
    noteEl.appendChild(dateEl); 
    noteEl.appendChild(textarea);
    container.appendChild(noteEl);

    let offsetX, offsetY;
    header.addEventListener("mousedown", (e) => {
        if (window.innerWidth <= 768) return;
        offsetX = e.offsetX;
        offsetY = e.offsetY;

        function onMouseMove(ev) {
            noteEl.style.left = `${ev.pageX - offsetX}px`;
            noteEl.style.top = `${ev.pageY - offsetY}px`;
        }

        function onMouseUp() {
            const idx = notes.findIndex((n) => n.id === id);
            notes[idx].x = parseInt(noteEl.style.left);
            notes[idx].y = parseInt(noteEl.style.top);
            saveNotes();
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });

    deleteBtn.addEventListener("click", () => {
        noteEl.remove();
        notes = notes.filter((n) => n.id !== id);
        saveNotes();
    });

    textarea.addEventListener("input", () => {
        const idx = notes.findIndex((n) => n.id === id);
        notes[idx].content = textarea.value;
        saveNotes();
    });
}


addBtn.addEventListener("click", ()=>{
    const newNote = {
        id:Date.now(),
        content:"",
        x:100,
        y:100,
        createdAt: new Date().toISOString(),
    };
    notes.push(newNote);
    saveNotes();
    createNote(newNote);
});

notes.forEach((note) => createNote(note));


const darkModeBtn = document.getElementById("toggle-dark-mode");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});
