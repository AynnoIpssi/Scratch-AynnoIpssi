const expand = document.querySelector("#expand");
const component = document.querySelector("#component");
const assemble = document.querySelector("#assemble");
const preview = document.querySelector("#preview");
const leftPart = document.querySelector(".left-part");
const rightPart = document.querySelector(".right-part");

expand.addEventListener("click", function(){
    component.classList.toggle("ative");
    assemble.classList.toggle("ative");
    preview.classList.toggle("ative");
    rightPart.classList.toggle("acitve");
})