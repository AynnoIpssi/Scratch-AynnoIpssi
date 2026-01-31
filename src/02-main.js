const categorieMoove = document.querySelector("#moove")
const categorieControl = document.querySelector("#control")
const categorieEvent = document.querySelector("#event")
const categorieOperator = document.querySelector("#operator")
const categorieVariable = document.querySelector("#variable")
const blockPanel  = document.querySelector(".block-panel")

categorieMoove.addEventListener("click", function(){
    blockPanel.style.backgroundColor = "#3E55FF";
})

categorieControl.addEventListener("click", function(){
    blockPanel.style.backgroundColor = "#FFE53E";
})

categorieEvent.addEventListener("click", function(){
    blockPanel.style.backgroundColor = "#A21FFF";
})

categorieOperator.addEventListener("click", function(){
    blockPanel.style.backgroundColor = "#1FFF6A";
})

categorieVariable.addEventListener("click", function(){
    blockPanel.style.backgroundColor = "#F63131";
})

const imgExpand = document.querySelector(".expand-arrow")
const rightPart = document.querySelector(".right-part")
const leftPart = document.querySelector(".left-part")
const component = document.querySelector("#component")
const componentContent = document.querySelector(".component-content")
const categorie = document.querySelector(".categorie")
const assemble = document.querySelector("#assemble")
const preview = document.querySelector("#preview")



imgExpand.addEventListener("click", function(){
    rightPart.classList.toggle("active")
    leftPart.classList.toggle("active")
    component.classList.toggle("active")
    componentContent.classList.toggle("active")
    categorie.classList.toggle("active")
    blockPanel.classList.toggle("active")
    assemble.classList.toggle("active")
    preview.classList.toggle("active")
    imgExpand.classList.toggle("active")
})

const block = document.addEventListenerAll(".block-exemple1")
const dropZone = document.querySelector("#assemble")

function knowFree(x, y, width, heigt, blocs){
    for (let bloc of blocs){
        const rect = bloc.getBoundingClientRect();
        const dropRect = getBoundingClentRect();
        const dx = rect.left - dropRect.left
        const dy = rect.top - dropRect.top

        if (
            x < dx + rect.width &&
            x + width > dx &&
            y < dy + rect.height &&
            y + height > dy
        ){
            return false;
        }
    }
    return true;
}




