const categorieMoove = document.querySelector("#moove");
const categorieControl = document.querySelector("#control");
const categorieEvent = document.querySelector("#event");
const categorieOperator = document.querySelector("#operator");
const categorieVariable = document.querySelector("#variable");
const blockPanel  = document.querySelector(".block-panel");


const blockControl = document.querySelectorAll('.block-control');
const blockAction = document.querySelectorAll('.block-action');
const blockEvent = document.querySelectorAll('.block-event'); 
const blockOperator = document.querySelectorAll('.block-operator'); 
const blockVariable = document.querySelectorAll('.block-variable'); 


const categories = [categorieMoove, categorieControl, categorieEvent, categorieOperator, categorieVariable];

function removeActiveClasses() {

  blockPanel.querySelectorAll('.block').forEach(block => {
    block.style.opacity = 0;
  });

  categories.forEach(categorie => {
    categorie.classList.remove("active");
  });
}

categorieMoove.addEventListener("click", function () {
  removeActiveClasses();
  blockPanel.style.backgroundColor = "#3E55FF";
  categorieMoove.classList.add("active");
  
  blockAction.forEach(block => block.style.opacity = 1);
});

categorieControl.addEventListener("click", function () {
  removeActiveClasses();
  blockPanel.style.backgroundColor = "#FFE53E";
  categorieControl.classList.add("active");
  
  blockControl.forEach(block => block.style.opacity = 1);
});

categorieEvent.addEventListener("click", function () {
  removeActiveClasses();
  blockPanel.style.backgroundColor = "#A21FFF";
  categorieEvent.classList.add("active");
  
  blockEvent.forEach(block => block.style.opacity = 1); 
});

categorieOperator.addEventListener("click", function () {
  removeActiveClasses();
  blockPanel.style.backgroundColor = "#1FFF6A";
  categorieOperator.classList.add("active");
  
  blockOperator.forEach(block => block.style.opacity = 1); 
});

categorieVariable.addEventListener("click", function () {
  removeActiveClasses();
  blockPanel.style.backgroundColor = "#F63131";
  categorieVariable.classList.add("active");
  
  blockVariable.forEach(block => block.style.opacity = 1);
});


// expand
const imgExpand = document.querySelector(".expand-arrow");
const rightPart = document.querySelector(".right-part");
const leftPart = document.querySelector(".left-part");
const component = document.querySelector("#component");
const componentContent = document.querySelector(".component-content");
const categorie = document.querySelector(".categorie");
const assemble = document.querySelector("#assemble");
const preview = document.querySelector("#preview");
const board = document.querySelector(".board");

imgExpand.addEventListener("click", function() {
    rightPart.classList.toggle("active");
    leftPart.classList.toggle("active");
    component.classList.toggle("active");
    componentContent.classList.toggle("active");
    categorie.classList.toggle("active");
    blockPanel.classList.toggle("active");
    assemble.classList.toggle("active");
    preview.classList.toggle("active");
    imgExpand.classList.toggle("active");
    board.classList.toggle("active");
});

export default { 
  removeActiveClasses, 
  categorieMoove, 
  categorieControl, 
  categorieEvent, 
  categorieOperator, 
  categorieVariable, 
  blockPanel, 
  blockControl, 
  blockAction, 
  blockEvent, 
  blockOperator, 
  blockVariable,
  imgExpand
};

