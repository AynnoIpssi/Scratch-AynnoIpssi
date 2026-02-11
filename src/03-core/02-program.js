// Drag and drop :

const block = document.querySelectorAll(".block");
const boardDrag = document.querySelector(".board")
const blockDropZone = document.querySelector(".block-control-drop-zone");

block.forEach(block => {
    block.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData('text', e.target.id); 
        e.target.classList.add("dragging"); 
    });
});

boardDrag.addEventListener("dragover", (e) => {
    e.preventDefault(); 
});

boardDrag.addEventListener("drop", (e) => {
    e.preventDefault();
    blockDragged = document.querySelector(".dragging"); 
    boardDrag.appendChild(blockDragged)
});

blockDropZone.addEventListener("dragover", (e) => {
    e.preventDefault(); 
});

blockDropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    blockDragged = document.querySelector(".dragging"); 
    blockDropZone.appendChild(blockDragged);
});


export default {
    block,
    boardDrag,
    blockDropZone
}
